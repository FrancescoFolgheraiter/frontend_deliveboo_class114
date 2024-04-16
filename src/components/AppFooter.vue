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

            imgPayment: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Paypal.svg/800px-Paypal.svg.png",
            ],
            };
        },
        methods:{

        }
    }
</script>

<template>

<footer>
    <section class="section-1 p-3">
        <div class="container-fluid">
            <div class="text-center ">
                <div class="row pb-3 justify-content-center ">

                    <!--1 blocco App-->
                    <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3" v-for="(elem, i) in downloadApp" :key="i">
                        <h3>{{ elem.title }}</h3>
                        <div class="d-flex justify-content-center  mt-md-2 mt-sm-2">
                            <div>
                                <a href="#">
                                    <img class="mb-4" :src="elem.img" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--fine 1 blocco-->
                    
                    <!--2 blocco feedback-->
                    <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3 feedbackDiv" v-for="(elem, i) in feedback" :key="i">
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
    </section>


    <section class="section-2">
        <div class="container-fluid p-4 d-flex justify-content-center ">
            <div class="text-center ">
                <div class="row align-items-center">
                <!--1 blocco P.IVA-->
                    <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3">
                        <p>
                            Deliveboo - P.IVA 04154792960
                        </p>
                    </div>
                    <!--fine 1 blocco-->
                    
                    
                    <!--2 blocco Cookie-->
                    <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3">
                        <p>
                            <a class="text-decoration-none text-black" href="#">
                                <strong>Controlla le mie preferenze sui cookie</strong>
                            </a>
                        </p>
                    </div>
                    <!--fine 2 blocco-->

                    <!--3 blocco Pagamenti-->
                    <div class="col-lg-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3 d-flex justify-content-center align-items-center">
                        <div class="img-payment d-flex align-items-center ">
                            <div v-for="(elem, i) in imgPayment" :key="i">
                                <img class="w-100 me-2" :src="elem" alt="">
                            </div>
                        </div>
                    </div>
                    <!--fine 3 blocco-->
                    
                </div>
            </div>
        </div>
    </section>
</footer>

</template>

<style lang="scss" scoped>

    footer{
        background-color: rgb(245, 242, 240);
    }

    .section-1{
        img{
            width: 100px;
        }

        i{
            margin-right: 10px;
        }   
    }

    .section-2{
        background-color: rgb(245, 242, 240);

        .img-payment{
            width: 200px;
        }

        
    }




/* Nascondi il div del feedback solo su smartphone e tablet */
@media only screen and (max-width: 991px) {
    .feedbackDiv {
        display: none;
    }
}

</style>
