<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { Navigation, Pagination,FreeMode, Autoplay } from 'swiper/modules';

import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
		restauratsData:[
		{
			name: 'Galloway',
			image: 'img/user/galloway.jpg',
			types: ['Fast food', 'Americano', 'BBQ'],
			description: 'Ristorante fast food che offre cucina americana e BBQ.'
		},
		{
			name: 'BurgerKong',
			image: 'img/user/burgerkong.jpg',
			types: ['Americano', 'Paninoteca'],
			description: 'Ristorante americano specializzato in hamburger e panini.'
		},
		{
			name: 'MucDonalds',
			image: 'img/user/mucdonalds.jpg',
			types: ['Americano', 'Fast food', 'Paninoteca'],
			description: 'Catena di fast food popolare che serve hamburger e panini in stile americano.'
		},
		{
			name: 'Da Albert',
			image: 'img/user/da_albert.jpg',
			types: ['Pizzeria', 'Mediterranea'],
			description: 'Pizzeria tradizionale con cucina mediterranea.'
		},
		{
			name: 'Korallo',
			image: 'img/user/korallo.jpg',
			types: ['Pesce', 'Mediterranea'],
			description: 'Ristorante di pesce con cucina mediterranea.'
		},
		]
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

  <section class="mt-5">
    <div class="container">
      <div class="title-section text-center">
        <h4>Alcuni dei nostri ristoranti<span> migliori</span></h4>
      </div>
      <div class="wrapper">
        <swiper
          :slidesPerView="4"
          :spaceBetween="400"
          :modules="modules"
          :autoplay="{
            delay:2000,
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
              slidesPerView: 2,
              spaceBetween: 100
            },
            '425':{
              slidesPerView:1,
              spaceBetween:100
            }
          }"
          class="mySwiper"
        >
        <swiper-slide v-for="(restaurant,i) in restauratsData">
			<router-link :to="{ name: 'restaurant', params: {name: restaurant['name'] } }" class="text-decoration-none ">
				<div class="review-card">
				  <div class="header-content">
					  <div class="img-cont me-2">
						<img :src="'http://127.0.0.1:8000/storage/'+ restaurant['image']" class="img-fluid __img"/>
					  </div>
					<div class="info">
					  <h4 class="text-white">{{ restaurant['name'] }}</h4>
					  <p>
						  <span v-for="category in restaurant['types']" class="badge text-bg-light me-1">{{ category }}</span>
					  </p>
					</div>
				  </div>
				  <div class="single-review">
					<p class="text-white ">
					  {{ restaurant['description']  }}
					</p>
				  </div>
				</div>
			</router-link>
        </swiper-slide>
        </swiper>
      </div>
    </div> 
  </section>


    
</template>

<style lang="scss" scoped>
.swiper-button-rev, .swiper-button-next{
  background-color: black;
}
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

.img-cont{
  max-width: 100px;
  max-height: 200px;
  overflow: hidden;
  border-radius: 10px;
  border:1px solid white;
  img{
    object-fit: cover;
    overflow: hidden;
    border-radius:10px;
  }
}


.wrapper {
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

  @media(max-width:991px){
    width: 100%;
  }

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
