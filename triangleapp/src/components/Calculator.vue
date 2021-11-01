<template>
  <div class="calculator">
    <div class="inputItem">
      <div>
        <label for="SeiteA">Seiten Länge A</label>
        <input v-model="calc.seiteA" name="SeiteA" type="number">
      </div>
      <div v-if="!calc.seiteA">
        <label for="Winkela">Winkel Alpha</label>
        <input name="Winkela" type="number">
      </div>
    </div>
    <div class="inputItem">
      <div>
        <label for="SeiteB">Seiten Länge B</label>
        <input v-model="calc.seiteB" name="SeiteB" type="number">
      </div>
      <div v-if="calc.seiteB">
        <label for="Winkelb">Winkel Beta</label>
        <input name="Winkelb" type="number" placeholder="Not required">
      </div>
      <div v-if="!calc.seiteB">
        <label for="Winkelb">Winkel Beta</label>
        <input name="Winkelb" type="number">
      </div>
    </div>
    <div class="inputItem">
      <div>
        <label for="SeiteC">Seiten Länge C</label>
        <input v-model="calc.seiteC" name="SeiteC" type="number">
      </div>
      <div v-if="calc.seiteC">
        <label for="Winkelc">Winkel Gamma</label>
        <input name="Winkelc" type="number" placeholder="Not required">
      </div>
      <div v-if="!calc.seiteC">
        <label for="Winkelc">Winkel Gamma</label>
        <input name="Winkelc" type="number">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    
  },
  computed:{
    calc(){
      return this.$store.state.calcData;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator{
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.inputItem{
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

input{
  margin-bottom: 10px;
}
</style>
