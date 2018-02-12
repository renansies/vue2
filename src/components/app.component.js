import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component'; 
import store from '../store';

export default {
  components: {
    'time-list': TimeListComponent,
    'time-jogo': TimeJogoComponent
  },
  template: 
  ` <div class="container">
      <div class="row">
        <h3>Campeonato Brasileiro - Série A - 2016</h3>
        <a class="btn btn-primary" @click="showNovoJogo()">Novo Jogo</a>
        <br /><br />
        <div v-show="view == 'tabela'">
          <time-list></time-list>
        </div>
        <div v-if="view == 'novoJogo'">
          <time-jogo></time-jogo>
        </div>
      </div>
    </div>`
    ,
    computed: {
      view(){
        return this.$store.state.view;
      }
    },
    methods: {
      showNovoJogo() {
        this.$store.commit('show-time-jogo');
      }
    }
  };