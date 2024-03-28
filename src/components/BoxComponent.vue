<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Gran resturant Milan',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni laudantium fuga, ad odio illum.',
          img: 'https://www.interestingfacts.org/wp-content/uploads/2020/01/factsaboutcanadafood-1.jpg' 
        },
        { title: 'Card Title 2', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni laudantium fuga, ad odio illum.',
         img: '...' 
        },
        { title: 'Card Title 3',
         description: 'Description 3'
         , img: '...' 
        },
        { title: 'Card Title 4',
         description: 'Description 4',
          img: '...' 
        },
        { title: 'Card Title 5',
         description: 'Description 5', 
         img: 'https://www.interestingfacts.org/wp-content/uploads/2020/01/factsaboutcanadafood-1.jpg' 
        },
        { title: 'Card Title 6',
         description: 'Description 6',
         img: '...' 
        }
      ]
    };
  }
};
</script>

<template>
    <div class="box-component d-flex flex-wrap">

        <div v-for="(item, index) in cards" :key="index" class="card col-lg-4 col-md-2">

            <div class="card-content">

            <img :src="item.img" class="card-img-top" alt="Card Image" />

                <div class="card-body">

                    <h5 class="card-title">{{ item.title }}</h5>

                    <p class="card-text">{{ item.description }}</p>

                    <p><strong>Email:</strong> {{ item.email }}</p>

                    <p><strong>indirizzo:</strong> {{ item.via }}</p>



                </div>
                
            </div>
        </div>
    </div>
  </template>

<style lang="scss" scoped>
.box-component {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  font-family: 'Times New Roman', Times, serif;

  .card {
    
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 10%;
    
  }

  .card-content {
    background-color: white; 
    border-radius: inherit; 
  }

  .card-body {
    padding: 20px;
  }
}

</style>
