import Vue from 'vue';
import Vuex from 'vuex';
import {Time} from './time';

Vue.use(Vuex);

const state = {
    view: 'tabela',
    times: [
        new Time(1,"América MG", require('./assets/america_mg_60x60.png')),
        new Time(2,"Atlético MG", require('./assets/atletico_mg_60x60.png')),
        new Time(3,"Atlético PR", require('./assets/atletico_pr_60x60.png')),
        new Time(4,"Botafogo", require('./assets/botafogo_60x60.png')),
        new Time(5,"Chapecoense", require('./assets/chapecoense_60x60.png')),
        new Time(6,"Corinthians", require('./assets/corinthians_60x60.png')),
        new Time(7,"Coritiba", require('./assets/coritiba_60x60.png')),
        new Time(8,"Cruzeiro", require('./assets/cruzeiro_60x60.png')),
        new Time(9,"Figueirense", require('./assets/figueirense_60x60.png')),
        new Time(10,"Flamengo", require('./assets/flamengo_60x60.png')),
        new Time(11,"Fluminense", require('./assets/fluminense_60x60.png')),
        new Time(12,"Grêmio", require('./assets/gremio_60x60.png')),
        new Time(13,"Internacional", require('./assets/internacional_60x60.png')),
        new Time(14,"Palmeiras", require('./assets/palmeiras_60x60.png')),
        new Time(15,"Ponte Preta", require('./assets/ponte_preta_60x60.png')),
        new Time(16,"Santa Cruz", require('./assets/santa_cruz_60x60.png')),
        new Time(17,"Santos", require('./assets/santos_60x60.png')),
        new Time(18,"São Paulo", require('./assets/sao_paulo_60x60.png')),
        new Time(19,"Sport", require('./assets/sport_60x60.png')),
        new Time(20,"Vitória", require('./assets/vitoria_60x60.png'))
      ]
};

const mutations = {
    update(state, time) {
        let index = state.times.findIndex(element => time.id == element.id);
        if (index != -1){
            state.times[index] = time;
        }
    },
    'show-time-list'(state){
        state.view = 'tabela';
    },
    'show-time-jogo'(state){
        state.view = 'novoJogo';
    }
}

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0,6),
        timesRebaixados: state => state.times.slice(16,20)
    },
    mutations
});