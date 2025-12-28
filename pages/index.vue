<template>
  <div class="container">
    <h1>Nuxt 2 SSR Demo</h1>
    <p><strong>Сообщение с сервера:</strong> {{ message }}</p>
    <button @click="refresh">Обновить на клиенте</button>
    <p class="hint">
      asyncData выполнен на сервере (SSR), кнопка — на клиенте
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log("asyncData");
    console.log("SSR?", process.server);
    console.log("CLIENT?", process.client);

    try {
      const res = await $axios.$get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log('res:',res)
      return {
        message: res[0].title,
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
        const res = await this.$axios.$get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        this.message = res.title;
      } catch (e) {
        this.message = "Ошибка загрузки данных (Client)";
      }
    },
  },
};

</script>

<style>
.container { max-width: 600px; margin: 40px auto; font-family: sans-serif; }
.hint { margin-top: 20px; color: #666; }
</style>
