<template>
  <Hero :title="state.tool.pageTitle" :description="state.tool.slogan" :componentClass="['bg-cyan-500']"></Hero>
  <TextAnalyzer></TextAnalyzer>
  <PageInfo v-for="extra of state.tool.extra" :key="extra.title" :extra="extra"></PageInfo>
</template>

<script>
import { reactive } from 'vue'
import Hero from '../../components/Hero.vue'
import PageInfo from '../../components/PageInfo.vue'
import tools from '../../tools'
import TextAnalyzer from '../../components/text-analyzer/TextAnalyzer.vue'
const name = 'text-analyzer'

export default {
  name,
  components: { Hero, TextAnalyzer, PageInfo },
  setup(props) {
    const state = reactive({ tool: tools.find(({ slug }) => slug === name) })

    return {
      state,
    }
  },
}
</script>

<style>
h1,
p {}
</style>
