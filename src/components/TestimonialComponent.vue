<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>

<template>

    <div class="container box-Testimonial">

        <div class="container-intestazione text-center">
            <h4 >testimonial</h4>
            <h2>Perché i nostri clienti ci scelgono</h2>
        </div>

        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">

            <div class="carousel-inner">

                <div class="carousel-item active">

                    <div class="d-block w-100 text-white text-center">
                        <h5><em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias expedita nam recusandae aliquid impedit. <br> Quam architecto nesciunt quidem asperiores eius nobis facilis id praesentium. <br>Eum natus deserunt exercitationem et modi adipisci amet, vel quos! <br> Consectetur ipsa totam obcaecati adipisci labore maxime natus reiciendis ea laboriosam accusamus, iste ad placeat ratione!</em></h5>
                    </div>

                    <div class="container-img text-center">
                        <img src="https://th.bing.com/th?id=OIF.YwaVq1s%2bJ1hvvF9ThT2j2w&rs=1&pid=ImgDetMain" alt="#">
                    </div>

                    <div class="container-star text-center">
                        <i v-for="index in 4" :key="index" class="fa-solid fa-star"></i>
                    </div>

                    <div class="d-block w-100 text-white text-end">
                        <h5>Marco Pelli</h5>
                    </div>
                    
                </div>

                <div class="carousel-item">

                    <div class="d-block w-100 text-white text-center">
                        <h5><em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias expedita nam recusandae aliquid impedit. <br> Quam architecto nesciunt quidem asperiores eius nobis facilis id praesentium. <br>Eum natus deserunt exercitationem et modi adipisci amet, vel quos! <br> Consectetur ipsa totam obcaecati adipisci labore maxime natus reiciendis ea laboriosam accusamus, iste ad placeat ratione!</em></h5>
                    </div>

                    <div class="container-img text-center">
                        <img src="https://th.bing.com/th?id=OIF.YwaVq1s%2bJ1hvvF9ThT2j2w&rs=1&pid=ImgDetMain" alt="#">
                    </div>

                    <div class="container-star text-center">
                        <i v-for="index in 4" :key="index" class="fa-solid fa-star"></i>
                    </div>

                    <div class="d-block w-100 text-white text-end">
                        <h5>Giorgia Misa</h5>
                    </div>

                </div>

                <div class="carousel-item">

                    <div class="d-block w-100 text-white text-center">
                        <h5><em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias expedita nam recusandae aliquid impedit. <br> Quam architecto nesciunt quidem asperiores eius nobis facilis id praesentium. <br>Eum natus deserunt exercitationem et modi adipisci amet, vel quos! <br> Consectetur ipsa totam obcaecati adipisci labore maxime natus reiciendis ea laboriosam accusamus, iste ad placeat ratione!</em></h5>
                    </div>

                    <div class="container-img text-center">
                        <img src="https://th.bing.com/th?id=OIF.YwaVq1s%2bJ1hvvF9ThT2j2w&rs=1&pid=ImgDetMain" alt="#">
                    </div>

                    <div class="container-star text-center">
                        <i v-for="index in 4" :key="index" class="fa-solid fa-star"></i>
                    </div>

                    <div class="d-block w-100  text-white text-end">
                        <h5>Domenico Lepre</h5>
                    </div>

                </div>

            </div>

            <button class="carousel-control-prev btn btn-white" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" style="width: 30px; height: 30px; border-radius: 50%; position: absolute; top: 0; bottom: 0;  margin: auto;"> 
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <!-- Pulsante di controllo destro -->
            <button class="carousel-control-next btn btn-dark" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" style="width: 30px; height: 30px; border-radius: 50%; position: absolute;  top: 0; bottom: 0; margin: auto;"> 
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>


    
</template>

<style lang="scss" scoped>




.carousel-item{

    font-family: 'Times New Roman', Times, serif;

}
.box-Testimonial {
    
    overflow: hidden; 
}

button {
    background-color: white;
    color: black;
    border: none; 
}

.carousel-control-prev,
.carousel-control-next {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 1rem; 
    line-height: 0; 
}



.carousel-inner {
    border-radius: 10px; 
    
   
}

.img-carousel img {
    border-radius: 50%; 
    width: 100%; 
    height: 10%; 
}

.container-intestazione{
   margin: 30px;
   
}


.container-intestazione h4{
    color: white;
}

.container-intestazione h4:hover {
    color: black;
}

.container-intestazione h2{
    color: white;
}

.container-intestazione h2:hover {
    color: black;
}

.container-star{
    color: rgb(249, 249, 70);
}

.container-star i:hover {
    color: rgb(247, 247, 247);
}

.container-img img {
    border-radius: 50%; 
    width: 160px;
    height: 130px; 
    margin: 0 auto;
    
}


</style>
