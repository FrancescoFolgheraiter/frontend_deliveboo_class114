<script>
    export default{
        data(){
            return{

                MainTitle: 'ciao',

            };
        },
        methods:{
            

        }
    }
</script>




<template>
    <div class="restaurant-page">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <!-- Blocco a sinistra -->
                    <div class="left-block">
                        <div class="navbar">
                            <ul>
                                <li><a href="#">Prodotto 1</a></li>
                                <li><a href="#">Prodotto 2</a></li>
                                <li><a href="#">Prodotto 3</a></li>
                                <li><a href="#">Prodotto 4</a></li>
                                <li><a href="#">Prodotto 5</a></li>
                                <li><a href="#">Prodotto 6</a></li>
                                <li><a href="#">Prodotto 7</a></li>
                                <li><a href="#">Prodotto 8</a></li>
                                <li><a href="#">Prodotto 9</a></li>
                                <li><a href="#">Prodotto 10</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- Blocco al centro -->
                    <div class="center-block text-center">
                        <div class="container ">
                            <h1>milano resturant</h1>
                            <p>type</p>
                        </div>
                        <div class="container-fluid">
                            <div v-for="index in 12" :key="index" class="box-card">
                               <div>
                                 description
                               </div>
                               <div class="box-dx">
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!-- Blocco a destra -->
                    <div class="right-block text-center">
                    aaaa
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
       





<style lang="scss" scoped>
div{
    border: 1px solid red;
    border-radius: 10px;
}
.box-card{
    display: flex;
    justify-content: space-between;
}
.box-dx{
    width: 200px;
    height: 100px;
}
.navbar {
  position: fixed;
  height: calc(100% - 122px); /* considerando l'altezza del footer */
  width: 200px;
  top: 0;
  left: 0;
  margin-bottom: 100px; /* altezza del footer */
  background-color: black;
}
.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}
.navbar ul li {
  padding: 10px 0;
}
.navbar ul li a {
  text-decoration: none;
  color: #fff;
  display: block;
}
.content {
    margin-left: 220px; /* Aggiunge spazio per la barra di navigazione */
  padding: 20px;
  max-width: calc(100% - 200px);
}
.navbar > ul > li {
    margin-left: 10px;
}
/* Media query per la modalità responsive */
@media screen and (max-width: 768px) {
  /* Modifica il layout della riga per far sì che la barra di navigazione vada sotto il contenuto principale */
  .row {
    flex-wrap: wrap-reverse;
  }
  /* Imposta il 100% di larghezza per la navbar */
  .navbar {
    width: 100%;
    height: auto;
    position: static;
    margin-bottom: 0;
  }
  .content {
    margin-left: 0;
    max-width: 100%;
  }
}
</style>
