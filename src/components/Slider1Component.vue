<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { Navigation, Pagination,FreeMode, Autoplay } from 'swiper/modules';




export default {
  data() {
    return {
      SliderRestaurant: [
        {
          img: '/public/img/burgerbistro.png'
        },
        {
          img: '/public/img/cinatown.png'
        },
        {
          img: '/public/img/daalbert.png'
        },
        {
          img: '/public/img/GALLOWAY.png'
        },
        {
          img: '/public/img/mucdonalds.png'
        },
        {
          img: '/public/img/slicegrill.png'
        },
        {
          img: '/public/img/sushipalace.png'
        }
      ]
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup(){
    return {
      modules: [Navigation,Pagination,FreeMode,Autoplay]
    }
  }
};
</script>

<template>
  <section class="my-5">
    <div class="container">
      <swiper
        :slidesPerView="4"
        :spaceBetween="120"
        :freeMode="true"
        :modules="modules"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="(card,i) in SliderRestaurant">
          <div class="card border-0" style="width: 12rem;">
            <img :src="card.img" class="card-img-top img-fluid" alt="...">
          </div>
        </swiper-slide>

      </swiper>
      
    </div>
  </section>


    
</template>

<style lang="scss" scoped>

.swiper{
  @media(max-width: 767px){
    display: none;
  }
}




</style>
