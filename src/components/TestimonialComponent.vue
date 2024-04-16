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
      nameUser: [

            { user: "Giacomo Libani" },
            { user: "Luca Formicola" },
            { user: "Davide Matteotti" },
            { user: "Alessio Palmieri" },
            { user: "Lionel Perez" },
            { user: "Lino Banfi" },
            { user: "Giorgio Santos" },
            { user: "Rafa Luiz" },
            { user: "Santiago sileo JR" },
            { user: "Ricardo Orta" }

      ],
      reviewsUser: [

        { text: "Consegna rapida, cibo delizioso. Vasto menu, soddisfatto." },
        { text: "Affidabile, fresco. Consigliato vivamente." },
        { text: "Soddisfacente, tornerò sicuro." },
        { text: "Cibo caldo, arrivo anticipato. Ottimo servizio." },
        { text: "Preciso, puntuale. Eccellente esperienza." },
        { text: "Gustoso, porzioni abbondanti. Consegna impeccabile." },
        { text: "Varie opzioni, consegna veloce. Altamente raccomandato." },
        { text: "Veloce, fresco. Cliente felice." },
        { text: "Ordine facile, consegna rapida. Consigliatissimo." },
        { text: "Servizio impeccabile, cibo delizioso. Assolutamente da provare." }

      ],
      ImagUser: [

            { img: "https://images.squarespace-cdn.com/content/v1/5509cf13e4b053091c63d742/1662140414683-B2T3H5RH2LCOMCPK7S19/Bio+Portraits-02.png" },
            { img: "https://kurtgrandis.com/images/profile.png" },
            { img: "https://www.ekoyapidergisi.org/images/2022/LuketheAI_2_1645190222.jpg" },
            { img: "https://th.bing.com/th/id/OIP.iXgesMZceVWCNx8oUehfMQHaHa?rs=1&pid=ImgDetMain" },
            { img: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png" },
            { img: "https://guild-way-accountants.com/wp-content/uploads/2021/07/Imran.png" },
            { img: "https://iradaclinic.com/wp-content/uploads/2023/09/testmonial-dummy.png" },
            { img: "https://lh3.googleusercontent.com/a-/AOh14GjXQFT7RusxmOjskyufX8BEnxF2jo9KcA40636T" },
            { img: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-10-avatar-2754575_120521.png" },
            { img: "https://img.genial.ly/578566421aa0220fb8a77c5e/016ada75-e076-434b-b2fd-a68fe57c7007.png" }

      ],
      
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
        <h4>Cosa Dicono <span>Di Noi</span></h4>
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
              slidesPerView: 1,
              spaceBetween: 100
            }
          }"
          class="mySwiper"
        >
        <swiper-slide v-for="(review, index) in reviewsUser" :key="index">
            <div class="review-card">
              <div class="header-content">
                <div class="img-area">
                  <img :src="ImagUser[index].img" alt="Avatar">
                </div>
                <div>
                  <h4>{{ nameUser[index].user }}</h4>
                </div>
              </div>
              <div class="col mb-4">
                <p>{{ review.text }}</p>
              </div>
              <div class="review-footer">
                <div class="rating">
                  <span class="active">★</span> 
                  <span class="active">★</span> 
                  <span class="active">★</span> 
                  <span>★</span> 
                  <span>★</span>
                </div>
                <p>Reviewed on 01/01/2023</p>
              </div>
            </div>
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
  height: 220px;

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
