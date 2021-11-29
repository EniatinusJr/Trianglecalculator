<template>
  <div>
    <article>
      <h2>Navigation</h2>
      <p>Responsive Dropdown Navigation Bar.</p>
      <p>
        Want to see how it's made?
        <a href="http://www.taniarascia.com/responsive-dropdown-navigation-bar/"
          >Read the tutorial!</a
        >
      </p>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Calculator from "../components/Calculator.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Calculator,
  },
};
</script>

<style scoped>
 article {
	 max-width: 1000px;
	 margin: 0 auto;
	 padding: 10px;
}
</style>