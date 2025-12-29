<template>
  <div class="container">
    <h1>Nuxt 2 SSR Demo</h1>
    <PostTitle :title="message" />
    <button @click="refresh">Обновить на клиенте</button>
    <p class="hint">asyncData выполнен на сервере (SSR), кнопка — на клиенте</p>
  </div>
</template>

<script>
import { fetchPosts } from "~/api/posts.js";
import PostTitle from "~/components/PostTitle.vue";

export default {
  components: { PostTitle },
  async asyncData({ $axios }) {
    console.log("asyncData");
    console.log("SSR?", process.server);
    console.log("CLIENT?", process.client);

    try {
      const res = await fetchPosts($axios);
      console.log("res:", res);
      return {
        message: res && res[0] ? res[0].title : "Нет данных",
      };
    } catch (e) {
      return {
        message: "Ошибка загрузки данных (SSR)",
      };
    }
  },

  data() {
    return {
      message: "",
    };
  },

  methods: {
    async refresh() {
      console.log("refresh");
      console.log("SSR?", process.server);
      console.log("CLIENT?", process.client);

      try {
        const res = await fetchPosts(this.$axios);
        this.message = res && res[0] ? res[0].title : "Нет данных";
      } catch (e) {
        this.message = "Ошибка загрузки данных (Client)";
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
}
.hint {
  margin-top: 20px;
  color: #666;
}
</style>
