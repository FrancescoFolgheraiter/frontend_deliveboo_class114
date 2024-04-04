<script>
import axios from 'axios'

export default {
    data() {
        return {
            items: [], // Array di piatti
            restaurantId: 0, // ID del ristorante desiderato (da impostare manualmente o in base a qualche logica)
            restaurant: {}, // Oggetto ristorante
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
                        this.restaurant = this.items[3].user;
                        this.dishes = this.items[2];
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
    <div class="restaurant-page">
        <div class="container">
            <div class="row">
                <!-- Blocco al centro -->
                <div class="center-block text-center col-lg-8 col-md-12">


                    <div class="box-name-resturant">
                        <h1>{{ restaurant.resturant_name }}</h1>
                        <h2>{{ restaurant.address}}</h2>
                    </div>

                    <div class="container-fluid">
                        <div v-for="item in items" :key="item.id" class="box-card col-md-12 col-lg-12 mb-2">
                            <div class="box-description">
                                <h3 class="m-2">{{ item.name }}</h3>
                                
                                <h5 class="d-none d-sm-block">ingredienti:</h5>
                                <h4 class="m-2 d-none d-sm-none d-md-none d-lg-block">{{ item.ingredients }}</h4>

                                <div class="accordion accordion-flush d-md-block d-lg-none p-1" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <p class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                INGREDIENTI
                                            </button>
                                        </p>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ item.ingredients }}</div>
                                        </div>
                                    </div>
                                </div>

                                <h6>{{ item.price }}€</h6>
                                <button type="button" class="btn btn-primary mb-3 col" disabled>aggiungi</button>
                            </div>

                            <div class="box-dx">
                                <img class="imge-returant"  :src="'http://127.0.0.1:8000/storage/'+ item.image" alt="">
                            </div>

                        </div>
                    </div>
                </div>
                
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
            </div>
        </div>
    </div>
           
</template>
       





<style lang="scss" scoped>



.box-name-resturant {
    font-family: 'Times New Roman', Times, serif;
}

.center-block::-webkit-scrollbar {
    display: none; 
}

.center-block {
    overflow-y: scroll;
    height: 700px;
    border-radius: 10%;
}

h1 {
    color: rgb(241, 70, 71);
}

.box-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    border-radius: 50px;
    background-image: linear-gradient(
        310deg,
        hsl(359deg 78% 52%) 10%,
        hsl(359deg 78% 54%) 24%,
        hsl(359deg 78% 56%) 30%,
        hsl(359deg 78% 58%) 33%,
        hsl(359deg 78% 61%) 36%,
        hsl(359deg 78% 63%) 38%,
        hsl(359deg 78% 65%) 40%,
        hsl(359deg 78% 67%) 41%,
        hsl(359deg 78% 69%) 43%,
        hsl(359deg 78% 71%) 44%,
        hsl(359deg 78% 74%) 46%,
        hsl(359deg 78% 76%) 48%,
        hsl(359deg 78% 78%) 50%,
        hsl(359deg 78% 80%) 52%,
        hsl(359deg 77% 83%) 55%,
        hsl(359deg 77% 85%) 58%,
        hsl(359deg 76% 87%) 62%,
        hsl(359deg 76% 90%) 66%,
        hsl(359deg 74% 92%) 72%,
        hsl(359deg 72% 95%) 78%,
        hsl(359deg 65% 97%) 87%,
        hsl(0deg 0% 99%) 100%
    );
}

.box-dx {
    width: 200px;
    height: 300px; 
    object-fit: contain;
    
   
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: linear-gradient(to start, rgba(1,0,0,0), rgba(1,0,0,1));
    }
}

.box-description {
    text-align: center; // Aggiunto per centrare il testo
    padding: 20px;
}

.cart {
    background-image: linear-gradient(
        310deg,
        hsl(359deg 78% 52%) 10%,
        hsl(359deg 78% 54%) 24%,
        hsl(359deg 78% 56%) 30%,
        hsl(359deg 78% 58%) 33%,
        hsl(359deg 78% 61%) 36%,
        hsl(359deg 78% 63%) 38%,
        hsl(359deg 78% 65%) 40%,
        hsl(359deg 78% 67%) 41%,
        hsl(359deg 78% 69%) 43%,
        hsl(359deg 78% 71%) 44%,
        hsl(359deg 78% 74%) 46%,
        hsl(359deg 78% 76%) 48%,
        hsl(359deg 78% 78%) 50%,
        hsl(359deg 78% 80%) 52%,
        hsl(359deg 77% 83%) 55%,
        hsl(359deg 77% 85%) 58%,
        hsl(359deg 76% 87%) 62%,
        hsl(359deg 76% 90%) 66%,
        hsl(359deg 74% 92%) 72%,
        hsl(359deg 72% 95%) 78%,
        hsl(359deg 65% 97%) 87%,
        hsl(0deg 0% 99%) 100%
    );
    padding: 20px;
    margin-top: 30px;
    border-radius: 50px;
    border: 3px solid white;

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

</style>






