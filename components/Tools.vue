<template>
  <div class="grid grid-cols-1 mt-4 4 md:grid-cols-3">
    <div v-for="tool of state.tools" :key="tool.id" class="flex items-stretch px-4">
      <div class="relative flex flex-col min-w-0 mb-3 break-words bg-white border border-gray-900 rounded border-1">
        <div class="px-6 py-3 mb-0 text-center text-gray-900 bg-transparent bg-gray-200 border-gray-300 border-b-1">
          <a :href="tool.url" class="text-2xl stretched-link">
            <h2>{{ tool.title }}</h2>
          </a>
        </div>
        <div class="flex-auto p-6 bg-gray-100">
          <p class="mb-0" v-html="tool.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import tools from '../tools'
export default {
  setup(props) {
    const state = reactive({ tools })
    return {
      state,
    }
  },
}
</script>
