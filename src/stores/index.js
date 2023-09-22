import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useMenuStore = defineStore('Menu', {

  state: () => ({
    collapse: false
  })
})

export default useMenuStore