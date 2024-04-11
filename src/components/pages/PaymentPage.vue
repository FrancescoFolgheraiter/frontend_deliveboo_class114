<script>


export default {
  data() {
    return {
      customer: {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
      }
    };
  },
  methods: {
    setupBraintree() {
      braintree.dropin.create({
      authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
      selector: '#dropin-container'
        }, function (err, instance) {
          button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (err, payload) {
              // Submit payload.nonce to your server
            });
          })
      });
    },
    submitOrder() {
      // Aggiungi qui la logica per inviare i dati del pagamento al tuo server
    }
  },
  mounted() {
    this.setupBraintree();
  },
};
</script>

<template>
    <div class="mt-5 pt-5">
        <form class="p-5 m-5 bg-success-subtle" @submit.prevent="submitOrder">
            <div class="mb-3">
                <label for="firstName" class="form-label">Nome</label>
                <input type="text" class="form-control" id="firstName" v-model="customer.firstName" required>
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Cognome</label>
                <input type="text" class="form-control" id="lastName" v-model="customer.lastName" required>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="address" v-model="customer.address" required>
            </div>
            <div class="mb-3">
                <label for="phoneNumber" class="form-label">Numero di telefono</label>
                <input type="tel" class="form-control" id="phoneNumber" v-model="customer.phoneNumber" required>
            </div>
            <div id="dropin-container">
            </div>
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