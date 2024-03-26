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

       
<header>
    <div class="container-fluid nav-bar">

      <div class="box">

        <!-- Logo -->
        <div>

            <div class=" col-md-8 col-sm-4">
            <img src="" alt="Logo" class="img-fluid">
            </div>

        </div>
        


        <!-- Pulsante Login -->
        <div class="new-box">


            
            <h6>lavora con noi </h6>


            <div class="button-login col-md-4 col-sm-4">
                <button class="btn btn-danger btn-sm">Login</button>
            </div>

            <div class="icon">
                <div></div>
                <div></div>
            </div>
            


        </div>
       
      </div>
    </div>
  </header>


</template>

<style lang="scss" scoped>

header{
    background-color: gray;
}

.nav-bar{
    height: 50px;
    border: 1px solid black;
}

img{
    width: 100%;
   
}

.box{

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.button-carrello{
    margin: 10px;
    
}

.new-box{
    display: flex;
    align-items: center;
}
 
</style>
