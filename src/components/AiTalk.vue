<template>
  <div class="min-w-max outline-1">
    <!-- 用户输入框 -->
    <el-input
      v-model="HumanMessage"
      show-word-limit
      type="textarea"
      placeholder="请输入你想说的"
    />
    <!-- 聊天记录 -->
    <el-input
      class="min-h-full"
      readonly
      v-model="AIMeassage"
      rows="10"
      type="textarea"
    />
    <!-- 发送按钮 -->
    <el-button @click="submitEvent">发送</el-button>
  </div>
</template>

<script setup>
import { get } from '../../request/config'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 路由的引入
const router = useRouter()
const route = useRoute()
// AI信息
const HumanMessage = ref('')
const AIMeassage = ref('')

onMounted(() => {
  console.log(route)
})

const submitEvent = async () => {
  let res = await get(`/getAnswer/${HumanMessage.value}`)
  AIMeassage.value = res.data
  console.log(AIMeassage.value)
}

onMounted(() => {})
</script>
