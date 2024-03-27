<script>
    export default{
        data(){
            return{

                downloadApp: [
                {
                    title:"Scarica l'App",
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/2560px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png",
                }
            ],

                feedback: [
                {
                    title:"Feedback",
                    text:"Aiutaci a migliorare il nostro sito",
                    link:"Invia Feedback",
                }
            ],

                iconSocial: [
                    "fa-brands fa-facebook fa-xl",
                    "fa-brands fa-instagram fa-xl",
                    "fa-brands fa-linkedin fa-xl",
            ],
            };
        },
        methods:{

        }
    }
</script>

<template>

<footer>
    <div class="container-fluid">
        <div class="container">
            <div class="row pb-3">

                <!--1 blocco App-->
                <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3" v-for="(elem, i) in downloadApp" :key="i">
                    <h3>{{ elem.title }}</h3>
                    <div class="d-flex mt-md-3 mt-sm-3">
                        <div>
                            <a href="#">
                                <img :src="elem.img" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!--fine 1 blocco-->
                
                <!--2 blocco feedback-->
                <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3" v-for="(elem, i) in feedback" :key="i">
                    <h3>
                        {{ elem.title}}
                    </h3>
                    <div>
                        {{ elem.text }}
                    </div>
                    <a class="text-black" href="#">
                        {{ elem.link }}
                    </a>
                </div>
                <!--fine 2 blocco-->

                <!--3 blocco social-->
                <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3">
                    <h3>
                        Seguici su:
                    </h3>
                    <div class="d-inline" v-for="(elem, i) in iconSocial" :key="i">
                        <a href="#">
                            <i :class="elem"></i>
                        </a>
                    </div>
                </div>
                <!--fine 3 blocco-->

            </div>
        </div>
    </div>
</footer>

</template>

<style lang="scss" scoped>

    footer{
        background-color: rgb(245, 242, 240);

        img{
            width: 100px;
        }

        i{
            margin-right: 10px;
        }
        
    }

</style>
