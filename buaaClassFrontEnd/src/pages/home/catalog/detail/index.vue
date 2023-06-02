<template>
  <div class="detail-base">
    <t-card title="基本信息" :bordered="false">
      <div class="info-block">
        <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>课程名称</h1>
            <span>{{ item.name }}</span>
          </div> 
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>课程代码</h1>
            <span>{{ item.id }}</span>
          </div> 
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>课程类别</h1>
            <span>{{ item.type}}</span>
          </div> 
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>开课学院</h1>
            <span>{{ item.department}}</span>
          </div>
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>学分</h1>
            <span>{{ item.credit}}</span>
          </div> 
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>任课教师</h1>
            <span>{{ item.teacher_info}}</span>
          </div> 
        </div>
    </t-card>
  </div>
</template>

<script lang="ts">
import { create } from 'lodash';
export default {
  // name: 'DetailBase',
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getCourseById } from '@/api/catalog';
import { useRoute, useRouter } from 'vue-router';
import { getParams } from 'tdesign-vue-next/es/utils/render-tnode';
import axios from 'axios';
const route = useRoute();
const pagination = ref({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});
const data = ref([]);
const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  try {
    let query = route.query;
    const { list } = await getCourseById(query);
    data.value = list;
    pagination.value = {
      ...pagination.value,
      total: list.length,
    };
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};
onMounted(() => {
  fetchData();
});



const BASE_INFO_DATA = [
  {
    name: '课程名称',
    value: 'data',
    type: null,
  },
  {
    name: '课程代码',
    value: 'BH0075',
    type: null,
  },
  {
    name: '课程类别',
    value: '核心专业类',
    type: null,
  },
  {
    name: '开课学院',
    value: '计算机学院',
    type: null,
  },
  {
    name: '学分',
    value: '2',
    type: null,
  },
  {
    name: '任课教师',
    value: '欧阳元新 孙青',
    type: null,
  },
];

const OTHER_INFO_DATA = [
  {
    name: '备注',
    value: '--',
    type: null,
  },
];

</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
