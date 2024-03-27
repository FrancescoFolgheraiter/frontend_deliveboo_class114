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

    


<header class="navbar navbar-expand-lg navbar-light bg-danger">

    <div class="container">
           <!-- img logo -->
        <a class="navbar-logo" href="#">
            <img :src="imglogo[0].img" alt="Logo" height="40">
        </a>

            
        <div class="navbar-collapse justify-content-end">

               
            <ul class="navbar-nav">
                <!-- link -->

                <li class="nav-item">
                    <a class="nav-link" href="lavora con noi">Lavora con noi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>

                <!-- Aggiungi icone qui -->

                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fas fa-search"></i> 
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons"></i> 
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
    height: auto; 
    max-height: 40px; 
}

.navbar-nav {
    display: flex;
    justify-content: flex-end; 
}

.nav-item {
    margin-left: 10px;
}







</style>

  
  
  
  
  
  
  
  
  
  