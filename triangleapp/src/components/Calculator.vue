<template>
  <div>
    <div class="calculator">
      <div class="inputSection">
        <div class="inputItem">
          <label for="SeiteA">Seiten Länge a <br /></label>
          <input v-model="calc.seiteA" name="SeiteA" type="number" />
        </div>
        <div class="inputItem">
          <label for="Winkela">Winkel Alpha <br /></label>
          <input v-model="calc.winkelA" name="Winkela" type="number" />
        </div>
      </div>
      <div class="inputSection">
        <div class="inputItem">
          <label for="SeiteB">Seiten Länge b <br /></label>
          <input v-model="calc.seiteB" name="SeiteB" type="number" />
        </div>
        <div class="inputItem">
          <label for="Winkelb">Winkel Beta <br /></label>
          <input v-model="calc.winkelB" name="Winkelb" type="number" />
        </div>
      </div>
      <div class="inputSection">
        <div class="inputItem">
          <label for="SeiteC">Seiten Länge c <br /></label>
          <input v-model="calc.seiteC" name="SeiteC" type="number" />
        </div>
        <div class="inputItem">
          <label for="Winkelc">Winkel Gamma <br /></label>
          <input v-model="calc.winkelC" name="Winkelc" type="number" />
        </div>
      </div>
    </div>
    <button class="submit" id="submit" @click="getValues">Submit</button
    ><br /><br />
    <button class="submit" id="submit" @click="clearValues">Clear</button>
    <br /><br />
    <div class="triangle">
      <img class="image" src="../assets/Dreieck16_2.png" alt="lolz" />
    </div>
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
  methods: {
    clearValues() {
      this.$store.commit("updateSeiteA", null);
      this.$store.commit("updateSeiteB", null);
      this.$store.commit("updateSeiteC", null);
      this.$store.commit("updateWinkelA", null);
      this.$store.commit("updateWinkelB", null);
      this.$store.commit("updateWinkelC", null);
    },
    getValues() {
      let data = this.$store.state.calcData;
      console.log(
        data.seiteA,
        data.seiteB,
        data.seiteC,
        data.winkelA,
        data.winkelB,
        data.winkelC
      );

      let counter = 0;
      Object.values(data).forEach((element) => {
        if (element != null) {
          counter++;
          console.log(counter);
        }
      });

      if (counter != 3) {
        console.log("Error processing Input");
      } else if (
        data.seiteA != null &&
        data.seiteB != null &&
        data.seiteC != null
      ) {
        if (
          data.seiteA + data.seiteB <= data.seiteC ||
          data.seiteA + data.seiteC <= data.seiteB ||
          data.seiteb + data.seiteC <= data.seiteA
        ) {
          //Nicht möglich
          console.log("not possible");
        }
        let winkel1 =
          (180 / Math.PI) *
          Math.acos(
            (data.seiteB * data.seiteB -
              -data.seiteC * data.seiteC -
              data.seiteA * data.seiteA) /
              (2 * data.seiteB * data.seiteC)
          );
        let winkel2 =
          (180 / Math.PI) *
          Math.acos(
            (data.seiteA * data.seiteA -
              -data.seiteC * data.seiteC -
              data.seiteB * data.seiteB) /
              (2 * data.seiteA * data.seiteC)
          );
        let winkel3 =
          (180 / Math.PI) *
          Math.acos(
            (data.seiteA * data.seiteA -
              -data.seiteB * data.seiteB -
              data.seiteC * data.seiteC) /
              (2 * data.seiteA * data.seiteB)
          );

        this.$store.commit("updateWinkelA", winkel1);
        this.$store.commit("updateWinkelB", winkel2);
        this.$store.commit("updateWinkelC", winkel3);
      } else if (
        (data.seiteA != null && data.seiteB != null) ||
        (data.seiteA != null && data.seiteC) ||
        (data.seiteB != null && data.seiteC)
      ) {
        if (data.seiteA != null && data.seiteB != null) {
          if (data.winkelA == 90) {
            let hyp = data.seiteA * data.seiteA;
            let kat = data.seiteB * data.seiteB;
            let a = hyp - kat;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteC", sum);
          } else if (data.winkelB == 90) {
            let hyp = data.seiteB * data.seiteB;
            let kat = data.seiteA * data.seiteA;
            let a = hyp - kat;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteC", sum);
          } else if (data.winkelC == 90) {
            let kat1 = data.seiteA * data.seiteA;
            let kat2 = data.seiteB * data.seiteB;
            let a = kat1 + kat2;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteC", sum);
          }
        } else if (data.seiteA != null && data.seiteC != null) {
          if (data.winkelA == 90) {
            let hyp = data.seiteA * data.seiteA;
            let kat = data.seiteC * data.seite;
            let a = hyp - kat;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteB", sum);
          } else if (data.winkelB == 90) {
            let kat1 = data.seiteA * data.seiteA;
            let kat2 = data.seiteC * data.seiteC;
            let a = kat1 + kat2;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteB", sum);
          } else if (data.winkelC == 90) {
            let hyp = data.seiteC * data.seiteC;
            let kat = data.seiteA * data.seiteA;
            let a = hyp - kat;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteB", sum);
          }
        } else if (data.seiteB != null && data.seiteC != null) {
          if (data.winkelA == 90) {
            let kat1 = data.seiteB * data.seiteB;
            let kat2 = data.seiteC * data.seiteC;
            let a = kat1 + kat2;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteA", sum);
          } else if (data.winkelB == 90) {
            let hyp = data.seiteB * data.seiteB;
            let kat = data.seiteC * data.seiteC;
            let a = hyp - kat;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteA", sum);
          } else if (data.winkelC == 90) {
            let hyp = data.seiteC * data.seiteC;
            let kat = data.seiteB * data.seiteB;
            let a = hyp - kat;
            let sum = Math.sqrt(a);
            this.$store.commit("updateSeiteA", sum);
          }

          // Wänn alli if's failed dänn isch kein winkel 90 grad
        }
        // Jetzte wo mer 3 Site hend wieder mit cosinus de rest usrechne
        if (data.seiteA != null && data.seiteB != null && data.seiteC != null) {
          if (
            data.seiteA + data.seiteB <= data.seiteC ||
            data.seiteA + data.seiteC <= data.seiteB ||
            data.seiteb + data.seiteC <= data.seiteA
          ) {
            //Nicht möglich
            console.log("not possible");
          }
          let winkel1 =
            (180 / Math.PI) *
            Math.acos(
              (data.seiteB * data.seiteB -
                -data.seiteC * data.seiteC -
                data.seiteA * data.seiteA) /
                (2 * data.seiteB * data.seiteC)
            );
          let winkel2 =
            (180 / Math.PI) *
            Math.acos(
              (data.seiteA * data.seiteA -
                -data.seiteC * data.seiteC -
                data.seiteB * data.seiteB) /
                (2 * data.seiteA * data.seiteC)
            );
          let winkel3 =
            (180 / Math.PI) *
            Math.acos(
              (data.seiteA * data.seiteA -
                -data.seiteB * data.seiteB -
                data.seiteC * data.seiteC) /
                (2 * data.seiteA * data.seiteB)
            );

          this.$store.commit("updateWinkelA", winkel1);
          this.$store.commit("updateWinkelB", winkel2);
          this.$store.commit("updateWinkelC", winkel3);
        }
      } else if (
        (data.winkelA != null && data.winkelB != null) ||
        (data.winkelA != null && data.winkelC) ||
        (data.winkelB != null && data.winkelC)
      ) {
        if (data.winkelA != null && data.winkelB) {
          if (data.seiteA != null) {
          } else if (data.seiteB != null) {
          } else if (data.seiteC != null) {
          }
        }

        if (data.winkelA != null && data.winkelC) {
          if (data.seiteA != null) {
          } else if (data.seiteB != null) {
          } else if (data.seiteC != null) {
          }
        }

        if (data.winkelB != null && data.winkelC) {
          if (data.seiteA != null) {
          } else if (data.seiteB != null) {
          } else if (data.seiteC != null) {
          }
        }
      } else if (
        data.winkelA != null &&
        data.winkelB != null &&
        data.winkelC != null
      ) {
        // Gaht nöd
        console.log("Nicht möglich");
      }
    },
  },
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

.image {
  width: 25rem;
  height: 16rem;
}
</style>
