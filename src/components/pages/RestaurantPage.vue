<script>
import axios from 'axios';
import {store} from '../../store.js';

export default {
    data() {
        return {
            store,
            totalCost: 0,
            dishes:{},
            user:[]
        };
    },
    methods: {
        //chiamata api che mi preleva i piatti con il parametro
        //name del ristorante
        
        getAllDishes() {
            const resturantName = this.$route.params.name ;
            console.log(resturantName)
            axios.get('http://127.0.0.1:8000/api/dishes',{
                params:{
                    name: resturantName
                }
            })
            .then((res) => {
                this.dishes = res.data.data.foods;
                this.user = res.data.data.user;
                console.log(this.user);
            })
            .catch((error) => {
                console.log('Recupero paitti non riuscito errrore: '.error)
            })
        },
        //funzione che prende come argomento il piatto e lo aggiunge al carrello
        addToCart(item) {
            //controllo se il carrello è vuoto
            if (this.store.cartItems.length === 0) {
                //controllo se il piatto è già stato inserito all'interno del carrello
                const newItem = { ...item, quantity: 1, imageUrl: 'http://127.0.0.1:8000/storage/' + item.image, restaurant_name: this.user['resturant_name'] };
                this.store.cartItems.push(newItem);
                localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
                this.calculateTotalCost();
            } else {
                // controllo se il piatto appartiene al ristorante su cui mi trovo 
                // mettendo a confronto this.store.cartItems (che ha restaurant_name) con this.user['resturant_name']
                // che è il nome del ristorante. Se corrispondono mi restituisce true se no false
                const restaurantCheck = this.store.cartItems.every(cartItem => cartItem.restaurant_name === this.user['resturant_name']);
                if (restaurantCheck) {
                    // se il ristorante del piatto nel carrello è lo stesso del ristorante attualmente visualizzato, aggiungo il piatto al carrello
                    const existingItem = this.store.cartItems.find(cartItem => cartItem.id === item.id);
                    //se il piatto è già presente incremento la quantità
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        //significa che il piatto non è presente
                        //quindi creo un nuovo oggetto partendo da dish ed aggiungendo l'immagine
                        const newItem = { ...item, quantity: 1, imageUrl: 'http://127.0.0.1:8000/storage/' + item.image, restaurant_name: this.user['resturant_name'] };
                        this.store.cartItems.push(newItem);
                    }
                    localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
                    this.calculateTotalCost();
                } else {
                    // se il carrello contiene piatti di un ristorante diverso, 
                    // mostro il model
                    this.showModal('Non puoi aggiungere piatti da un altro ristorante. Svuota il carrello prima di continuare.');
                }
            }
        },
        //funzione che mi permette di mostrare un messaggio e di selezionare 
        // il modal
        showModal(message) {
            document.getElementById('errorMessage').innerHTML = message;
            document.getElementById('customModal').classList.add('show');
            document.getElementById('customModal').style.display = 'block';
        },
        //funzione che mi permette di chiudere il modal tramite button o X
        closeModal() {
            document.getElementById('customModal').classList.remove('show');
            document.getElementById('customModal').style.display = 'none';
        },
        calculateTotalCost() {
            let total = 0;

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

            this.store.totalCostSave = this.totalCost;

            // Salvo il prezzo totale nel localStorage con key total_price
            //prima lo converto in stringa e poi lo salvo
            const totalCostString = this.store.totalCostSave.toString();
            localStorage.setItem('total_price', totalCostString);
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
            // aggiorno la quantità del carrello anche nel localstorage (cartItems)
            localStorage.setItem('cartItems', JSON.stringify(this.store.cartItems));
        },
        emptyCart() {
        //svuoto il localStorage
        localStorage.clear();
        //svuoto il carrello 
        this.store.cartItems = [];
        // Ricalcolo del costo totale
        this.calculateTotalCost();
        },
        // funzione apertura ingredienti 
        toggleIngredient(dish) {
        dish.isOpen = !dish.isOpen; // Inverti lo stato quando apri il pannello 
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

</div>

    <div class="resturant-page">
        <div class="container">
            <div class="row ">
                <div class="center-block text-center col-lg-8 col-md-12">
                    <!-- blocco descrizione ristorante -->
                    <div class="box-name-resturant">  

                        <div class="box-dx-description ">
                            <h1 class="fw-bold">{{ user['resturant_name']}}</h1>
                            <h5 class="address-font">{{ user['address']}}</h5>
                            <div class="img-restaurant">
                              <img  class="" :src="'http://127.0.0.1:8000/storage/'+ user['resturant_image']" :alt="user['resturant_name']">
                            </div>
                        </div>
                

                    </div>
                    <!-- fine blocco descrizione ristorante -->

                    <!-- blocco piatti -->
                    <div class="container-fluid">
                        <div v-for="dish in dishes" :key="dish.id" class="box-card col-md-12 col-lg-12 mb-2">
                            <div class="box-description">
                                <h3 class="m-2">{{ dish.name }}</h3>
                                <h5 class="d-none d-sm-none d-none d-md-none">ingredienti:</h5>
                                <p class="m-2 d-none d-sm-none d-md-none d-lg-block">{{ dish.ingredients }}</p>
                                <div class="accordion accordion-flush d-md-block d-lg-none p-1" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <p class="accordion-header">
                                            <button class="accordion-button text-white collapsed" type="button" @click="toggleIngredient(dish)" :aria-expanded="dish.isOpen" :aria-controls="'flush-collapse-' + dish.id">
                                                INGREDIENTI
                                            </button>
                                        </p>
                                        <div :id="'flush-collapse-' + dish.id" class="accordion-collapse collapse" :class="{ 'show': dish.isOpen }" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <ul class="ingredient-list">
                                                    <li>{{ dish.ingredients }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="ms-2">{{ dish.price }}€</h6>
                                <button type="button" class="btn color-button-aggiungi mb-3 ms-2" @click="addToCart(dish)">
                                    aggiungi
                                </button>
                            </div>
                            <div class="box-dx">
                                <img class="imge-returant" :src="'http://127.0.0.1:8000/storage/' + dish.image" :alt="dish.name">
                            </div>
                        </div>
                    </div>
                    <!-- fine blocco piatti -->
                </div>
                <!--fine Blocco ristorante -->
                <!-- Modal che blocca l'aggiunta di un piatto di un ristorante diverso -->
                <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id="customModalLabel">ATTENZIONE!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" @click="closeModal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p id="errorMessage"></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger text-white" data-bs-dismiss="modal" @click="closeModal">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Blocco 2 - Carrello -->
                <div class="col-lg-4 mb-4 col-12 d-none d-lg-block block-cart">
                    <div class="cart text-center width-cart-sm cart-sticky ">
                        <h3>Il tuo ordine</h3>
                        <div class="cart-items">
                            <div v-for="(cartItem, index) in this.store.cartItems" :key="index" class="cart-item d-flex align-items-center justify-content-evenly">
                                <div>
                                    
                                </div>
                                <div class="width-cart-img">
                                    <img :src="cartItem.imageUrl" :alt="cartItem.name" class="cart-item-image">
                                </div>
                                <div>
                                    <p class="cart-p-width">{{cartItem.name }}</p>
                                    <p class="mt-1 mb-1">{{ cartItem.price }}€</p>
                                    <div>
                                        <button class="button-delete me-1" @click="removeFromCart(index)">
                                        <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
                                        </button>
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
                        <div class="d-flex justify-content-between " v-if="this.store.cartItems.length > 0">
                            <div>
                                <router-link :to="{ name: 'payment' }" class="btn btn-success" @click="calculateTotalCost()">
                                    Vai al pagamento
                                </router-link>
                            </div>
                            <div >
                                <button class="btn btn-danger" @click="emptyCart()">Svuota carrello</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Blocco 2 - fine - Carrello -->
            </div>

           <!-- blocco 3 offcanvas -->

           <button class="btn sticky-bottom color-button-offcanvas d-block d-lg-none w-100  mt-5 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
            Il tuo carrello <span class="badge bg-primary">{{ store.cartItems.length }}</span>
           </button>

            <div class="offcanvas offcanvas-bottom d-block h-100 d-lg-none" data-bs-backdrop="static" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Carrello</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body d-block d-lg-none">

                    <div class="carta text-center h-100 ">
                        <h3 class="mb-5">Il tuo ordine</h3>
                        <div class="cart-items">
                            <div v-for="(cartItem, index) in this.store.cartItems" :key="index" class="cart-item">
                                <div>
                                    
                                </div>
                                <div class="width-cart-img">
                                    <img :src="cartItem.imageUrl" :alt="cartItem.name" class="cart-item-image ">
                                </div>
                                <div>
                                    <p class="cart-p-width">{{cartItem.name }}</p>
                                    <p class="mt-1 mb-1">{{ cartItem.price }}€</p>
                                    <div>
                                        <button class="button-delete " @click="removeFromCart(index)">
                                           <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
                                        </button>
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
                                <router-link :to="{ name: 'payment' }" class="btn btn-success" @click="calculateTotalCost()">
                                    Vai al pagamento
                                </router-link>
                            </div>
                            <div v-if="this.store.cartItems.length > 0">
                                <button class="btn btn-danger" @click="emptyCart()">Svuota carrello</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template>
       





<style lang="scss" scoped>


.resturant-page{
    background-color: white;
}


.box-name-resturant {
        font-family: "Poppins" ,sans-serif;
        border-radius: 20px;
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: end;
        padding: 20px;
        margin-top: 15px;
        height: 300px;
        margin-bottom: 15px;
        text-align: center;
        background-image: linear-gradient(to right, rgba(255,255,255,0.5), rgba(255, 255, 255, 0.887)), url('/img/bgremove.png');
        background-size: auto;
        background-repeat: no-repeat;
        background-position:unset;
        
}



/* Rimuovi il gradiente sui dispositivi più piccoli */
@media (min-width: 769px) {
    .box-name-resturant{
        background-image: url('/img/bgremove.png');
    }
}



.box-dx-description{
    text-align: end;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: flex-end

}



.img-restaurant {
    height: 150px;
    width: 150px;
    border-radius: 75px;
    
}
.img-restaurant img {
    width: 100%; /* Imposta la larghezza dell'immagine al 100% del contenitore */
    height: 100%; /* Imposta l'altezza dell'immagine al 100% del contenitore */
    object-fit: cover; /* Per mantenere l'aspect ratio e riempire completamente il contenitore */
    border-radius: 75px;
}


.center-block::-webkit-scrollbar {
    display: none; 
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
    width: 100%;
    width: 100%;
    background-color: white;
    transition: all 0.5s ease;
}



.box-card:hover { /* Sposta leggermente verso l'alto al passaggio del mouse */
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
} 


.box-dx {
    height: 150px;
    width: 30%;
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
    width: 70%;
    
}




//CSS CARRELLO

.block-cart{
    position: relative;

    .cart-sticky{
        position: sticky;
        top: 20%;
    }
}



.cart-p-width{
    width: 200px;
}

.cart {
    padding: 10px;
    margin-top: 30px;
    border-radius: 20px;
    border: 3px solid white;
    box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);
    

    h3 {
        color: rgb(241, 70, 71);
        padding: 10px;
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
            margin-right: 3px;
        }

        .width-cart-img{
            width: 60%;
        }
        .cart-item-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
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

//   .button-delete {
//     position: relative;
//     right: 100px;
//     top: 50px;
//   }

  .width-cart-img{
    margin-bottom: 5px;
    
  }
  
}

@media (min-width: 300px) and (max-width: 520px) {
    .address-font{
        font-size: 15px;
    }
    
    
}

@media (min-width: 300px) and (max-width: 720px) {
    
    
}
@media (min-width: 300px) and (max-width: 445px) {
    .address-font{
        font-size: 10px;
    }
}

// OFFCANVAS
.color-button-offcanvas, .accordion-button, .color-button-aggiungi{
    background-color: rgb(241, 70, 71);
    color: white
}

.carta {
    padding: 20px;
    margin-top: 30px;
    border-radius: 20px;
    border: 3px solid white;
    
    

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
        display: flex;
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
            
            border-radius: 50px;
            border: 1px solid red;
            background-color: rgb(242, 70, 70);
            color: white;
        }

        .width-cart-img{
            width: 30%;
        }
        .cart-item-image {
            width: 100%;
            height: 120px;
            object-fit: cover;
        }
        
    }
}


</style>






