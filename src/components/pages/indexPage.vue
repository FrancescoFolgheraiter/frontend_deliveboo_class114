<script>
import BoxComponent from '../BoxComponent.vue'; 
import TestimonialComponent from '../TestimonialComponent.vue'; 

    export default{
        data(){
            return{
                whyChoose : [
                    {
                        icon: "fa-regular fa-clock fa-xl",
                        title: "Puntualità",
                        text: "La nostra app di consegna si distingue per la sua puntualità impeccabile. Ogni ordine viene gestito con precisione e rapidità."
                    },
                    {
                        icon: "fa-regular fa-star fa-xl",
                        title: "Qualità",
                        text:  "Oltre alla puntualità, ci impegniamo a offrire la massima qualità selezionando i migliori ristoranti." 
                    },
                    {
                        icon: "fa-regular fa-face-smile fa-xl",
                        title: "Cordialità",
                        text: "Il nostro team è noto per la cordialità e la cortesia, assicurando un servizio clienti caloroso e attento a ogni tua esigenza." 
                    }
                ],

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
                    "/img/foto1.png",
                    "/img/foto2.png",
                    "/img/foto3.png"
                ]

            };
        },
        methods:{
         

        },
        components: {
          BoxComponent,
          TestimonialComponent

        }
    }
</script>

<template>
    <main>

        

        <!--SEZIONE 1 - RICERCA RISTORANTI-->
        <section class="my-2"> <!-- JUMBOTRON -->
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
            
            <section class="my-5"> <!-- CATEGORIE -->
                <div class="container">
                    <div class="text-center title-section">
                        <h2>Le Nostre Categorie <span>Popolari</span></h2>
                    </div>

                    <div class="category-card">
                        <div>
                            <i class="fa-solid fa-burger"></i>
                            <span>Americano</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-pizza-slice"></i>
                            <span>Pizza</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-bowl-food"></i>
                            <span>Sushi</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-bacon"></i>
                            <span>BBQ</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-pepper-hot"></i>
                            <span>Messicano</span>
                        </div>
                    </div>
                </div>
            </section>
        <!--FINE SEZIONE 1-->



        <!--INIZIO SEZIONE 4 - PERCHE' SCEGLIERCI -->
        <section>
            <div class="container">
                <h2 class="text-center text-white mb-4">
                    Perché scegliere i nostri servizi
                </h2>
                <div class="container d-flex justify-content-center align-items-center mb-3 p-3">
                    <div class="card border-0 " >
                        <div class="row g-0">
                            <div class="col-lg-8 col-12 ">

                                <!--INIZIO CODICE CAROSELLO DI IMMAGINI-->
                                <div class="wrapper-name h-100 d-flex align-items-center justify-content-center ">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="/img/foto2.png" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="/img/foto2.png" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="/img/foto3.png" class="d-block w-100" alt="...">
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!--FINE CODICE CAROSELLO DI IMMAGINI-->
                            
                            
                            <!--ICONE, TITOLO E TESTO DEL PERCHE' SCEGLIERCI-->
                            <div class="box-sezione-4 col-lg-4 col-12  ">
                                <div class="card-body border-0 p-0">
                                    <div class="row">
                                        <div class="col-12" v-for="(elem, i) in whyChoose" :key="i">
                                            <i class="me-2 mt-4 " :class="elem.icon"></i>
                                            <h5 class="card-title d-inline circular-text">{{elem.title}}</h5> 

                                            <div class="servizi">
                                                <p class="card-text  mb-md-3">{{elem.text}}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--FINE SEZIONE 4-->


        <!--INIZIO SEZIONE 5 - FAQ-->
        <section>
    <div class="">
        <div class="container">
            <div class="row align-items-center m-0">
                <div class="col-lg-6">
                    <div>
                        <img class="w-100" src="/img/foto4_faq.png" alt="">
                    </div>
                </div>

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
            </div>
        </div>
    </div>
</section>
        <!--FINE SEZIONE 5-->

       



        
        <TestimonialComponent />


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
    

    .text-jumbo{
       padding: 20px;
       margin-right: 10px; 

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
}




.title-section{
    h2{
        font-weight: 600;
        font-size: 40px;
    }

    span{
        color: #f14647;
    }
}



.category-card{
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    


    div:first-child{
        background-color: #f14647;
        cursor: pointer;
        span{
            background-color: #f14647;
            color: white;
        }
        
        i{
            background-color: #f14647;
            color: white;
        }
        
    }

    >*{
        background-color: white;
        padding: 10px 10px;
        width: calc(100% / 5 - 20px);
        margin: 10px;
        color:#1f272d;
        border-radius: 5px;
        -webkit-box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35); 
        box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);

        i{
            font-size: 20px;
        }

        span{
            background-color: white;
            margin-left: 10px;
            font-size: 20px;
            font-weight: 600; 
        }
    }
    
    div:hover:not(div:first-child){
        background-color: #f14647;
        cursor: pointer;

        i{
            background-color: #f14647;
            color: white;
        }

        span{
            background-color: #f14647;
            color: white;
        }
    }

    
}




//FINE CSS SEZIONE 1


//CSS SEZIONE 2
h4{
    text-align: center;
}



//CSS SEZIONE 4
.background-color-section-4{
    background-color: rgb(219, 53, 69);
    color: red;
    
    

    .wrapper-name{ ////Classe e sottoclasse applicata per il carosello in modo che la foto mi prende il 100% del contenitore
    max-width: 800px;
        img{
            width: 100%;
        }
    }

    .circular-text:hover, .fa-regular:hover { //Hover sulle icone e sugli H5
        color: yellow;
        cursor: pointer;
    }

    
}
.servizi{
    margin-top: 0;
    color: black;
    padding-left: 10px;
    padding-top: 0px;
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


</style>
