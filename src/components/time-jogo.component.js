export default {
  template: 
  ` <div>
        <form class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" v-model="novoJogo.casa.gols" @keyup.enter="fimJogo">
            <label class="control-label" v-if="novoJogo.casa.time != null">
            {{novoJogo.casa.time.nome}}
            <img :src="novoJogo.casa.time.escudo" style="height: 30px; width: 30px;">
            </label>
        </div>
        <span>X</span>
        <div class="form-group">
            <label class="control-label" v-if="novoJogo.fora.time != null">
            <img :src="novoJogo.fora.time.escudo" style="height: 30px; width: 30px;">
            {{novoJogo.fora.time.nome}}
            </label>
            <input type="text" class="form-control" v-model="novoJogo.fora.gols" @keyup.enter="fimJogo">
        </div>
        <button type="button" class="btn btn-primary" @click="fimJogo" >Fim de Jogo</button>
        </form>
    </div>`
    ,
    data() {
        return { 
            novoJogo: {
                casa: {
                time: null,
                gols: 0
                },
                fora: {
                time: null,
                gols: 0
                } 
            }
        }
    },
    methods: {
      fimJogo() {
        let timeAdversario = this.novoJogo.fora.time;
        let gols = +this.novoJogo.casa.gols;
        let golsAdversario = +this.novoJogo.fora.gols;
        this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
        this.showView('tabela');
      },
      showView(view){
        this.view = view;
      }
    }    
  };