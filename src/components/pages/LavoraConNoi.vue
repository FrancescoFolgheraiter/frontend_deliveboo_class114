<script>
export default {
  data() {
    return {

      workWithUs: [
        {
          title: "Lavora con noi",
          text:"Benvenuto nella nostra sezione Lavora con noi. Siamo sempre alla ricerca di nuovi talenti per unirsi al nostro team e contribuire al nostro successo. Qui troverai una varietà di opportunità di carriera stimolanti e gratificanti che ti consentiranno di crescere professionalmente e personalmente.\
                Che tu sia un esperto del settore o un giovane talento in cerca di opportunità, c'è spazio per te nel nostro team. Abbiamo a cuore la valorizzazione delle competenze e il sostegno al tuo sviluppo professionale.\
                Esplora le posizioni aperte e scopri quale potrebbe essere il ruolo giusto per te. Siamo entusiasti di conoscere persone motivate e appassionate che condividano la nostra visione e i nostri valori.",
          img: "https://www.donnamoderna.com/content/uploads/2018/06/Stretta-di-mano-1-1080x630.jpg"
        }
      ],

      chooseServices: [
        {
          titleh4: "Vantaggi per i ristoranti",
          text: "Iscrivendoti al nostro sito, il tuo ristorante ottiene una maggiore visibilità online. Attraverso la nostra piattaforma, potenziali clienti possono scoprire il tuo locale, il menu e le offerte speciali, aumentando così le possibilità di attirare nuovi clienti.",
          img: "https://www.informazioneoggi.it/wp-content/uploads/2022/04/prenotazione.jpg",
        },
        {
          titleh4: "Promozione gratuita",
          text: "Offriamo ai ristoranti iscritti la possibilità di promuovere gratuitamente le loro offerte, sconti e eventi speciali. Questo ti permette di raggiungere un pubblico più vasto senza alcun costo aggiuntivo.",
          img: "/img/lavora-con-noi-promo.png",
        },
        {
          titleh4: "Gestione degli ordini",
          text: "La nostra piattaforma offre strumenti intuitivi per gestire gli ordini in modo efficiente. Ricevi e gestisci gli ordini online in modo rapido e senza complicazioni, ottimizzando così il flusso di lavoro nel tuo ristorante.",
          img: "https://www.ollyservices.com/wp-content/uploads/2022/04/Gestione-degli-ordini-helpdesk.jpg",
        },
        {
          titleh4: "Feedback e recensioni",
          text: "I nostri clienti hanno la possibilità di lasciare feedback e recensioni sulle loro esperienze presso il tuo ristorante. Questo ti offre preziose informazioni sulle preferenze dei clienti e ti aiuta a migliorare continuamente la qualità dei tuoi servizi.",
          img: "/img/lavora-con-noi-feedback.png"
        }
      ],

      opportunity:[
        {
          icon: "fas fa-user-tie",
          list: "Responsabile delle vendite"
        },
        {
          icon: "fas fa-suitcase",
          list: "Ruoli aziendali"
        },
        {
          icon: "fas fa-laptop",
          list: "Ruoli tecnici"
        },
        {
          icon: "fas fa-truck",
          list: "Ruoli del delivery"
        },
      ],

      application:[
        {
          titleh4: "Come candidarsi:",
          text: "Se sei interessato a unirti al nostro team, invia il tuo curriculum vitae e una lettera di presentazione all'indirizzo email 'infoLavoraConNoi@deliveboo.com'. Assicurati di indicare la posizione desiderata nell'oggetto dell'email. Inoltre, descrivi brevemente le tue esperienze lavorative e le motivazioni per cui desideri lavorare con noi."
        }
      ]
    };
  },

  methods: {}
};
</script>

<template>
  <!-- Prima sezione: Informazioni generali -->
  <section class="info-section">
    <div class="container d-flex justify-content-center flex-column" v-for="(elem, i) in workWithUs" :key="i">
      <h2 class="text-center mb-4">{{ elem.title }}</h2>
      <div class="row align-items-center">
        <div class="col-lg-6">
            <p>
                {{ elem.text }}
            </p>
        </div>
        <div class="box-img col-lg-6 ">
          <img :src="elem.img" alt="">
        </div>
      </div>
    </div>
  </section>


  <!-- Seconda sezione: Perchè sceglierci -->
  <section>
    <div class="container-fluid">
      <div class="container">
        <h2 class="text-center mt-5">
          Perchè scegliere i nostri servizi?
        </h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
          <div class="col mb-4" v-for="(elem, i) in chooseServices" :key="i">
            <div>
              <img :src="elem.img" alt="">
            </div>
            <h4 class="mt-3">{{ elem.titleh4 }}</h4>
            <p>{{ elem.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </section>



  <!-- Terza sezione: Opportunità di lavoro -->
  <section class="job-opportunities">
  <div class="container mt-1 mb-5">
    <h3 class="text-start mb-5">Opportunità di lavoro</h3>
    <div class="row">
      <div class="col-lg-6">
        <h4>Posizioni aperte:</h4>
        <ul class="position-list" v-for="(elem, i) in opportunity" :key="i">
          <li class="mb-2">
            <i :class="elem.icon"></i> 
            {{ elem.list }}
          </li>
        </ul>
      </div>
      <div class="col-lg-6" v-for="(elem, i) in application" :key="i">
        <h4>{{ elem.titleh4 }}</h4>
        <p>
          {{ elem.text }}
        </p>
      </div>
    </div>
  </div>
  <hr>
</section>


  <!-- Quarta sezione: FAQ -->
  <section class="faq-section">
    <div class="container">
      <h2 class="text-center mb-4">FAQ</h2>
      <div class="row align-items-center">
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



//CSS SEZIONE 2

hr{
  width: 80%;
  margin: auto;
  color: rgb(241, 70, 71);
  margin-top: 10px;
}

.col img {
      width: 100%;
      height: 200px; 
      object-fit: cover; 
}

h4:hover{
      color: rgb(241, 70, 71);
    }

h1, h2, h3{
  color: rgb(241, 70, 71);
}

//FINE CSS SEZIONE 2


//CSS SEZIONE 3

.position-list li:hover {
  color: rgb(241, 70, 71);
  cursor: pointer; 
}


</style>
