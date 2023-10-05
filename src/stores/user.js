import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { dayjs } from 'element-plus'

const useUserStore = defineStore('User', () => {
  const userName = ref('Admin')
  const passWord = ref('123456')
  const userRole = ref('管理员')
  const lastLoginTime = ref('2021-12-12')
  const LoginLocation = ref('北京')
  // 处理后的时间
  const LoginTime = computed(() => {
    return dayjs(lastLoginTime.value).format('YYYY年MM月DD日')
    // return lastLoginTime.value
  })

  const userInfo = reactive({
    userName,
    passWord,
    userRole,
    lastLoginTime: LoginTime,
    LoginLocation
  })





  return { userInfo }
})

export default useUserStore