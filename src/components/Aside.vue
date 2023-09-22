<template>
  <el-col :span="12">
    <el-menu
      active-text-color="#ffd04b"
      :collapse="Menu.collapse"
      :router="true"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <div
        class="h-16 flex items-center justify-center text-white font-bold"
        :class="{ 'text-sm p-2': Menu.collapse }"
      >
        {{ Menu.collapse ? '江岭西一号' : '江岭西一号小区管理系统' }}
      </div>

      <el-sub-menu
        :index="index"
        v-for="(item, index) in MenuList"
        :key="item.name"
      >
        <template #title>
          <el-icon> <component :is="item.icon" /> </el-icon>
          <span>{{ item.title }}</span>
        </template>

        <el-menu-item :index="child.index" v-for="child in item.children">{{
          child.name
        }}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>

<script lang="ts" setup>
defineProps({
  MenuList: Object,
})

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import useMenuStore from '../stores/index'

const Menu = useMenuStore()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 15vw;
  min-height: 100vh;
}
.el-menu--collapse {
  min-height: 100vh;
}
</style>
