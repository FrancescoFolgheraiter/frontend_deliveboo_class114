<script>
import axios from 'axios'

export default {
    data() {
        return {
            items: [], 
            restaurantId: 0, 
            restaurant: {}, 
            dishes: {}
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
    },
}
</script>

<template>
    <div class="resturant-page">
        <div class="container">
            <div class="row">

                <!-- Blocco ristorante -->
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
                                        <button type="button" class="btn btn-primary mb-3 ms-2" disabled>aggiungi</button>
                                    </div>

                                    <div class="box-dx">
                                        <img class="imge-returant"  :src="'http://127.0.0.1:8000/storage/'+ item.image" alt="">
                                    </div>

                                </div>
                            </div>
                        <!-- fine blocco piatti -->
                    </div>
                <!--fine Blocco ristorante -->

                <!--Blocco 2 -- Carrello-->
                <div class="col-lg-4 mb-4 col-12 col-sm-12">
                    <div class="cart text-center width-cart-sm">
                        <h3>Il tuo ordine</h3>
                        <div class="cart-item">
                            <p>Resoconto ordine:</p>
                            <p>Prezzo: $XX</p>
                            <div>
                                <img src="/img/foto2.png" alt="">
                            </div>
                            <div>
                                <button class="btn btn-danger">Rimuovi</button>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <p>Totale: $XX</p>
                        </div>
                        <div>
                            <button class="btn btn-success">Vai al pagamento</button>
                        </div>
                    </div>
                </div>
                <!--Blocco 2 -fine- Carrello-->
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
    border: 1px solid black; 
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

.cart {
   
    padding: 20px;
    margin-top: 30px;
    border-radius: 50px;
    border: 3px solid white;
    -webkit-box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35); 
    box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);

    h3 {
        color: rgb(241, 70, 71);
    }

    .cart-item {
        margin-bottom: 20px;
        border: 3px solid white;
        border-radius: 50px;
        padding: 10px;

        img {
            max-width: 100px;
            height: auto;
            margin-bottom: 10px;
        }
    }
}
/* CSS */
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

/* Aggiungi altri stili CSS secondo necessità */

</style>






