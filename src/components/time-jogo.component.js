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
    mounted() {
        this.initJogo(this.$store.state.times);
    },
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
        initJogo(times){
            let indexCasa = Math.floor(Math.random() * 20), 
                indexFora = Math.floor(Math.random() * 20);
      
            this.novoJogo.casa.time = times[indexCasa];
            this.novoJogo.casa.gols = 0;
            this.novoJogo.fora.time = times[indexFora];
            this.novoJogo.fora.gols = 0;
          },
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time;
            let timeCasa = this.novoJogo.casa.time;
            let gols = +this.novoJogo.casa.gols;
            let golsAdversario = +this.novoJogo.fora.gols;
            timeCasa.fimJogo(timeAdversario, gols, golsAdversario);
            this.$store.commit('update', timeCasa);
            this.$store.commit('update', timeAdversario);
            this.$store.commit('show-time-list');
        }
    }    
};