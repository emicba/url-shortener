<template>
  <div class="error" v-if="data.error">{{ data.error }}</div>
  <form @submit.prevent="createUrl">
    <input v-model="data.slug" type="text" placeholder="enter a slug" />
    <input v-model="data.url" type="text" placeholder="enter a url" />
    <button type="submit">create</button>
  </form>
  <div class="created" v-if="data.created">
    <p>
      short url: <a target="_blank" :href="data.created">{{ data.created }}</a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

export const data = reactive<{ [key: string]: string | null }>({
  slug: null,
  url: null,
  error: null,
  created: null,
});

export const createUrl = async () => {
  data.error = null;
  const API_URL = process.env.VUE_APP_API_URL;
  try {
    const response = await fetch(`${API_URL}/url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug: data.slug || undefined,
        url: data.url || '',
      }),
    });
    if (response.ok) {
      const created = await response.json();
      data.created = `${API_URL}/${created.slug}`;
    } else {
      const res = await response.json();
      data.error = res.message;
    }
  } catch (error) {
    data.error = error.message;
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input {
  padding-bottom: 1rem;
  background: none;
  border: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  caret-color: #42b883;
  transition: 200ms ease-in-out;
}

input:focus {
  border-bottom-color: #42b883;
}

input::placeholder {
  color: #fff;
  opacity: 0.6;
}

input,
button {
  margin: 1rem;
  font-family: 'Trispace', sans-serif;
  outline: none;
}

button {
  cursor: pointer;
  font-size: 1rem;
  color: #121212;
  background: #42b883;
  border: none;
  padding: 0.5rem 1.5rem;
}

.error {
  background: #c0392b;
  text-align: center;
  margin: 0 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1.5rem;
}

.created {
  margin: 1rem 1rem;
}

.created p a {
  color: inherit;
}
</style>
