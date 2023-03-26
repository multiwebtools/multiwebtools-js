<template>
  <div class="p-4 my-8 text-center md:px-32">
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <div class="mb-4">
        <h2 class="text-2xl font-bold">
          {{ extra.title }}</h2>
        <p v-for="(text, index) of extra.texts" :key="index" class="mt-4" v-html="text"></p>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    extra: Object
  },
  setup(props) {
  },
}
</script>

<style>
a {
  color: blue;
}
</style>
