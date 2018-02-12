import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component'; 
import event from '../event';

export default {
  components: {
    'time-list': TimeListComponent,
    'time-jogo': TimeJogoComponent
  },
  template: 
  ` <div class="container">
      <div class="row">
        <h3>Campeonato Brasileiro - Série A - 2016</h3>
        <div v-show="view == 'tabela'">
          <time-list></time-list>
        </div>
        <div v-show="view == 'novoJogo'">
          <time-jogo></time-jogo>
        </div>
      </div>
    </div>`
    ,
    mounted() {
      event.$on('show-time-list', () => {
        this.view = 'tabela';
      });
      event.$on('show-time-jogo', () => {
        this.view = 'novoJogo';
      });
    },
    data() {
      return {  
        view: 'tabela'
      }
    },
    methods: {
      /*fimJogo() {
        let timeAdversario = this.novoJogo.fora.time;
        let gols = +this.novoJogo.casa.gols;
        let golsAdversario = +this.novoJogo.fora.gols;
        this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
        this.showView('tabela');
      },
      createNovoJogo(){
        let indexCasa = Math.floor(Math.random() * 20), 
          indexFora = Math.floor(Math.random() * 20);
  
        this.novoJogo.casa.time = this.times[indexCasa];
        this.novoJogo.casa.gols = 0;
        this.novoJogo.fora.time = this.times[indexFora];
        this.novoJogo.fora.gols = 0;
        this.showView('novojogo');
      },*/
      showView(view){
        this.view = view;
      }/*,
      orderBy(coluna){
        this.order.keys = coluna;
        this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc';
      }*/
    }    
  };