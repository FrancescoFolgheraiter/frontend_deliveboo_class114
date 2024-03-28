<script>
import BoxComponent from './BoxComponent.vue'; 

    export default{
        data(){
            return{
            

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


        <!--SEZIONE 2 - PERCHE' SCEGLIERE I NOSTRI SERVIZI (Puntualità, qualità, cordialità)-->
        <section>
            <h2 class="text-center mb-4 mt-4">
                Perchè scegliere i nostri servizi
            </h2>
            <hr class="w-50 text-center m-auto mb-3">
            <div class="row m-auto">
                <div class="col-4">
                    <h4>Puntualità</h4>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores quis. Voluptate officiis odit ab.</p>
                    </div>
                </div>

                <div class="col-4">
                    <h4>Qualità</h4>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores quis. Voluptate officiis odit ab.</p>
                    </div>
                </div>

                <div class="col-4">
                    <h4>Cordialità</h4>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores quis. Voluptate officiis odit ab.</p>
                    </div>
                </div>
            </div>
        </section>
        <!--FINE SEZIONE 2-->


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
    top:55%;
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





</style>
