<template>
  <div id="popup" :style="{display : popupData.display}">
      <div class="inner pa3 br4">
        <div class="header">
            <div>{{popupData.header}}</div>
            <button @click="closeFunction" class="bg-red black">X</button>
        </div>
        <div class="body">Quelle: {{popupData.body}}</div>
        <div class="body">Autor: {{popupData.author}}</div>
        <div class="footer">Letzter Zugriff: {{popupData.footer}}</div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['popupData'],
  methods: {
    closeFunction () {
      this.popupData.display = 'none'
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
