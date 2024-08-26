<template>
  <div id="popup" :style="{display : popupHelp.display}">
      <div class="inner pa3 br4">
        <div class="header">
            <div><b>FAQ:</b></div>
            <button @click="closeFunction" class="bg-red black">X</button>
        </div>
        <div class="frage"> {{popupHelp.query}}</div>
        <div v-html="popupHelp.answer"></div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['popupHelp'],
  methods: {
    closeFunction () {
      this.popupHelp.display = 'none'
    }
  }
}
</script>

<style>

#popup{
    position: relative;
    width: 100%;
    height :100%;
    top: 0;
}
#popup .inner{
    background-color: white;
    position: inherit;
    top: 0%;
    left: 0%;
    width: 100%;
}
#popup .inner div{
    text-align: left;
}
#popup .inner .header{
    display: flex;
    justify-content: space-between;
}
</style>
