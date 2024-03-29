<script>
import BoxComponent from './BoxComponent.vue'; 

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
          BoxComponent

        }
    }
</script>

<template>
    <main>

        <!--SEZIONE 1 - RICERCA RISTORANTI-->
        <!--Cose da sistemare: 
        1) Fare in modo che quando vado nella versione mobile la foto si adatti automaticamente e non si tagli
        2) Centrare tutto il blocco contenente la barra di ricerca 
        3) RENDERE RESPONSIVE LA SEARCH BAR   -->

        <section class="jumbotron">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="img-jumbo">
                    <img src="../../img/pngwing.com.png" alt="jumboimg">
                </div>
                <div class="search-box d-flex flex-column align-items-center">
                    <div>
                        <h2 class="text-center">
                            Deliveboo: Il Gusto Arriva, Tu Sorridi!
                        </h2>
                        <p class="text-center">Cerca i tuoi ristoranti preferiti</p>
                    </div>
                    <div class="search-bar">
                        <input type="search" placeholder="Cerca il tuo ristorante...">
                        <button class="btn btn-pers">CERCA</button>
                    </div>

                </div>
            </div>
        </section>
        <!--FINE SEZIONE 1-->



        <!--INIZIO SEZIONE 4 - PERCHE' SCEGLIERCI -->
        <section>
            <div class="container-fluid background-color-section-4">
                <h2 class="text-center text-white mb-4">
                    Perché scegliere i nostri servizi
                </h2>
                <div class="container d-flex justify-content-center align-items-center mb-3 p-3">
                    <div class="card border-0 " style="max-width: 1100px;">
                        <div class="row g-0">
                            <div class="col-lg-8 col-12 background-color-section-4">

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
                            <div class="col-lg-4 col-12 background-color-text-section-4">
                                <div class="card-body border-0">
                                    <div class="row">
                                        <div class="col-12" v-for="(elem, i) in whyChoose" :key="i">
                                            <i class="me-2 mt-5" :class="elem.icon"></i>
                                            <h5 class="card-title d-inline circular-text">{{elem.title}}</h5> 
                                            <p class="card-text">{{elem.text}}</p>
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
    <div class="container-fluid background-color-section-5">
        <div class="container">
            <div class="row d-flex align-items-center">
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

        <hr>
        <hr>
        <hr>



        <BoxComponent />


    </main>
  </template>

<style lang="scss" scoped>

//CSS SEZIONE 1
.jumbotron{
    /* height: 600px; */
    background-repeat: no-repeat;
    background-size:cover;
    position: relative;
    /* background: rgb(241,70,71);
    background: linear-gradient(169deg, rgba(241,70,71,1) 49.7%, rgba(235,235,235,1) 50%);  */  
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



.search-box{
    background-color:#f7f7f7ea;
    width: 60%;
    /* height: 40%; */
    position: absolute;
    top:5%;
    left: 20%;
    border-radius: 20px;
    padding: 20px;
    -webkit-box-shadow: -1px 3px 12px -2px #000000; 
    box-shadow: -1px 3px 12px -2px #000000; 

    h2{
        color: rgb(241,70,71);
        font-weight: bold;
        margin-top: 20px;
    }

    p{
        font-size: 20px;
    }
}

.search-bar{
    
    border: 1px solid black;
    width: 60%;
    border-radius: 20px;
    background-color: white;

    input{
        border: none;
        border-radius: 20px;
        width: 85%;
        height: 40px;
        padding: 10px;
        border-right:none;
        
        &:focus{
            outline-style: none;
        }
    }

    

    .btn-pers{
        background-color: rgb(241,70,71);
        color: white;
        vertical-align:baseline;
        height: 40px;
        padding: 0 24px;
        border-radius: 20px;
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
    color: white;
    
    .background-color-text-section-4{
        background-color: rgb(219, 53, 69);
        color: white;
    }

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
