// api/posts.js

export const fetchPosts = async ($axios) => {
    try {
        return await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    } catch (error) {
        console.error('Ошибка при получении постов:', error)
        return null
    }
}

