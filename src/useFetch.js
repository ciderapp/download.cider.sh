import { ref } from 'vue'


/**
 * @description: useFetch
 * @param {string} url
 * @return: {object} data
 */
export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    fetch(url)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))
    return { data, error }
}