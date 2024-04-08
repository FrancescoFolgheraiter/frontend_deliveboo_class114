<script>
import axios from 'axios';
import {store} from '../../store.js';

export default {
    data() {
        return {
            items: [], 
            restaurantId: 0, 
            restaurant: {}, 
            dishes: {},
           // this.store.cartItems: [], // Aggiungi questa proprietà per tenere traccia degli elementi nel carrello
            totalCost: 0, // Totale dei costi nel carrello
            store
        };
    },
    created() {
        this.getAllDishesForRestaurant();
    },
    methods: {
        getAllDishesForRestaurant() {
            axios.get(`http://127.0.0.1:8000/api/dishes?restaurant_id=${this.restaurantId}`)
                .then((res) => {
                    console.log(res);
                    this.items = res.data.data.foods.data;
                    
                    if (this.items.length > 0) {
                        this.restaurant = this.items[5].user;
                    }
                })
                .catch((error) => {
                    console.error('Errore durante il recupero dei piatti:', error);
                });
        },
// Aggiunge un elemento al carrello
        addToCart(item) {
            const existingItem = this.store.cartItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                // Aggiungi l'URL dell'immagine al nuovo elemento del carrello
                const newItem = { ...item, quantity: 1, imageUrl: 'http://127.0.0.1:8000/storage/' + item.image };
                this.store.cartItems.push(newItem);
            }
            this.calculateTotalCost();
        },
        // Rimuove un elemento dal carrello
        removeFromCart(index) {
            const itemPrice = this.store.cartItems[index].price * this.store.cartItems[index].quantity;
            this.store.cartItems.splice(index, 1);
            this.totalCost -= itemPrice;
        },
        // Incrementa la quantità di un elemento nel carrello
        incrementQuantity(index) {
            this.store.cartItems[index].quantity++;
            this.calculateTotalCost();
        },
        // Decrementa la quantità di un elemento nel carrello
        decrementQuantity(index) {
            if (this.store.cartItems[index].quantity > 1) {
                this.store.cartItems[index].quantity--;
                this.calculateTotalCost();
            }
        },
        // Calcola il totale dei costi nel carrello
        calculateTotalCost() {
            let total = this.store.totalCostSave;

            // Itera attraverso ogni elemento nel carrello
            for (let i = 0; i < this.store.cartItems.length; i++) {
                const item = this.store.cartItems[i];
                
                // Calcola il costo totale per questo elemento (prezzo * quantità)
                const itemTotalCost = item.price * item.quantity;

                // Aggiungi il costo totale di questo elemento al costo totale complessivo
                total += itemTotalCost;
                console.log(item);
            }

            // Assegna il costo totale calcolato alla proprietà totalCost
            this.totalCost = total;
        },
        
        vaiAlPagamento() {
        // Reindirizza l'utente all'URL desiderato
        window.location.href = 'http://localhost:3000/';
    },
    },

    mounted(){
        console.log(this.store.cartItems);
    }
}
</script>

<template>
<div>
    <routerLink :to="{name:'home'}">
        HOME
    </routerLink>
