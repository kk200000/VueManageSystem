<template>
  <div>
    <!-- 左边列 -->
    <el-row :gutter="50">
      <el-col :span="8">
        <!-- 登录状态卡片(左上角1) -->
        <el-card shadow="hover" class="min-w-fit">
          <div class="userCard flex">
            <!-- 头像 -->
            <el-avatar
              class="mr-8"
              :size="100"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <!-- 用户信息 -->
            <div class="userInfo self-center flex-shrink-0">
              <div class="userName text-xl">
                {{ User.userInfo.userName }}
              </div>
              <div class="userRole text-gray-500">
                {{ User.userInfo.userRole }}
              </div>
            </div>
          </div>

          <!-- 分割线 -->
          <el-divider></el-divider>

          <!-- 登录地点和时间 -->
          <div class="mt-4">
            <div class="LoginTime">
              <span>上次登录时间：</span>
              {{ User.userInfo.lastLoginTime }}
            </div>

            <div class="LoginLocation">
              <span>上次登录地点：</span>{{ User.userInfo.LoginLocation }}
            </div>
          </div>
        </el-card>

        <!-- 水费状态卡片（左下角2） -->
        <el-card shadow="hover" class="mt-16 min-w-fit">
          <template #header>
            <div class="card-header flex justify-between">
              <span>{{ isWater ? '水费详情' : '电费详情' }}</span>
              <el-button class="text-right" text @click="isWater = !isWater">
                {{ isWater ? '看看电费' : '看看水费'
                }}<el-icon class="el-icon--right"><ArrowRight /></el-icon
              ></el-button>
            </div>
          </template>
          <el-table
            :data="isWater ? Fee.waterFee : Fee.ElectricFee"
            stripe
            style="width: 100%"
            highlight-current-row
          >
            <el-table-column prop="date" label="日期" width="150" />
            <el-table-column prop="Room" label="房号" width="150" />
            <el-table-column prop="Fee" label="总计(单位：元)" width="auto" />
          </el-table>
        </el-card>
      </el-col>

      <!-- 右边列 -->
      <el-col :span="16">
        <!-- 6个卡片 -->
        <div class="flex flex-wrap justify-around">
          <el-card
            :body-style="{
              display: 'flex',
              padding: '0',
            }"
            shadow="hover"
            class="w-[32%] mb-[20px]"
            v-for="item in CardList"
            :key="item.title"
          >
            <el-icon
              class="h-[80px] w-[80px] leading-[30px] text-[#fff]"
              :style="{ background: item.color }"
              size="30"
            >
              <component :is="item.icon"></component>
            </el-icon>
            <div class="flex flex-col self-center ml-[15px]">
              <p class="text-[30px] mb-2 leading-[40px] h-[30px]">
                <span>￥{{ item.value }}</span>
              </p>
              <p class="text-[#999] text-center">{{ item.title }}</p>
            </div>
          </el-card>
        </div>

        <!-- 下面图表 -->
        <div id="myChart" class="w-[600px] h-[400px]"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import useUserStore from '@/stores/user'
import { onMounted, reactive, ref } from 'vue'
import useFeeStore from '@/stores/fee'
// 引入图标
import { ArrowRight } from '@element-plus/icons-vue'
// 引入echarts
import * as echarts from 'echarts'
// 水电费
const Fee = useFeeStore()
const isWater = ref(true) // 用于控制水电费查看

// 当页面dom加载完毕后开始初始化echats
onMounted(() => {
  var myChart = echarts.init(document.getElementById('myChart'))
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  })
})

// 右侧大楼收入控制
const CardList = reactive([
  { title: '今日用水量', icon: 'SuccessFilled', value: 100, color: '#22B8CC' },
  { title: '今日用电量', icon: 'SuccessFilled', value: 100, color: '#FFBC7D' },
  {
    title: '本周抽水次数',
    icon: 'SuccessFilled',
    value: 100,
    color: '#51ADF3',
  },
  { title: '本月收入', icon: 'SuccessFilled', value: 100, color: '#22B8CC' },
  { title: '跑腿订单量', icon: 'SuccessFilled', value: 100, color: '#FFBC7D' },
  {
    title: '已完成订单量',
    icon: 'SuccessFilled',
    value: 100,
    color: '#51ADF3',
  },
])
const User = useUserStore()
</script>

<style scoped>
body {
  background: #333;
}
</style>
