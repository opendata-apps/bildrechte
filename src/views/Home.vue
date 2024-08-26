<template>
  <div class="background">
    <div>
      <br />
      <img class="w-30"
           src="/static/bilder/bildrechte.png"  /><br/><br/>
      <div>
      <h1>Fotos mal erlaubt, mal verboten!</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style>
  .background {
    background-image: url("/static/bilder/bg.jpg") ;
  }

  .bildrechte {
    border: 10px solid rgba(255,255,255,.5);
    border-radius:15px;
    background: rgb(234, 235, 239);
    max-width: 31em;
    height: 45em;
    padding-left: 0em;
    padding-right:1em;
    margin-left: auto;
    margin-right: auto;
    position: center;
    font-family: 'Istok Web', sans-serif;
    color: rgb(73, 120, 172);
  }

  h1{
    font-family: 'Fredericka the Great', cursive;
    color:rgb(73, 120, 172);
  }

/*  img{
    border: 5px solid rgb(203,217,227);
    border-radius:15px;
  }
*/
  button{
    background-color: rgb(188, 207, 219);
    border: 1px solid rgb(255,255,255);
    border-radius:8px;
    color: rgb(73, 120, 172);
    font-size: 15px;
    font-family: 'Istok Web', sans-serif;
    display: inline-block;
    text-align: center;
    margin-left: 1em;
    margin-right: 1em;
  }

  #seite{
    color: rgb(73, 120, 172);
    font-size: 16px;
  }

  #answer_zone{
    position: center;
    margin: 0em auto 1em;
    font-size: 18px;
    text-align: left;
    width:90%;
  }

  #options{
    margin-top: -1em;
  }

  #submit{
    background-color: rgb(188, 207, 219);
    border: 1px solid rgb(255,255,255);
    border-radius:8px;
    color: rgb(73, 120, 172);
    font-size: 17px;
    font-family: 'Istok Web', sans-serif;
    display: inline-block;
    text-align: center;
    margin-top:1em;
  }
  #result{
    font-family: 'Heebo', sans-serif;
    color:rgb(73, 120, 172);
    font-size: 20px;
    margin-bottom: -15px;
  }

  #solution{
    font-family: 'Istok Web', sans-serif;
    color:rgb(73, 120, 172);
  }
 .level{
    background-color: rgb(188, 207, 219);
    border: 1px solid rgb(255,255,255);
    border-radius:8px;
    color: rgb(73, 120, 172);
    font-size: 23px;
    font-family: 'Istok Web', sans-serif;
    display: inline-block;
    text-align: center;
    padding-right: 5em;
    padding-left: 5em;
    margin-top: 10px;
  }
  .level:hover{
    background: whitesmoke;
  }
 .option{
    margin-top: 3em;
    position: center;
  }
  li{
    list-style: none;
  }
</style>
