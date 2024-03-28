<script>
    export default{
        data(){
            return{

                imglogo: [
                {
                    title:"img-logo",
                    img:"https://www.filepicker.io/api/file/PrjQ7ZxTQye3aR2Tzt3N",
                }
            ],
        };
        },
        methods:{
            

        }
    }
</script>
<template>

    


<header class="sticky-top">

    <nav class="container-fluid navbar navbar-dark bg-white">

        <div class="container">
            <!-- Logo visibile solo su dispositivi lg e superiori -->
            <a class="navbar-brand d-lg-block" href="#">
                <img :src="imglogo[0].img" alt="Logo" height="40">
            </a>

            <!-- Toggle button visibile solo da md e ms -->
            <button class="navbar-toggler d-md-block d-sm-block d-lg-none bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- link visibile solo su dispositivi lg e superiori -->
           <ul class="navbar-nav d-none d-lg-flex flex-row">
                 <!-- link -->
                <li class="nav-item">
                    <a class="nav-link" href="lavora con noi">Lavora con noi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="carrello">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </li>
            </ul>
        </div>
        
    </nav>


    <!-- Collapse div -->
    <div class="collapse bg-danger lg-none" id="navbarToggleExternalContent" data-bs-theme="black">
        <div class="bg-white p-4 ">
            <h5 class="text-body-emphasis h4">
                Links
            </h5>

            <ul class="navbar-nav">
                <!-- link collapse visbili solo in md ms -->
                <li class="nav-item">
                    <a class="nav-link" href="lavora con noi">Lavora con noi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>
            </ul>

            <!-- Aggiungi icone qui -->

            <ul class="navbar-nav d-lg-none">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa-solid fa-utensils"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="carrello">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</header>



</template>

<style lang="scss" scoped>

header {
    font-family: 'Times New Roman', Times, serif;
    
}

.navbar-brand img {
    width: 100%; 
    
}

.navbar-nav {
    display: flex;
    justify-content: flex-end; 
}

.nav-item {
    margin-left: 10px;
}

a{
    color:black;
}






</style>

  
  
  
  
  
  
  
  
  
  