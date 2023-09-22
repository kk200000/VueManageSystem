<template>
  <div>
    <!-- 文件上传 -->
    <el-upload
      v-model:file-list="fileList"
      drag
      multiple
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :on-change="handleChange"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖拽到此处或 <em>点击我上传</em></div>
      <template #tip>
        <div class="el-upload__tip">请上传文本文件给AI识别</div>
      </template>
    </el-upload>

    <el-button class="ml-3" @click="submitUpload"> 上传解析 </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadInstance, UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'mht.txt',
    url: 'http://104.192.81.91/static/mht.txt',
  },
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = fileList.value.slice(-3)
}
const uploadRef = ref<UploadInstance>()
const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
