<template>
  <div>
    <!-- 文件上传 -->
    <el-upload
      v-model:file-list="fileList"
      drag
      multiple
      class="upload-demo"
      name="file"
      :on-remove="handleRemove"
      action="http://127.0.0.1:8080/UpLoadFile"
      :on-success="handleSuccess"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖拽到此处或 <em>点击我上传</em></div>
      <template #tip>
        <div class="el-upload__tip">请上传文本文件给AI识别然后开始提问</div>
      </template>
    </el-upload>

    <!-- 问题 -->
    <div class="mt-4" v-if="fileList.length > 0">
      <el-input
        v-model="query"
        placeholder="请输入关于此文档的问题..."
        class="input-with-select"
      >
        <template #append>
          <el-button @click="submitUpload"> {{ btnStatus }} </el-button>
        </template>
      </el-input>
    </div>

    <el-text class="mt-10 block mx-1" type="primary">{{ ana_res }}</el-text>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { get, post } from '../../request/config.js'
import {
  ElMessage,
  type UploadFile,
  type UploadFiles,
  type UploadInstance,
  type UploadProps,
  type UploadUserFile,
} from 'element-plus'
const query = ref('') // 用户的提问
const btnStatus = ref('开始解析') // 按钮的状态
const ana_res = ref('') // 分析的结果
const fileList = ref<UploadUserFile[]>([
  // {
  //   name: 'mht.txt',
  //   url: 'http://104.192.81.91/static/mht.txt',
  // },
])
// 成功方法
const handleSuccess: UploadProps['onSuccess'] = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log(response) // 这里显示后端返回Response
  console.log(fileList.value)
}
const handleRemove: UploadProps['onRemove'] = (file: UploadFile) => {
  ElMessage.success(`${file.name}已删除成功`)
}

const uploadRef = ref<UploadInstance>()
const submitUpload = () => {
  uploadRef.value?.submit()
  btnStatus.value = '解析中...'
  ElMessage.success({
    message: '解析文件中，结果稍后会在下方显示',
    center: true,
  })
  get(`/anylysData/ + ${query.value}`)
    .then((result) => {
      console.log(result?.data)
      ana_res.value = result?.data
      btnStatus.value = '解析完成'
    })
    .catch((err) => {})
}

onMounted(() => {
  get('/getUploadList')
    .then((result) => {
      console.log(result)
      fileList.value = result?.data
    })
    .catch((err) => {
      ElMessage.error('获取文件列表失败')
      console.log(err)
    })
})
</script>
