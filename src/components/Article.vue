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
        <time>
          {{ date }}
        </time>
        <a :href="article.url" 
          class="url">
          {{ url }}
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
  },
  computed: {
    date: function() {
      const date: Date = new Date(this.article.time * 1000);

      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);
      const day = String(date.getDate());
      const hour = String(date.getHours());
      const minute = String(date.getMinutes());

      if (Date.now() - date.getTime() > 1000 * 60 * 60 * 24) {
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      } else {
        return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
      }
    },
    url: function() {
      const urlObj: URL = new URL(this.article.url);

      if (urlObj.hostname.length > 22 || urlObj.hostname.startsWith("www")) {
        return urlObj.hostname
          .split(".")
          .reverse()
          .slice(0, 2)
          .reverse()
          .join(".");
      }

      return urlObj.hostname;
    }
  }
});
</script>

<style scoped lang="scss">
.article {
  list-style-type: none;
  margin: 0 0 20px -41px;

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
