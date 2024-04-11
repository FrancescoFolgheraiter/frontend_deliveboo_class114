<script>
import axios from 'axios';

export default {
    data() {
        return {
            //dati cliente
            name: '',
            surname: '',
            address: '',
            phoneNumber: '',
            note:'',
            total_price:10,
            dataOrder: [],
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
                        alert('pagamento effettuato')
                        self.loadDataOrder()
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
                    localStorage.clear();
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
        this.manipulateCartData(savedCartItems)
        this.setupBraintree();
  },
};
</script>

<template>
    <div class="mt-5 pt-5">
        <form class="p-5 m-5 bg-success-subtle" @submit.prevent="submitOrder">
            <div class="mb-3">
                <label for="firstName" class="form-label">Nome</label>
                <input type="text" class="form-control" id="firstName" v-model="name" required>
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Cognome</label>
                <input type="text" class="form-control" id="lastName" v-model="surname" required>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="address" v-model="address" required>
            </div>
            <div class="mb-3">
                <label for="phoneNumber" class="form-label">Numero di telefono</label>
                <input type="text" class="form-control" id="phoneNumber" v-model="phoneNumber" required>
            </div>
            <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <textarea class="form-control" id="note" rows="3" v-model="note"></textarea>
            </div>
            <div id="dropin-container"></div>
            <button id="submit-button" class="button button--small button--green">Purchase</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>