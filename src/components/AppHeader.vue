<script>
    export default{
        data(){
            return{

                imglogo: [
                {
                    title:"img-logo",
                    img:"/img/logo deliveboo1.png",
                }
            ],
        };
        },
        methods:{
            countCart(){
                const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));

            } 

        }
    }
</script>
<template>

    


<header class="sticky-top">

    <div class="container">
        <div class="header d-flex justify-content-between align-items-center">
            <div class="img-header">
                <router-link :to="{name:'home'}">
                    <img :src="imglogo[0].img" alt="">
                </router-link>
            </div>

            <!-- Toggle button visibile solo da md e ms -->
            <button class="navbar-toggler d-md-block d-sm-block d-lg-none nav-button-pers" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent">
                <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
            </button>

            <div class="d-md-none d-none d-sm-none d-lg-block p-3">
                <ul>
                    <li class="">
                        <router-link :to="{name:'lavora-con-noi'}">
                            <button class="btn btn-work">
                                Lavora Con Noi
                            </button>
                        </router-link>
                    </li>
                    <li class="">
                        <button class="btn btn-login">
                            <a href="http://127.0.0.1:8000/">Login</a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <!-- Collapse div -->
    <div class="container">
        <div class="collapse bg-danger lg-none" id="navbarToggleExternalContent" data-bs-theme="black">
            <div class="bg-white p-4 ">
                <h5>
                    Links
                </h5>
    
                <ul class="navbar-nav">
                    <!-- link collapse visbili solo in md ms -->
                    <li class="nav-item">
                        <router-link :to="{name:'lavora-con-noi'}">
                                Lavora Con Noi
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="http://127.0.0.1:8000/">Login</a>
                    </li>
                </ul>
    
                <!-- Aggiungi icone qui -->
    
                
                
            </div>
        </div>
    </div>
</header>



</template>

<style lang="scss" scoped>
header{
    background-color: white;
    
}


.header{
    height: 110px;
    

    ul{
        list-style: none;
        
        li{
            display: inline-block;

            a{
                text-decoration: none;
            }
        }
    }

    .img-header{
        height: 110px;
        img{
            height: 110px;
            width: 100%;
            object-fit: cover;
        }
    }

    .btn-work{
        margin-right: 20px;
        
        a{
            color: #1f272d;
            font-weight: 600;

            &:hover{
                color: white;
            }
        }

        &:hover{
            background-color: #f14647;
            color: white;
        }
    }

    .btn-login{
        background-color: #f14647;
        a{
            text-decoration: none;
            color: white;
            font-weight: 600;
        }
    }
}

.nav-button-pers{
    background-color: #f14647;
    color: white;
    padding: 10px;
    border-radius: 5px;
    i{
        text-align: center;
        margin-top: 3px;
        cursor: pointer;
    }
}


/* Stile per il link "Carrello" */
.cart-link {
    color: #000; 
    text-decoration: none; 
    font-size: 20px; 
}

/* Effetto hover per i link */
.nav-link:hover, button:hover {
    opacity: 0.8; 
}

/* Stile per il link "Lavora con noi" */
.lavora-con-noi-link {
    color: #1f272d; 
    text-decoration: none; 
    font-weight: bold; 
    margin-right: 20px; 
    line-height: 40px;
}

/* Effetto hover per il link */
.lavora-con-noi-link:hover {
    opacity: 0.8; 
}







</style>

  
  
  
  
  
  
  
  
  
  