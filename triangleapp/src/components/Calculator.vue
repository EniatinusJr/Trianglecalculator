<template>
  <div>
    <div class="calculator">
      <div class="inputSection">
        <div class="inputItem" v-if="calc.winkelA">
          <label for="SeiteA">Seiten Länge A <br />(not required)</label>
          <input v-model="calc.seiteA" name="SeiteA" type="number" />
        </div>
        <div class="inputItem" v-if="!calc.winkelA">
          <label for="SeiteA">Seiten Länge A</label>
          <input v-model="calc.seiteA" name="SeiteA" type="number" />
        </div>
        <div class="inputItem" v-if="calc.seiteA">
          <label for="Winkela">Winkel Alpha <br />(not required)</label>
          <input v-model="calc.winkelA" name="Winkela" type="number" />
        </div>
        <div class="inputItem" v-if="!calc.seiteA">
          <label for="Winkela">Winkel Alpha</label>
          <input v-model="calc.winkelA" name="Winkela" type="number" />
        </div>
      </div>
      <div class="inputSection">
        <div class="inputItem" v-if="calc.winkelB">
          <label for="SeiteB">Seiten Länge B <br />(not required)</label>
          <input v-model="calc.seiteB" name="SeiteB" type="number" />
        </div>
        <div class="inputItem" v-if="!calc.winkelB">
          <label for="SeiteB">Seiten Länge B</label>
          <input v-model="calc.seiteB" name="SeiteB" type="number" />
        </div>
        <div class="inputItem" v-if="calc.seiteB">
          <label for="Winkelb">Winkel Beta <br />(not required)</label>
          <input v-model="calc.winkelB" name="Winkelb" type="number" />
        </div>
        <div class="inputItem" v-if="!calc.seiteB">
          <label for="Winkelb">Winkel Beta</label>
          <input v-model="calc.winkelB" name="Winkelb" type="number" />
        </div>
      </div>
      <div class="inputSection">
        <div class="inputItem" v-if="calc.winkelC">
          <label for="SeiteC">Seiten Länge C <br />(not required)</label>
          <input v-model="calc.seiteC" name="SeiteC" type="number" />
        </div>
        <div class="inputItem" v-if="!calc.winkelC">
          <label for="SeiteC">Seiten Länge C</label>
          <input v-model="calc.seiteC" name="SeiteC" type="number" />
        </div>
        <div class="inputItem" v-if="calc.seiteC">
          <label for="Winkelc">Winkel Gamma <br />(not required)</label>
          <input v-model="calc.winkelC" name="Winkelc" type="number" />
        </div>
        <div class="inputItem" v-if="!calc.seiteC">
          <label for="Winkelc">Winkel Gamma</label>
          <input v-model="calc.winkelC" name="Winkelc" type="number" />
        </div>
      </div>
    </div>
    <button class="submit" id="submit" @click="getValues">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {},
  computed: {
    calc() {
      return this.$store.state.calcData;
    },
  },
  methods:{
    getValues(){
      let data = this.$store.state.calcData
      console.log(data.seiteA, data.seiteB,data.seiteC,data.winkelA, data.winkelB, data.winkelC)

      let counter;
    data.forEach(element => {
      if(element != null){
        counter++;
      }
    });

    if(counter != 3){
      console.log("Error processing Input");
    }

      else if(data.seiteA != null && data.seiteB != null && data.seiteC != null){
        if(data.seiteA+data.seiteB<=data.seiteC || data.seiteA+data.seiteC<=data.seiteB ||data.seiteb+data.seiteC<=data.seiteA){
              //Nicht möglich
              console.log("not possible");
            }
            let winkel1 = 180/Math.PI*Math.acos((data.seiteB*data.seiteB-(-data.seiteC*data.seiteC)-data.seiteA*data.seiteA)/(2*data.seiteB*data.seiteC));
            let winkel2 = 180/Math.PI*Math.acos((data.seiteA*data.seiteA-(-data.seiteC*data.seiteC)-data.seiteB*data.seiteB)/(2*data.seiteA*data.seiteC));
            let winkel3 = 180/Math.PI*Math.acos((data.seiteA*data.seiteA-(-data.seiteB*data.seiteB)-data.seiteC*data.seiteC)/(2*data.seiteA*data.seiteB));
            
            this.$store.commit('updateWinkelA', winkel1);
            this.$store.commit('updateWinkelB', winkel2);
            this.$store.commit('updateWinkelC', winkel3);
          
      }
      else if(data.seiteA != null && data.seiteB != null || data.seiteA != null && data.seiteC || data.seiteB != null && data.seiteC){
        if(data.seiteA != null && data.seiteB){
          if(data.winkelA == 90){
             let kat1 = kathete1 * kathete1;
            let kat2 = kathete2 * kathete2;
            let a = kat1 + kat2;
            let sum = Math.sqrt(a);
            this.$store.commit('updateWinkelC', sum);
          }
          else if(data.winkelB == 90){

          }
          else if(data.winkelC == 90){

          }
        }

        if(data.seiteA != null && data.seiteC){
          if(data.winkelA == 90){

          }
          else if(data.winkelB == 90){

          }
          else if(data.winkelC == 90){

          }
        }

        if(data.seiteB != null && data.seiteC){
          if(data.winkelA == 90){
            
          }
          else if(data.winkelB == 90){

          }
          else if(data.winkelC == 90){

          }
          // Wänn alli if's failed dänn isch kein winkel 90 grad

        }
      }
    else if (data.winkelA != null && data.winkelB != null || data.winkelA != null && data.winkelC || data.winkelB != null && data.winkelC){
      if(data.winkelA != null && data.winkelB){
          if(data.seiteA != null){

          }
          else if(data.seiteB != null){

          }
          else if(data.seiteC != null){

          }
        }

        if(data.winkelA != null && data.winkelC){
          if(data.seiteA != null){

          }
          else if(data.seiteB != null){

          }
          else if(data.seiteC != null){

          }
        }

        if(data.winkelB != null && data.winkelC){
          if(data.seiteA != null){

          }
          else if(data.seiteB != null){

          }
          else if(data.seiteC != null){

          }
        }

    }
      else if(data.winkelA != null && data.winkelB != null && data.winkelC != null){
        // Gaht nöd
        console.log('Nicht möglich')

      }

    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.inputSection {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.inputItem {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
}
.submit {
  width: 8rem;
  height: 2rem;
  border-radius: 1rem;
  border-style: none;
  border: 1px solid black;
  background-color: #ffffff;
}
.submit:active {
  background-color: grey;
  color: #ffffff;
}
</style>