</div>

    <div class="resturant-page">
        <div class="container">
            <div class="row">
                <div class="center-block text-center col-lg-8 col-md-12">
                    <!-- blocco descrizione ristorante -->
                    <div class="box-name-resturant">  
                        <h1>{{ restaurant.resturant_name }}</h1>
                        <p>Distanza: 1.31 km</p>
                        <p>Chiude alle: 23:30</p>
                        <p>Minimo d'ordine: 10,00 €</p>
                        <p>Consegna a 1,75 €</p>
                        <h5>indirizzo:{{ restaurant.address}}</h5>
                    </div>
                    <!-- fine blocco descrizione ristorante -->

                    <!-- blocco piatti -->
                    <div class="container-fluid">
                        <div v-for="item in items" :key="item.id" class="box-card col-md-12 col-lg-12 mb-2">
                            <div class="box-description">
                                <h3 class="m-2">{{ item.name }}</h3>
                                <h5 class="d-none d-sm-none  d-none d-md-none">ingredienti:</h5>
                                <h4 class="m-2 d-none d-sm-none d-md-none d-lg-block">{{ item.ingredients }}</h4>
                                <div class="accordion accordion-flush d-md-block d-lg-none p-1" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <p class="accordion-header ">
                                            <button class="accordion-button bg-primary text-white collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                INGREDIENTI
                                            </button>
                                        </p>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <ul class="ingredient-list">
                                                    <li>{{ item.ingredients }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="ms-2">{{ item.price }}€</h6>
                                <button type="button" class="btn btn-primary mb-3 ms-2" @click="addToCart(item)">aggiungi</button>
                            </div>
                            <div class="box-dx">
                                <img class="imge-returant"  :src="'http://127.0.0.1:8000/storage/'+ item.image" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- fine blocco piatti -->
                </div>
                <!--fine Blocco ristorante -->

                <!-- Blocco 2 - Carrello -->
                <div class="col-lg-4 mb-4 col-12 col-sm-12">
                    <div class="cart text-center width-cart-sm">
                        <h3>Il tuo ordine</h3>
                        <div class="cart-items">
                            <div v-for="(cartItem, index) in this.store.cartItems" :key="index" class="cart-item d-flex align-items-center justify-content-evenly">
                                <!-- Immagine del prodotto -->
                                <div>
                                    <button class="button-delete me-1" @click="removeFromCart(index)">
                                        <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
                                    </button>
                                </div>
                                <div class="width-cart-img">
                                    <img :src="cartItem.imageUrl" :alt="cartItem.name" class="cart-item-image w-100">
                                </div>
                                <div>
                                    <p>{{cartItem.name }}</p>
                                    <p class="mt-1 mb-1">{{ cartItem.price }}€</p>
                                    <div>
                                        <button class="btn" @click="decrementQuantity(index)">-</button>
                                        Tot: {{ cartItem.quantity }}
                                        <button class="btn me-1" @click="incrementQuantity(index)">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <p v-if="this.store.cartItems.length > 0">Totale: {{ totalCost }}€</p>
                            <p v-else>Il carrello è vuoto</p>
                        </div>
                        <div>
                            <button class="btn btn-success" @click="vaiAlPagamento()">Vai al pagamento</button>
                        </div>
                    </div>
                </div>
                <!-- Blocco 2 - fine - Carrello -->
            </div>
        </div>
    </div>
    <h1>
        {{ this.store.cart }}
        
    </h1>
</template>
       





<style lang="scss" scoped>


.resturant-page{
    background-color: #f7f7f7ea;
}



.box-name-resturant {
        font-family: 'Times New Roman', Times, serif;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        
        flex-direction: column;
        margin: auto;
        width: 100%;
        padding: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
        background-color: #fff;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease; /* Animazione*/
        align-items: start;
    }

    .box-name-resturant:hover {
        transform: translateY(-5px); /* Sposta leggermente verso l'alto al passaggio del mouse */
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    }

    .box-name-resturant h1 {
        color:rgb(13, 110, 273);
        margin-bottom: 10px;
        font-size: 44px; 
    }

    .box-name-resturant p {
        color: #666;
        margin-bottom: 5px;
        font-size: 16px; 
        align-items: start;
    }

.center-block::-webkit-scrollbar {
    display: none; 
}

.center-block {
    overflow-y: scroll;
    height: 700px;
   
}

h1 {
    color: rgb(241, 70, 71);
}

.box-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    border-radius: 10px;
    -webkit-box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35); 
    box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);
    width: auto;
    background-color: white;
    transition: all 0.5s ease;
    
}



.box-card:hover {transform: translateY(-5px); /* Sposta leggermente verso l'alto al passaggio del mouse */
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
} 


.box-dx {
    width: 150px;
    height: 150px;
    
    border-radius: 5px;
    object-fit: contain;
    overflow: hidden; /* Per rimuovere il bordo impercettibile */
    margin-right: 10px;
}

.box-dx img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box-description {
    text-align: start; // Aggiunto per centrare il testo
    padding: 20px;
    
}


//CSS CARRELLO

.cart {
    padding: 20px;
    margin-top: 30px;
    border-radius: 20px;
    border: 3px solid white;
    box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);
    

    h3 {
        color: rgb(241, 70, 71);
    }

    .cart-items {
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        max-height: 300px;

        &::-webkit-scrollbar{
            display: none
        }
    }

    .cart-item {
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #f7f7f7ea;
        border-radius: 10px;
        margin-bottom: 5px;

        &:hover {
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
            transform: translateY(-3px);
        }

        p {
            margin: 0;
        }

        button {
            margin-left: 5px;
            border-radius: 50px;
            height: 24px;
            width: 24px;
            padding: 1px;
            background-color: rgb(26, 135, 84);
            color: white;
        }

        .button-delete{
            width: 24px;
            height: auto;
            border-radius: 50px;
            border: 1px solid red;
            background-color: rgb(242, 70, 70);
            color: white;
        }

        .width-cart-img{
            width: 115px;
        }
    }
}
// FINE CSS CARRELLO




.accordion-body {
    border-radius: 10px;
    padding: 15px;
}
.accordion-button{
    border-radius: 200px !important;
    width: 150px;
    height: 30px;
    
    
}
.ingredient-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.accordion-item{
    background-color: transparent;
}

.ingredient-list li {
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
}



// CSS WIDTH 992 - 1200 PX --> CARRELLO

@media (min-width: 992px) and (max-width: 1200px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item button {
    margin-top: 5px;
    margin-left: 0;
  }

  .button-delete {
    margin-bottom: 10px; 
  }

  .width-cart-img{
    margin-bottom: 5px;
  }
}


</style>






