<template>
  <div class="header-contianer h-16 flex items-center justify-between">
    <!-- 左侧缩放 -->
    <div>
      <el-button @click="changeAside">
        <el-icon size="mini"><Menu></Menu></el-icon>
      </el-button>
      <!-- 面包屑区域 -->
      <span class="text-sm text-white mx-3">首页</span>
    </div>

    <!-- 用户头像 -->
    <div>
      <el-dropdown>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>充值</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue'
import useMenuStore from '../stores/index'

const Menucollapse = useMenuStore()
const changeAside = function () {
  // console.log(1)
  Menucollapse.collapse = !Menucollapse.collapse
}
</script>

<style lang="less">
.header-contianer {
  padding: 0 2rem;
  background: #333;
}
</style>
