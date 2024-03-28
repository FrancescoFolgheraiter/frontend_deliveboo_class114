<script>

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
                ]

            };
        },
        methods:{
         

        }
    }
</script>

<template>
    <main>

        <!--SEZIONE 1 - RICERCA RISTORANTI-->
        <!--Cose da sistemare: 
        1) Fare in modo che quando vado nella versione mobile la foto si adatti automaticamente e non si tagli
        2) Centrare tutto il blocco contenente la barra di ricerca -->
        <section class="background-main-image">
            <div class="container-fluid">
                <div class="container">
                    <div class="search-restaurant">
                        <h2>Cerca qui i ristoranti della tua zona!</h2>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
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
                                                <img src="/img/foto1.png" class="d-block w-100" alt="...">
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

        <hr>
        <hr>
        <hr>


    </main>
  </template>

<style lang="scss" scoped>

//CSS SEZIONE 1
.background-main-image {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .search-restaurant {
    position: absolute;
    bottom: 50px;
    width: 80%; 
    margin: auto;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 12px;
  }
}

@media (min-width: 768px) {
  .search-restaurant {
    width: 50%; /* Ritornato al 50% per schermi più grandi */
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




</style>
