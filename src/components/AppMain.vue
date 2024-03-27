<script>

    export default{
        data(){
            return{
            

            };
        },
        methods:{
         

        }
    }
</script>

<template>
    <main>

<<<<<<< HEAD

=======
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
>>>>>>> AppMain


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



</style>
