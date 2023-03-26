<template>
    <div class="grid grid-cols-1 p-4 space-y-2 md:space-x-4 md:grid-cols-2 md:space-y-0">
        <div class="flex flex-col">
            <textarea v-model="state.input"
                class="p-2 border-2 border-gray-300 rounded-md shadow-sm h-72 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="10" placeholder="Write or paste your text here."></textarea>
            <div class="flex justify-end mt-2">
                <button @click="copyToClipboard"
                    class="p-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-800">
                    <img src="../../assets/clippy.svg" alt="Copy to clipboard" class="w-6 h-6">
                </button>
                <button @click="clearText" type="button"
                    class="p-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600">Clear
                    text</button>
            </div>
        </div>
        <div class="flex flex-col ">
            <ul class="p-2 bg-white border-2 rounded-md shadow-sm ">
                <li class="flex items-center justify-between py-2 border-b border-gray-300">
                    <span>Characters</span>
                    <span class="px-2 py-1 text-white bg-blue-500 rounded-md">{{ characters }}</span>
                </li>
                <li class="flex items-center justify-between py-2 border-b border-gray-300">
                    <span>Words</span>
                    <span class="px-2 py-1 text-white bg-blue-500 rounded-md">{{ words }}</span>
                </li>
                <li class="flex items-center justify-between py-2 border-b border-gray-300">
                    <span>Sentences</span>
                    <span class="px-2 py-1 text-white bg-blue-500 rounded-md">{{ sentences }}</span>
                </li>
                <li class="flex items-center justify-between py-2 border-b border-gray-300">
                    <span>Paragraphs</span>
                    <span class="px-2 py-1 text-white bg-blue-500 rounded-md">{{ paragraphs }}</span>
                </li>
                <li class="flex items-center justify-between py-2 border-b border-gray-300">
                    <span>Vowels</span>
                    <span class="px-2 py-1 text-white bg-blue-500 rounded-md">{{ vowels }}</span>
                </li>
                <li class="flex items-center justify-between py-2">
                    <span>Consonants</span>
                    <span class="px-2 py-1 text-white bg-blue-500 rounded-md">{{ consonants }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>

import { computed, reactive } from 'vue';


import { countCharacters, countWords, countParagraphs, countSentences, countConsonants, countVowels } from './helper'





export default {
    props: {
        title: String,
        description: String,
        componentClass: { type: String, default: 'bg-gray-400' },
    },
    setup(props) {

        const copyToClipboard = () => {
            navigator.clipboard.writeText(state.input)
        }

        const clearText = () => {
            state.input = ''
        }

        const state = reactive({ input: '', characters: 0 })
        const characters = computed(() => countCharacters(state.input))
        const words = computed(() => countWords(state.input))
        const paragraphs = computed(() => countParagraphs(state.input))
        const sentences = computed(() => countSentences(state.input))
        const vowels = computed(() => countVowels(state.input))
        const consonants = computed(() => countConsonants(state.input))

        return {
            state,
            characters,
            words,
            paragraphs,
            sentences,
            vowels,
            consonants,
            copyToClipboard,
            clearText
        }
    },
}
</script>
  