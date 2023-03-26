<template>
  <Navbar></Navbar>
  <slot />
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
const components = { Navbar, Footer }
export default { components }
</script>



