<template>
  <!-- 聊天室 -->
  <div class="chat bg-[#fff] min-h-full">
    <!-- 聊天导航栏 -->
    <div class="chat-nav">
      <div class="backArrow">
        <!-- <el-icon size="60"><ArrowLeft /></el-icon> -->
      </div>
      <div class="chat-left-top text-center">
        <span class="chat-left-top-title-num">{{ User2name }}</span>
      </div>
    </div>
    <!-- 聊天内容 -->
    <div class="chat-content">
      <el-scrollbar height="80vh">
        <!-- 遍历聊天内容 -->
        <div
          class="chat-content-item flex-1 overflow-y-auto"
          v-for="(item, index) in messageList"
          :key="index"
        >
          <!-- 别人发的信息 左侧显示 -->
          <div
            class="chatm chat-content-item-left max-h-10"
            v-if="item.name != 'me'"
          >
            <div class="flex">
              <el-avatar
                class="chat-content-item-left-avatar w-12 h-12"
                :src="item.avatar"
              >
              </el-avatar>
              <div class="left-message self-center ml-6">{{ item.msg }}</div>
            </div>
          </div>

          <!-- 自己发的信息 右侧显示 -->
          <div
            class="chatm chat-content-item-right max-h-10"
            v-if="item.name == 'me'"
          >
            <div class="flex justify-end">
              <div class="right-message self-center mr-6">{{ item.msg }}</div>
              <el-avatar
                class="chat-content-item-right-avatar w-12 h-12"
                :src="item.avatar"
              >
              </el-avatar>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 发送 -->
    <div class="relative bottom-0 mx-5">
      <el-input v-model="message" @keyup.enter="send">
        <template #append>
          <el-button @click="send">发送</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { io } from 'socket.io-client'
import { ElLoading } from 'element-plus'
const User2name = ref('张三') // 获取对方用户名
const message = ref('')
const myavatar = ref(
  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
)

let socket = null
const messageList = ref([
  {
    name: 'Zhangsan',
    msg: '我是张三,你好啊',
    avatar:
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  },
  {
    name: 'me',
    msg: '你好啊',
    avatar:
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  },
])

// 发送按钮
const send = () => {
  // 如果输入的聊天内容为空，则 return 出去
  if (!message.value) return

  // 向服务器发送消息
  socket.emit('send', message.value)
  // 将用户填写的消息存储到 list 数组中
  messageList.value.push({
    name: 'me',
    msg: message.value,
    avatar: myavatar.value,
  })
  // 清空文本框中的消息内容
  message.value = ''
  ElMessage.success('发送成功')
}

// 开始时连接websocket
onMounted(() => {
  // 创建客户端 websocket 的实例
  try {
    let loadingInstance = ElLoading.service({
      fullscreen: true,
      text: '正在加载中...',
    }) // 处理加载动画

    socket = io(import.meta.env.VITE_BASE_WS, {
      query: {},
      transports: ['websocket', 'polling'],
    })

    // 建立连接的事件
    socket.on('connect', () => {
      ElMessage.success('会话连接成功!')
      loadingInstance.close()
    })

    // 与AI聊天
    socket.on('chatToGPT', (msg) => {
      messageList.value.push({
        name: 'GPT',
        msg: msg.data,
        avatar: myavatar.value,
      })
      console.log(messageList.value)
    })

    // 关闭连接的事件
    socket.on('disconnect', () => {
      ElMessage.error('会话连接失败')
      console.log('disconnect: websocket 连接关闭！')
    })
  } catch (error) {
    ElMessage.error('会话连接失败,请联系后端人员')
  }
})
</script>

<style scoped>
.chatm {
  margin-bottom: 5rem;
  /* background: #4d74ae; */
  /* width: 100%; */
}
</style>
