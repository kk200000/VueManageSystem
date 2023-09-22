<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter() // 路由加载
import { reactive } from 'vue'
import MainBody from './components/MainBody.vue'
import Aside from './components/Aside.vue'
import Header from './components/header.vue'

const MenuList = reactive([
  {
    title: '公共功能',
    icon: 'Umbrella',
    children: [
      { name: '小区简介', index: '/' },
      { name: 'AI问答', index: '/AiTalk' },
      { name: '国外新闻', index: '/Twitter' },
      { name: '文档解析(GPT)', index: '/AiUpload' },
    ],
  },
  {
    title: '互帮互助',
    icon: 'Location',
    children: [
      { name: '跑腿办事', index: '/HelpMe' },

      { name: '电器维修', index: '/Repair' },
    ],
  },
])
// 判断移动端还PC端
const _isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return flag
}

// 不同端跳转不同的路由
// onMounted(() => {
//   if (_isMobile()) {
//     console.log('检测到是手机端')
//     router.push('/moblie')
//   } else {
//     console.log('检测到是PC端')
//     router.push('/pc')
//   }
// })
</script>

<!-- 网页端 -->
<template>
  <el-container>
    <!-- 左侧菜单 -->
    <el-aside width="auto">
      <Aside :MenuList="MenuList"></Aside>
    </el-aside>

    <el-container>
      <el-header height="7vh">
        <Header></Header>
      </el-header>
      <el-main>
        <MainBody />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
.el-header {
  padding: 0;
}
.el-menu {
  border-right: 0px solid black;
}
</style>
