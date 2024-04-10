<script>
import axios from 'axios';
import {store} from '../store' 
import { RouterLink } from 'vue-router';


export default {
  data() {
    return {
      restaurantList: [],
      types: [],
      allTypes:[],
      store,
    };
  },
  methods:{
    setValueType(value) {
      const index = this.types.indexOf(value);
      // Se il valore è presente in types lo rimuovo
      if (index !== -1) {
        this.types.splice(index, 1);
      } else {
        // Se il valore non è presente in types lo aggiungo
        this.types.push(value);
      }
      //Verifica se  types contiene almeno un elemento
      //e in caso effettuo la chiamata API
      if (this.types.length > 0) {
        this.getRestaurant();
      }
      console.log('Tipologie selezionate: '+this.types)
    },
    //funzione per recupeare i ristoranti di quel tipo
    getRestaurant(){
      axios
      .get('http://127.0.0.1:8000/api/types/restaurant',{
        params:{
          types:this.types
        }
      })
      .then((response) =>{
          this.restaurantList=response.data.data.types
    })
    }
  },
  mounted(){
    axios
      .get('http://127.0.0.1:8000/api/types')
      .then((response) =>{
          this.allTypes=response.data.data.types
          console.log(this.allTypes)
    })
}
};
</script>

<template>

<section class="my-5"> <!-- CATEGORIE -->
  <div class="container">
      <div class="text-center title-section">
          <h2>Le Nostre Categorie <span>Popolari</span></h2>
      </div>

      <div class="category-card">
            <div v-for="category in allTypes">
              <button type="submit" @click="setValueType(category.name)">{{ category.name }}</button>
            </div>
      </div>
  </div>
</section>

    <div class="container">
      <div class="cont-section row p-3">
         <div class = "__area col-4 gy-3" >
           <div v-for="restaurant in restaurantList">
            <router-link :to="{ name: 'restaurant', params: {name: restaurant.resturant_name } }">
              <h4>{{restaurant['resturant_name']}}</h4>
              <p>
                {{ restaurant['address'] }}
              </p>
            </router-link>
            </div>
        </div> 
      </div>
    </div>


    
</template>

<style lang="scss" scoped>
.container-img-rest{
  height:100%;
  width:100px;
  img{
    border-radius: 50%;
    overflow: hidden;
    width:100%;
  }
}

.__area {
  font-family: 'Cairo', sans-serif;
  color: #7c7671;
  /* margin-top: 100px */
}

.cont-section{
  display: flex;
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);
  
}


.__card {
  max-width: 350px;
  margin: auto;
  cursor: pointer;
  position: relative;
  display: inline-block;
  color: unset;
  text-decoration: none;
}
.__card:hover {
  color: unset;
  text-decoration: none;
}
.__img {
  border-radius: 10px;
}

.__favorit {
  background-color: #fff;
  border-radius: 8px;
  color: #fc9d52;
  position: absolute;
  right: 15px;
  top: 8px;
  padding: 3px 4px; 
  font-size: 22px;
  line-height: 100%;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  z-index: 1;
  border: 0;
}
.__favorit:hover {
  background-color: #fc9d52;
  color: #fff;
  text-decoration: none;
}
.__card_detail { 
  box-shadow: 0px -4px 30px -5px rgba(255, 0, 0, 0);
  padding: 13px;
  border-radius: 8px;
  margin: -30px 10px 0;
  position: relative;
  z-index: 2;
  background-color: #f7F7F7; 
}
.__card_detail h4 {
  color: #474340;
  line-height: 100%;
  font-weight: bold;
  background-color: #f7f7f7;
}
.__card_detail p {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.4rem;
  background-color: #f7f7f7;
  color: #1f272d;
}

.__type{
  background-color: #f7f7f7;
}


.__type span {
  background-color: #fdf0e5;
  padding: 5px 10px 7px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  color: #f14647;
  font-weight: bold;
  line-height: 100%;
}
.__detail {
  margin-top: 5px;
  background-color: #f7f7f7;
}
.__detail i {
  font-size: 21px;
  display: inline-block;
  vertical-align: middle;
  background-color: #f7f7f7;
}
.__detail i:nth-child(3) {
  margin-left: 15px;
}
.__detail span {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 2px;
  background-color: #f7f7f7;
}


.title-section{
    h2{
        font-weight: 600;
        font-size: 40px;
    }

    span{
        color: #f14647;
    }
}


.category-card{
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    

    div:first-child{
        background-color: #f14647;
        cursor: pointer;
        button{
            background-color: #f14647;
            color: white;
        }
        
    }

    >*{
        background-color: white;
        padding: 10px 10px;
        width: calc(100% / 5 - 20px);
        margin: 10px;
        color:#1f272d;
        border-radius: 5px;
        -webkit-box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35); 
        box-shadow: 0px -4px 30px -5px rgba(0,0,0,0.35);

        i{
            font-size: 20px;
        }

        button{
            background-color: white;
            font-size: 20px;
            font-weight: 600;
            border: none;
            text-align: center;
        }

        &:hover{
          background-color: #f14647;
          cursor: pointer;
          
          button{
            background-color: #f14647;
            cursor: pointer;
            color: white;
          }
          
          
        }
    }
    
    

   /*  form:hover{
      background-color: #f14647;
      button:hover{
        background-color: #f14647;
        cursor: pointer;

        i{
            background-color: #f14647;
            color: white;
        }

        span{
            background-color: #f14647;
            color: white;
        }
    }
    } */

    
}



</style>
