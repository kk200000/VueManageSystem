<template>
  <div class="container">接收到的值：{{ sondata }}</div>

  <button @click="changeFather('儿子更改了父亲的值')">我要父组件的值</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 子改变父发送
let Emitfn = defineEmits(['handler'])

// 父子传值接收
defineProps({ sondata: String })

const changeFather = (value) => {
  Emitfn('handler', '儿子更改了父亲的值')
}
</script>
