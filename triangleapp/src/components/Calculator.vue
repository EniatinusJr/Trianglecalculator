<template>
  <div class="calculator">
    <div class="inputSection">
      <div class="inputItem" v-if="calc.winkelA">
        <label for="SeiteA">Seiten Länge A <br>(not required)</label>
        <input v-model="calc.seiteA" name="SeiteA" type="number">
      </div>
      <div class="inputItem" v-if="!calc.winkelA">
        <label for="SeiteA">Seiten Länge A</label>
        <input v-model="calc.seiteA" name="SeiteA" type="number">
      </div>
      <div class="inputItem" v-if="calc.seiteA">
        <label for="Winkela">Winkel Alpha <br>(not required)</label>
        <input v-model="calc.winkelA" name="Winkela" type="number">
      </div>
      <div class="inputItem" v-if="!calc.seiteA">
        <label for="Winkela">Winkel Alpha</label>
        <input v-model="calc.winkelA" name="Winkela" type="number">
      </div>
    </div>
    <div class="inputSection">
      <div class="inputItem" v-if="calc.winkelB">
        <label for="SeiteB">Seiten Länge B <br>(not required)</label>
        <input v-model="calc.seiteB" name="SeiteB" type="number">
      </div>
      <div class="inputItem" v-if="!calc.winkelB">
        <label for="SeiteB">Seiten Länge B</label>
        <input v-model="calc.seiteB" name="SeiteB" type="number">
      </div>
      <div class="inputItem" v-if="calc.seiteB">
        <label for="Winkelb">Winkel Beta <br>(not required)</label>
        <input v-model="calc.winkelB" name="Winkelb" type="number">
      </div>
      <div class="inputItem" v-if="!calc.seiteB">
        <label for="Winkelb">Winkel Beta</label>
        <input v-model="calc.winkelB" name="Winkelb" type="number">
      </div>
    </div>
    <div class="inputSection">
      <div class="inputItem" v-if="calc.winkelC">
        <label for="SeiteC">Seiten Länge C <br>(not required)</label>
        <input v-model="calc.seiteC" name="SeiteC" type="number">
      </div>
      <div class="inputItem" v-if="!calc.winkelC">
        <label for="SeiteC">Seiten Länge C</label>
        <input v-model="calc.seiteC" name="SeiteC" type="number">
      </div>
      <div class="inputItem" v-if="calc.seiteC">
        <label for="Winkelc">Winkel Gamma <br>(not required)</label>
        <input v-model="calc.winkelC" name="Winkelc" type="number">
      </div>
      <div class="inputItem" v-if="!calc.seiteC">
        <label for="Winkelc">Winkel Gamma</label>
        <input v-model="calc.winkelC" name="Winkelc" type="number">
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
.inputSection{
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.inputItem{
  display: flex;
  flex-direction: column;
}

input{
  margin-bottom: 10px;
}
</style>
