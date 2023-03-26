<template>
  <footer class="p-4 footer footer-center bg-base-300 text-base-content">
    <div>
      <p>Copyright © {{ state.year }} - All right reserved by MultiWebTools </p>
    </div>
  </footer>
</template>

<script>

import { reactive } from 'vue'
export default {
  props: {
  },
  setup(props) {
    const state = reactive({
      year: new Date().getFullYear(),
    })

    return { state }
  },
}
</script>
