import Vue from 'vue'
import {Time} from './time';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.css');
require('bootstrap');

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("América MG", require('./assets/america_mg_60x60.png')),
      new Time("Atlético MG", require('./assets/atletico_mg_60x60.png')),
      new Time("Atlético PR", require('./assets/atletico_pr_60x60.png')),
      new Time("Botafogo", require('./assets/botafogo_60x60.png')),
      new Time("Chapecoense", require('./assets/chapecoense_60x60.png'))
    ]
  }
})
