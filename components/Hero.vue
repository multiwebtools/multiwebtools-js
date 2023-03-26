<template>
  <div class="pt-4 hero" :class="[componentClass]">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="text-4xl font-bold text-gray-900">{{ title }}</h1>
        <p class="py-6 text-xl text-white">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    description: String,
    componentClass: { type: Array, default: ['bg-gray-400'] },
  },
  setup(props) {
  },
}
</script>
