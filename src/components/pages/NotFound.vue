<script>

import {store} from '../../store.js';

    export default{
        data(){
            return{
                
                

            };
        },
        methods:{
         

        },
        
    }
</script>

<template>
    <div class="container-fluid">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center mb-5">
            <h1>
              404 ERROR
            </h1>
            <p>
              La pagina che stai cercando non esiste.
            </p>
            <router-link to="/" class="back-home-link btn btn-primary">
              Torna alla pagina principale
            </router-link>
          </div>
  
          <div class="col-md-5">
            <img src="/public/img/bgremove.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
<style lang="scss" scoped>

    .container{
        background-color: #f7f7f7ea;
        border-radius: 40px;
        padding: 50px;
        margin-top: 20px;
        margin-bottom: 20px;

    }

    h1 {
        font-size: 3rem;
        color:  rgb(241, 70, 71);
        }

    p {
        font-size: 1.2rem;
        color: #333;
        }

        .back-home-link {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #007BFF; 
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        }

        .back-home-link:hover {
        background-color: #0056b3; 
        }



</style>
