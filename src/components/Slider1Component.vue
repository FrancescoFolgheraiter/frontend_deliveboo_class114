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
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/20/92/cd/fb/logo-mcdonald-s.jpg'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFfjSJginjBJlftsK5TZQYrRvHg-1-wO862pFray5Bg&s'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTpwgNMnmaL0pyyYzIwqSHETvdwwiCjpk5tg__IxKXw&s'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBuxHzbWcI0nw7pEh5vkMBfDWXuKODdgWNteXLebgMQ&s'
        },
        {
          img: 'https://play-lh.googleusercontent.com/m0CcFAL11ZAZH_-gCclHAnpiq-jgrd5ZBaIgGQHd0iZA_vYYMamjjOKTBQYiE2KQdQ'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklTrvzar6o5nchz1Zsk1Y5ntz3HoDFRwjtUz8hD5dyw&s'
        },
        {
          img: 'https://e7.pngegg.com/pngimages/90/846/png-clipart-starbucks-coffee-logo-illustration-coffee-starbucks-logo-sun-valley-ski-education-office-starbucks-logo-retail-signage.png'
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
          <div class="card border-0" style="width: 10rem;">
            <img :src="card.img" class="card-img-top img-fluid" alt="...">
          </div>
        </swiper-slide>

      </swiper>
      
    </div>


    
</template>

<style lang="scss" scoped>

.swiper{
  @media(max-width: 767px){
    display: none;
  }
}




</style>
