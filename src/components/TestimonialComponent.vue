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
      
    };
  },
  components:{
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
      <div class="title-section text-center">
        <h4>Cosa Dicono <span>Di Noi</span></h4>
      </div>
      <div class="wrapper">
        <swiper
          :slidesPerView="4"
          :spaceBetween="400"
          :freeMode="true"
          :modules="modules"
          :autoplay="{
          delay: 1000,
          disableOnInteraction: true,
          }"
          :breakpoints="{
            '1024':{
              slidesPerView:4,
              spaceBetween:400
            },
            '991': {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            '767':{
              slidesPerView: 1
            }
          }"
          class="mySwiper"
        >
        <swiper-slide v-for="Iteration in 10">
          <div class="review-card">
            <div class="header-content">
              <div class="img-area">
                <img alt="customer1" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png">
              </div>
              <div class="info">
                <h4>John Doe</h4>
                <p>Maketing Manager</p>
              </div>
            </div>
            <div class="single-review">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor eveniet deleniti repellendus! Minima, dolorum.</p>
            </div>
            <div class="review-footer">
              <div class="rating">
                <span class="active">★</span> 
                <span class="active">★</span> 
                <span class="active">★</span> 
                <span class="">★</span> 
                <span class="">★</span>
              </div>
              <p>Reviewed on 01/01/2023</p>
            </div>
          </div>
        </swiper-slide>
        </swiper>
      </div>
    </div>


    
</template>

<style lang="scss" scoped>

.title-section{
  h4{
    font-weight: 600;
    font-size: 40px;
    color:#1f272d;
  }
  
  span{
    color: #f14647;
  }
}


.wrapper {
	display: flex;
	gap: 20px;
	padding: 2% 0;
}
.review-card {
	background-color:#f14647;
	border-radius: 10px;
	padding: 20px;
	width: 400px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.img-area {
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 50%;
	margin-right: 25px;
}
.img-area img {
	width: 100%;
  object-fit: cover;
}
.header-content {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}
.info h4 {
	margin: 0;
	font-size: 22px;
	font-weight: 600;
}
.info p {
	margin: 5px 0 0;
	font-size: 14px;
	font-weight: 400;
	color: #4f4f4f;
}
.single-review p {
	margin: 0;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.7;
	color: #333;
}
.review-footer {
	display: flex;
	justify-content: space-between;
	align-items: middle;
	margin-top: 10px;
	font-size: 14px;
	color: #666;
  vertical-align: middle;
}
.rating {
	display: flex;
  align-items: middle;
  margin-top:-5px;
}
.rating span {
	color: #000;
	font-size: 18px;
}
.rating span.active {
	color: #fbc02d;
}






</style>
