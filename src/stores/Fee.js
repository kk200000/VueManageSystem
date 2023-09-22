

import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import * as dayjs from 'dayjs'

const useFeeStore = defineStore('Fee', () => {
  const waterFee = reactive([
    {
      date: '2016-05',
      Room: '802',
      Fee: '62.56',
    },
    {
      date: '2016-05',
      Room: '801',
      Fee: '66.56',
    },
    {
      date: '2016-05',
      Room: '702',
      Fee: '62.56',
    },
    {
      date: '2016-05',
      Room: '602',
      Fee: '53.56',
    },
  ])

  // 处理后的时间
  // const LoginTime = computed(() => {
  //   return dayjs(lastLoginTime.value).format('YYYY年MM月DD日')
  //   // return dayjs(lastLoginTime.value, "YYYY年MM月DD日")
  // })

  const ElectricFee = reactive([
    {
      date: '2016-05',
      Room: '802',
      Fee: '123.25',
    },
    {
      date: '2016-05',
      Room: '802',
      Fee: '165.56',
    },
    {
      date: '2016-05',
      Room: '802',
      Fee: '165.56',
    },
    {
      date: '2016-05',
      Room: '802',
      Fee: '165.56',
    },
  ])





  return { waterFee, ElectricFee }
})

export default useFeeStore