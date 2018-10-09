<template>
  <div class="home">
    <header>
      <h1>news.termina.li</h1>
    </header>
    <articles />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Articles from "../components/Articles.vue";

export default Vue.extend({
  components: {
    Articles
  }
});
</script>


<style lang="scss">
header {
  margin: 44px 0 32px;
}
</style>
