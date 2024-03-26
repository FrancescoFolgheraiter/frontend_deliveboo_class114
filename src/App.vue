<script>
    import AppHeader from './components/AppHeader.vue'
    import AppMain from './components/AppMain.vue'
    import AppFooter from './components/AppFooter.vue'
    import axios from 'axios'
    
    export default{
        data(){
            return{

            };
        },
        methods:{

        },
        components:{
            AppHeader,
            AppMain,
            AppFooter
        },
        mounted(){
            axios
            .get()
            .then((response) =>{
                console,log(response)
            })
        }
    }
</script>

<template>

        <h1>
            Mia App
        </h1>

        <AppHeader/>

        <AppMain/>

        <AppFooter/>

</template>

<style lang="scss">
    @use "assets/scss/main.scss" as *;
    @use "assets/scss/partials/reset.scss" as *;
</style>
