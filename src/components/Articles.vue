<template>
  <div class="articles">
    <transition-group name="article-list" tag="ul">
      <ArticlePost
        v-for="article in articles"
        :key="article.time"
        :article="article" />
    </transition-group>
  </div>
</template>

<style lang="scss">
.article-list-move {
  transition: transform 0.1s;
}
.article-list-item {
  transition: all 1s;
}
.article-list-enter,
.article-list-leave-to {
  opacity: 0;
}
</style>


<script lang="ts">
import Vue from "vue";

import Article from "./Article.vue";
import { Article as ArticleData, getBestArticles } from "../api/hn";
import { save, load } from "../utils/storage";

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
    this.articles = load("articles", [] as ArticleData[]);
    this.articles = await getBestArticles();
    save("articles", this.articles);
  }
});
</script>
