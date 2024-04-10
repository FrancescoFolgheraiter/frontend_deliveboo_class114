<script>
import BoxComponent from '../BoxComponent.vue'; 
import TestimonialComponent from '../TestimonialComponent.vue';
import RestaurantListComponent from '../RestaurantListComponent.vue';
import Slider1Component from '../Slider1Component.vue'; 

    export default{
        data(){
            return{
                faqAccordion: [
                    {
                        h2: "Quali pagamenti accettate sul vostro sito?",
                        text: "Accettiamo tutte le modalità di pagamento, quindi, carte di credito, carte di debito, PayPal e altri metodi di pagamento online. Accettiamo anche pagamenti in contanti alla consegna."
                    },
                    {
                        h2: "Qual è il tempo stimato di consegna medio?",
                        text: "Il tempo medio stimato per la consegna è tra 30 e 45 minuti. La puntualità della consegna può variare in base a diversi fattori come l'orario di punta o le condizioni meteorologiche."
                    },
                    {
                        h2: "Come posso controllare lo stato del mio ordine?",
                        text: "È possibile controllare lo stato dell'ordine attraverso la nostra App o sul sito web. Troverete diversi stati dell'ordine: 'In preparazione', 'In consegna' o 'Consegnato'."
                    }
                ],

                carouselWhyChoose: [
                    "/img/foto2.png",
                    "/img/foto3.png",
                    "/img/foto4.png"
                ]

            };
        },
        methods:{
         

        },
        components: {
          BoxComponent,
          TestimonialComponent,
          RestaurantListComponent,
          Slider1Component

        }
    }
</script>

<template>
    <main>

        <!--SEZIONE 1 - RICERCA RISTORANTI-->
        <section class="my-4"> <!-- JUMBOTRON -->
                <div class="container">
                   <div class="jumbotron">
                        <div class="text-jumbo">
                            <h2>
                                Super Fast <span>Food Delivery</span> Service
                            </h2>
                            <p>We provide Super Fast-Delivery Service. Let's Use Our Services Right Now And Get Discounts Od Up To 50%</p>
                            
                            <button>DOWNLOAD APP</button>
                        </div>

                        <div class="img-jumbo">
                            <img src="/img/bgremove.png" alt="">
                        </div>
                   </div>
                </div>   
            </section>

            <section>
                <Slider1Component/>
            </section>
            
            
        <!--FINE SEZIONE 1-->

        <RestaurantListComponent/>   

        <!--INIZIO SEZIONE 4 - PERCHE' SCEGLIERCI -->
        <section class="my-4">
                <div class="container">
                    <div class="why-choose">
                        <div class="img-why">
                            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" v-for="(pics) in carouselWhyChoose">
                                    <img :src="pics" class="d-block w-100" alt="...">
                                    </div>                                  
                                </div>
                            </div>
                        </div>

                        <div class="text-why">
                            <h3><span>Stay</span> At Home, We Will Provide <span>Good Food</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nobis! Lorem ipsum dolor sit amet.</p>
                            <ul>
                                <li>
                                    <i class="fa-regular fa-clock fa-xl"></i>
                                    <p>Puntualità</p>
                                </li>
                                <li>
                                    <i class="fa-regular fa-star fa-xl"></i>
                                    <p>Qualità</p>
                                </li>
                                <li>
                                    <i class="fa-regular fa-face-smile fa-xl"></i>
                                    <p>Cordialità</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!--FINE SEZIONE 4-->
            
            <TestimonialComponent/>
            
            <!--INIZIO SEZIONE 5 - FAQ-->
        <section>
            <div class="">
                <div class="container">
                    <div class="row align-items-center m-0">
                        <div class="col-lg-6">
                            <h3 class="text-center">
                                FAQ
                            </h3>
                            <div class="accordion accordion-flush mb-5" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed background-h2-faq" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Quali pagamenti accettate sul vostro sito?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Accettiamo tutte le modalità di pagamento, quindi, carte di credito, carte di debito, PayPal e altri metodi di pagamento online. Accettiamo anche pagamenti in contanti alla consegna.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed background-h2-faq" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Qual è il tempo stimato di consegna medio?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Il tempo medio stimato per la consegna è tra 30 e 45 minuti. La puntualità della consegna può variare in base a diversi fattori come l'orario di punta o le condizioni meteorologiche.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed background-h2-faq" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Come posso controllare lo stato del mio ordine?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">È possibile controllare lo stato dell'ordine attraverso la nostra App o sul sito web. Troverete diversi stati dell'ordine: "In preparazione", "In consegna" o "Consegnato".</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="img-faq">
                                <img class="w-100" src="/img/foto5.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--FINE SEZIONE 5-->

    </main>
  </template>

<style lang="scss" scoped>
.jumbotron{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0,5px solid gray;
    border-radius: 10px;
    -webkit-box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35); 
    box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);

    >*{
        width: calc(100% / 2);
    }

    @media(max-width: 767px){
        width:100%;
        display: block;
    }
    
    .text-jumbo{
       padding: 20px;
       margin-right: 10px;
    
       @media(max-width: 767px){
        width: 100%;
       }




       p{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
       }

       h2{
        font-size: 50px;
        font-weight: 600;

        span{
            color: #f14647;
        }
       }

       button{
        background-color: #f14647;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 600;
       }
    }



    .img-jumbo{
        padding: 10px;
        margin-right: 5px;
        img{
            width: 80%;
        };
    }

    @media(max-width:767px){ 
        .img-jumbo{
            img{
                display: none;
            }
        }
    }


}

//FINE CSS SEZIONE 1


//CSS SEZIONE 2
h4{
    text-align: center;
}



//CSS SEZIONE 4
.why-choose{
    display: flex;
    align-items: center;
    border-radius: 10px;

    
    >*{
        width: calc(100% / 2);
        border-radius:10px;
    }

    .img-why{
        img{
            width: 100%;
            object-fit: contain;
            background-color: white;
            overflow: hidden;
            border-radius: 10px;
        }

        .carousel-color{
            background-color: #f14647;
        }
    }

}

.text-why{
    background-color: white;
    h3{
        font-weight: 600;
        font-size: 40px;
        background-color: white;
    }
    
    span{
        color: #f14647;
        background-color: white;
    }

    p{
        background-color: white;
    }

    ul{
        background-color: white;
        padding: 0;
        li{
            background-color: white;
            
            i{
                color: #f14647;
            }


            p{
                display: inline-block;
                margin-left: 10px;
                font-weight: 600;
                color:#1f272d;
            }
        }
    }

}
//FINE CSS SEZIONE 4


//CSS SEZIONE 5
.background-color-section-5{
    background-color: rgb(219, 53, 69);
    color: white;

    .background-h2-faq{
        background-color: rgb(242, 212, 90);
    }
}

@media(max-width: 991px){
    .img-faq{
        img{
            display: none;
        }
    }
}

ul{
    list-style: none;
}


</style>
