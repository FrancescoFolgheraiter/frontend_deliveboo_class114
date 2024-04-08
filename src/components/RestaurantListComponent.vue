<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>

<template>

    <div class="container">
      <div class="cont-section row p-3">
        <div class = "__area col-4 gy-3">
          <a href = "#" class = "__card">
            <button class = "__favorit"><i class = "la la-heart-o"></i></button>
            <img src = "" class="img-fluid __img"/>
            <div class = "__card_detail text-left">
              <h4>NOME</h4>
              <p>
                2238 Polk St, San Francisco, CA 94109, United States
              </p>
              <div class = "__type">
                <span href = "#Italian">Italian</span>
                <span href = "#Vegetarian">Vegetarian</span>
                <span href = "#Pizza">Pizza</span>
                <span href = "#off">10%</span>
              </div>
              <div class = "__detail">
                <i class = "la la-star-o"></i> <span>5.0</span> <i class = "la la-clock-o"></i> <span>30 m</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>


    
</template>

<style lang="scss" scoped>
.__area {
  font-family: 'Cairo', sans-serif;
  color: #7c7671;
  /* margin-top: 100px */
}

.cont-section{
  display: flex;
  justify-content: space-between;
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





</style>
