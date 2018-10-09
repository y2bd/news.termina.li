<template>
  <li class="article">
    <aside class="points">+{{ article.score }}</aside>
    <section>
      <h1>
        <a :href="article.url">
          {{ article.title }}
        </a>
      </h1>
      <div class="content">
        <time>{{ article.time }}</time>
        <a :href="article.url" 
          class="url">
          google.com
        </a>
        <a :href="`https://news.ycombinator.com/user?id=${article.by}`" 
          class="author">
          {{ article.by }}
        </a>
      </div>
    </section>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import t from "../utils/objectType";
import { Article } from "../api/hn";

export default Vue.extend({
  name: "Article",
  props: {
    article: t<Article>()
  }
});
</script>

<style scoped lang="scss">
.article {
  list-style-type: none;
  margin: 0 0 20px;

  .points,
  .content {
    color: #999;
  }

  .points {
    float: left;
    margin-left: -52px;
    width: 44px;

    text-align: right;
  }

  h1 {
    margin: 0 0 4px;
  }
}
</style>
