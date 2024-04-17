<script>
import axios from 'axios';
import {store} from '../../store.js';

export default {
    data() {
        return {
            //dati cliente
            name: '',
            surname: '',
            address: '',
            phoneNumber: '',
            note:'',
            total_price:0,
            dataOrder: [],
            store
        };
    },
    methods: {
        //funzione per settappare il dropin di braintree
        setupBraintree() {
            const button = document.querySelector('#submit-button');
            //mi salvo il this in refiermiento all pagina in vue
            //per poi poterlo utilizzare all'interno delle function
            const self = this;

            braintree.dropin.create({
            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
            selector: '#dropin-container'
            }, function (err, instance) {
                //uscita anticipata nel caso avvenga un errore
                if (err) {
                console.error(err);
                return;
                }
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod(function (err, payload) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        // Effettua la chiamata Axios solo se il pagamento è stato effettuato con successo
                        self.loadDataOrder();
                    });
                })
            });
        },
        manipulateCartData(cart){
            //funzione che mi permette di estrarre dal carrello
            //l'id del piatto con la relativa quantità
            //che successivamente verranno inviati al backend
            //struttura dati [id, quantity]
            cart.forEach(item => {
                let order = [];
                order.push(item['id'])
                order.push(item['quantity'])
                this.dataOrder.push(order) 
            });
        },
        loadDataOrder(){
            
            axios.post('http://127.0.0.1:8000/api/orders',{
                    params:{
                        note: this.note,
                        total_price: this.total_price,
                        name: this.name,
                        surname: this.surname,
                        address: this.address,
                        phone_number: this.phoneNumber,
                        order: this.dataOrder,
                    }
                })
                .then((res) => {
                    console.log(res);
                    //pulisco il localstorage
                    localStorage.clear();
                    //pulisco il carrello in store
                    this.store.cartItems = [];
                    console.log(this.store.cartItems);
                    //reindirizzamento sull'order success
                    setTimeout(() => {
                        this.$router.push({ name: 'order-success' });
                    }, 2000);
                })
                .catch((error) => {
                    console.log('Recupero paitti non riuscito errrore: '.error)
                })
            
        }
    },
    created(){
    },
    mounted() {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        this.savedCartItems = savedCartItems;
        console.log(savedCartItems)
        this.total_price = parseFloat(localStorage.getItem('total_price')).toFixed(2);
        console.log(this.total_price)
        this.manipulateCartData(savedCartItems)
        this.setupBraintree();
    },
};
</script>

<template>
    <div class="container container-md container-sm bg-payment my-4">
        <form class="p-4" @submit.prevent="submitOrder">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-12 col-lg-8">
                    <div class="card p-3">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Nome <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="firstName" v-model="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Cognome <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="lastName" v-model="surname" required>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Indirizzo <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="address" v-model="address" required>
                        </div>
                        <div class="mb-3">
                            <label for="phoneNumber" class="form-label">Numero di telefono <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="phoneNumber" v-model="phoneNumber" required>
                        </div>
                        <div class="mb-3">
                            <label for="note" class="form-label">Note</label>
                            <textarea class="form-control" id="note" rows="3" v-model="note"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-12 gy-3 gy-sm-0 gy-md-3 gy-lg-0 col-md-12 col-sm-6 col-lg-4 ">
                    <div class="card p-2 mb-3 text-center h-100">
                        <div class="card-body">
                            <h3>Riepilogo Carrello</h3>
                            <div class="card p-2 mb-2" v-for="product in savedCartItems">
                                x{{ product.quantity }} {{ product.name }}
                            </div>
                        </div>
                        <h4>
                            Totale: {{ total_price }}€
                        </h4>
                    </div>
                </div>
            </div>
            
            
            <div id="dropin-container"></div>
            
            <button id="submit-button" class="btn btn-pers">Purchase</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

.card-body{
    h3{
        color: #f14647;
        font-weight: 600;
        font-size: 25px;
    }
}



.bg-payment{
    border: 1px solid rgba(128, 128, 128, 0.502);
    border-radius: 10px;
    background-color: #f7f7f7a8;
    -webkit-box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.37); 
    box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.37);  
}

.btn-pers{
    background-color: #f14647;
    font-weight: 500;
    color: white;
    line-height: 30px;

    &:hover{
        background-color: #f14646b9;
    }
}



</style>