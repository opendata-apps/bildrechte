<template>
  <div>
    <h1>SNAPSHOT LEVEL 2</h1>
    <div v-if="!auswertung">
      <img :src="'static/bilder/level2/'+ active.image"
           width="50%" /><br/>
      <popup :popupData="popupData"></popup>
      <p>
        <button @click="openpopup">Info zum Bild</button>
        <span id="seite">{{this.idx + 1}} von {{getLevel2.length}} </span>
      </p>
    </div>
    <div class="center w-70">
      <div  v-if="!active.answer" width="70%">
        <p>{{active.questions}}</p>
      </div>
      <div v-if="!result">
        <span v-for="(item, idx) in active.answers"
              :key="idx"
              class="w-100">
          <button class="w-100 br-pill bg-blue white pa3 ma1 tc"
                  v-on:click="check(active.answers[idx])">
            {{active.answers[idx]}}
          </button>
        </span>
      </div>
      <div v-if="result && !auswertung">
        <hr/>
        <p v-html="result"></p>
        <p v-html="active.solution"></p>
        <p v-if="this.idx < getLevel2.length-1">
          <button v-on:click="picNext()"
                  class="w-30 br-pill bg-blue white pa2">Weiter</button>
        </p>
        <p v-if="this.idx+1 == getLevel2.length">
          <button v-on:click="auswertung = 1"
                  class="w-60 br-pill bg-blue white pa2">Auswertung</button>
        </p>
      </div>
    </div>
    <div v-if="auswertung" class="center w-50">
     <h3>Du hast {{ countLevel2 }} von {{ this.getLevel2.length }} Fragen richtig beantwortet</h3>
      <button class="w-60 br-pill bg-blue white pa2 tc">
        <router-link class="white link" style="underline:none" to="/level_3">Weiter mit Level 3</router-link>
      </button>
      <h1>Auswertung aller Fragen</h1>
      <ul>
        <li v-for="(item,idx) in getLevel2" :key="idx">
            <img class="w-30"
                 :src="'static/bilder/level2/'+ item.image" />
          <span v-if="item.answer === item.correct_answer"
                class="f2 lh-title green">✓</span>
          <span v-else-if="item.answer !== item.correct_answer"
                class="f1 lh-title red">-</span>
          <span v-else-if="item.answer">{{ item.answer }}</span>
          <p v-html="item.solution"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from 'vuex'
import store from '../store.js'
import axios from 'axios'
import Popup from './popup.vue'

export default {
  name: 'level2',
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
      countLevel2: 0,
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
    'getLevel2'
  ]),
  created: function () {
    this.active = this.getLevel2[this.idx]
  },
  methods: {
    ...mapMutations({
      sum_level2: 'set_level2'
    }),
    picNext () {
      if (this.idx < this.getLevel2.length + 1) {
        this.idx = this.idx + 1
      }
      this.active = this.getLevel2[this.idx]
      this.result = ''
    },
    picPrevious () {
      if (this.idx > 0) {
        this.idx = this.idx - 1
      }
      this.active = this.getLevel2[this.idx]
      this.result = ''
    },
    check (answer) {
      this.active.answer = answer
      if (this.active.answer !== this.active.correct_answer) {
        this.result = "<span class='orange'> Deine Antwort ist falsch!</span>"
      } else {
        this.result = "<span class='dark-blue'> Deine Antwort ist richtig.</span>"
        this.sum_level2()
      }
    },
    openpopup () {
      this.popupData.display = 'block'
      this.popupData.body = this.active.source
      this.popupData.author = this.active.author
      this.popupData.footer = this.active.last_visited
    },
    sum_level2 () {
      this.countLevel2 += 1
      this.$store.commit('set_level2', this.countLevel2)
    }
  }
}
</script>
