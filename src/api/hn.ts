import * as firebase from "firebase";

export interface Article {
  readonly score: number;
  readonly time: number;

  readonly title: string;
  readonly url: string;
  readonly by: string;
}

export function getBestArticles() {
  return getInstance()
    .ref(endpoints.bestStories)
    .once("value")
    .then(processArticleIds)
    .then(fetchArticles)
    .then(filterArticles);
}

const endpoints = {
  bestStories: "v0/topstories",
  story: "v0/item/"
};

let isInitizalized = false;

const getInstance = (): firebase.database.Database => {
  if (isInitizalized) {
    return firebase.app().database();
  } else {
    firebase.initializeApp({
      appName: "news.termina.li",
      databaseURL: "https://hacker-news.firebaseio.com/"
    });

    isInitizalized = true;
    return getInstance();
  }
};

const processArticleIds = (
  snapshot: firebase.database.DataSnapshot
): number[] => {
  // get the initial list of article ids
  if (snapshot.val() != null) {
    return snapshot.val();
  } else {
    return [];
  }
};

const fetchArticles = (articleIds: number[]) => {
  // fetch details for every single article
  return Promise.all(
    articleIds.map(articleId =>
      getInstance()
        .ref(endpoints.story + articleId)
        .once("value")
        .then(snapshot => snapshot.val() as Article | undefined)
    )
  );
};

const filterArticles = (articles: (Article | undefined)[]) => {
  // filter out articles that couldn't be fetcheds
  return articles.filter(article => !!article) as Article[];
};
