<template>
  <div class="articles">
    <ArticlePost
      v-for="article in articles"
      :key="article.time"
      :article="article" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Article from "./Article.vue";
import { Article as ArticleData, getBestArticles } from "../api/hn";

interface ArticlesData {
  articles: ArticleData[];
}

export default Vue.extend({
  name: "Articles",
  components: {
    ArticlePost: Article
  },
  data: function(): ArticlesData {
    return {
      articles: []
    };
  },

  created: async function() {
    this.articles = await getBestArticles();
  }
});
</script>
