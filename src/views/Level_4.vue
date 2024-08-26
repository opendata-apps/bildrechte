<template>
  <div>
    <h1>GESAMTAUSWERTUNG</H1>
    <DIV>
    <H1>Auswertung aller Fragen</h1>
      <ul>
        <li class="pa2">
          <span> Level 1:  {{ getResultLevel1 }} korrekte Antworten</span>
        </li>
        <li class="pa2">
          <span> Level 2:  {{ getResultLevel2 }} korrekte Antworten</span>
        </li>
        <li class="pa2">
          <span> Level 3:  {{ getResultLevel3 }} korrekte Antworten </span>
        </li>
     </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import store from '../store.js'
import axios from 'axios'
import Popup from './popup.vue'

export default {
  name: 'level4',
  store,
  axios: axios,
  components: {
    'popup': Popup
  },
  data () {
    return {
      isHidden: true,
      auswertung: '',
      active: '',
      isShow: false,
      idx: 0,
      result: '',
      popupData: {
        'header': 'Quellangabe zum Bild',
        'body': '',
        'footer': '',
        'display': 'none'
      }
    }
  },
  computed:
    mapGetters([
      'getResultLevel1',
      'getResultLevel2',
      'getResultLevel3'
    ])
}
</script>
