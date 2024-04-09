<script>
import axios from 'axios';
import {store} from '../../store.js';

export default {
    data() {
        return {
            store,
            totalCost: 0,
            dishes:{}
        };
    },
    methods: {
        //chiamata api che mi preleva i piatti con il parametro
        //name del ristorante 
        getAllDishes() {
            
            axios.get('http://127.0.0.1:8000/api/dishes',{
                params:{
                    name: this.store.restaurantActive['resturant_name']
                }
            })
            .then((res) => {
                this.dishes = res.data.data.foods;
                console.log(this.dishes);
            })
            .catch((error) => {
                console.log('Recupero paitti non riuscito errrore: '.error)
            })
        },
        //funzione che prende come argomento il piatto e lo aggiunge al carrello
        addToCart(item) {
            //controllo se il piatto è già stato inserito all'interno del carrello
            const existingItem = this.store.cartItems.find(cartItem => cartItem.id === item.id);
            //se  il piatto è già presente incremento la quantità
            if (existingItem) {
                existingItem.quantity++;
            } else {
                //significa che il piatto non è presente
                //quindi creo un nuovo oggetto partendo da dish ed aggiungendo l'immagine
                const newItem = { ...item, quantity: 1, imageUrl: 'http://127.0.0.1:8000/storage/' + item.image };
                this.store.cartItems.push(newItem);
            }
            localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems))
            this.calculateTotalCost();
        },
        calculateTotalCost() {
            let total = this.store.totalCostSave;

            // Itera attraverso ogni elemento nel carrello
            for (let i = 0; i < this.store.cartItems.length; i++) {
                const item = this.store.cartItems[i];
                
                // Calcola il costo totale per questo elemento (prezzo * quantità)
                const itemTotalCost = item.price * item.quantity;

                // Aggiungi il costo totale di questo elemento al costo totale complessivo
                total += itemTotalCost;
            }

            // Assegna il costo totale calcolato alla proprietà totalCost
            this.totalCost = total.toFixed(2);
        },
            // Incrementa la quantità di un elemento nel carrello
        incrementQuantity(index) {
            this.store.cartItems[index].quantity++;

            // aggiorno la quantità del carrello anche nel localstorage (cartItems)
            localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
            this.calculateTotalCost();
        },
        // Decrementa la quantità di un elemento nel carrello
        decrementQuantity(index) {
            if (this.store.cartItems[index].quantity > 1) {
                this.store.cartItems[index].quantity--;
                
                // aggiorno la quantità del carrello anche nel localstorage (cartItems)
                localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
                this.calculateTotalCost();
            }
        },
        // Rimuove un elemento dal carrello
        removeFromCart(index) {
            const itemPrice = this.store.cartItems[index].price * this.store.cartItems[index].quantity;
            this.store.cartItems.splice(index, 1);
            this.totalCost -= itemPrice.toFixed(2);
        },
        emptyCart() {
        //svuoto il localStorage
        localStorage.clear();
        //svuoto il carrello 
        this.store.cartItems = [];
        // Ricalcolo del costo totale
        this.calculateTotalCost();
    },
    },
    created() {
        //recupero del carrello salvato nello storage
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            this.store.cartItems = savedCartItems;
        }

        this.getAllDishes();
        this.calculateTotalCost();
    },
    mounted(){

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
                        <h1>{{ store.restaurantActive['resturant_name']}}</h1>
                        <div class="box-dx">
                                <img class="imge-returant"  :src="'http://127.0.0.1:8000/storage/'+ store.restaurantActive['resturant_image']" :alt="store.restaurantActive['resturant_name']">
                        </div>
                        <h5>indirizzo:{{ store.restaurantActive['address']}}</h5>
                    </div>
                    <!-- fine blocco descrizione ristorante -->

                    <!-- blocco piatti -->
                    <div class="container-fluid">
                        <div v-for="dish in dishes" :key="dish.id" class="box-card col-md-12 col-lg-12 mb-2">
                            <div class="box-description">
                                <h3 class="m-2">{{ dish.name }}</h3>
                                <h5 class="d-none d-sm-none  d-none d-md-none">ingredienti:</h5>
                                <h4 class="m-2 d-none d-sm-none d-md-none d-lg-block">{{ dish.ingredients }}</h4>
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
                                                    <li>{{ dish.ingredients }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="ms-2">{{ dish.price }}€</h6>
                                <button type="button" class="btn btn-primary mb-3 ms-2" @click="addToCart(dish)">aggiungi</button>
                            </div>
                            <div class="box-dx">
                                <img class="imge-returant"  :src="'http://127.0.0.1:8000/storage/'+ dish.image" :alt="dish.name">
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
                        <div class="d-flex justify-content-between ">
                            <div>
                                <routerLink :to="{name:'payment.index'}" class="text-white text-decoration-none btn btn-success">
                                    Vai al pagamento
                                </routerLink>
                            </div>
                            <div v-if="this.store.cartItems.length > 0">
                                <button class="btn btn-danger" @click="emptyCart()">Svuota carrello</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Blocco 2 - fine - Carrello -->
            </div>
        </div>
    </div>

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






