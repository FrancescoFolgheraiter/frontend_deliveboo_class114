<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<template>
  <!-- Prima sezione: Informazioni generali -->
  <section class="info-section">
    <div class="container d-flex justify-content-center flex-column">
      <h2 class="text-center mb-4">Lavora con noi</h2>
      <div class="row">
        <div class="col-lg-6">
            <p>
                Benvenuto nella nostra sezione "Lavora con noi". Siamo sempre alla ricerca di nuovi talenti per unirsi al nostro team e contribuire al nostro successo. Qui troverai una varietà di opportunità di carriera stimolanti e gratificanti che ti consentiranno di crescere professionalmente e personalmente. 
                Che tu sia un esperto del settore o un giovane talento in cerca di opportunità, c'è spazio per te nel nostro team. Abbiamo a cuore la valorizzazione delle competenze e il sostegno al tuo sviluppo professionale.
                Esplora le posizioni aperte e scopri quale potrebbe essere il ruolo giusto per te. Siamo entusiasti di conoscere persone motivate e appassionate che condividano la nostra visione e i nostri valori.
            </p>
        </div>
        <div class="box-img col-lg-6 ">
          <img src="https://www.donnamoderna.com/content/uploads/2018/06/Stretta-di-mano-1-1080x630.jpg" alt="">
        </div>
      </div>
    </div>
  </section>

  <!-- Seconda sezione: Opportunità di lavoro -->
  <section class="job-opportunities">
  <div class="container mt-3">
    <h3 class="text-start mb-5">Opportunità di lavoro</h3>
    <div class="row">
      <div class="col-lg-6">
        <h4>Posizioni aperte:</h4>
        <ul class="position-list">
          <li><i class="fas fa-user-tie"></i> Responsabile delle vendite</li>
          <li><i class="fas fa-suitcase"></i> Ruoli aziendali</li>
          <li><i class="fas fa-laptop"></i> Ruoli tecnici</li>
          <li><i class="fas fa-truck"></i> Ruoli del delivery</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <h4>Come candidarsi:</h4>
        <p>
          Se sei interessato a unirti al nostro team, invia il tuo curriculum vitae e una lettera di presentazione all'indirizzo email <a href="infoLavoraConNoi@deliveboo.com">infoLavoraConNoi@deliveboo.com</a>. Assicurati di indicare la posizione desiderata nell'oggetto dell'email. Inoltre, descrivi brevemente le tue esperienze lavorative e le motivazioni per cui desideri lavorare con noi.
        </p>
      </div>
    </div>
  </div>
</section>


  <!-- Terza sezione: FAQ -->
  <section class="faq-section">
    <div class="container">
      <h2 class="text-center mb-4">FAQ</h2>
      <div class="row">
        <div class="col-lg-6">
          <div class="accordion accordion-flush mb-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed background-h2-faq" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Come posso candidarmi per una posizione presso la vostra azienda?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Puoi candidarti inviando il tuo curriculum vitae e una lettera di presentazione all'indirizzo email indicato nella sezione "Lavora con noi". Assicurati di indicare la posizione desiderata nell'oggetto dell'email.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed background-h2-faq" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Quali sono i requisiti per lavorare con voi?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">I requisiti possono variare a seconda della posizione. Generalmente, cerchiamo candidati con esperienza nel settore, ottime capacità comunicative e capacità di lavorare in team.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed background-h2-faq" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Qual è il processo di selezione dei candidati?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Il processo di selezione prevede la valutazione dei curriculum vitae ricevuti, seguita da interviste e test pratici. Cerchiamo candidati che abbiano le competenze e l'esperienza necessarie per svolgere il ruolo in modo efficace.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img class="w-100" src="/img/foto5.png" alt="">
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
/* Stili specifici per questa pagina */
.box-img{
    border-radius: 50px;
}
img{
    width: 100%
}
.info-section {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.job-opportunities {
  
  padding: 50px 0;
}

.faq-section {
  
  padding: 50px 0;
}


</style>
