<template>
  <header>
    <Logo />
  </header>
  <main>
    <Form />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import Form from '@/components/Form.vue';

export default defineComponent({
  name: 'App',
  components: {
    Logo,
    Form,
  },
});
</script>

<style scoped>
header {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
}

main {
  color: #ffffff;
}
</style>
