<template>
  <div class="detail-base">
    <t-card title="用户信息" :bordered="false">
      <div class="info-block">
        <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>用户名称</h1>
            <span>{{ item.username }}</span>
          </div> 
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>用户ID</h1>
            <span>{{ item.id }}</span>
          </div> 
           <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>用户密码</h1>
            <span>{{ item.password}}</span>
          </div> 
        </div>
    </t-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DetailBase',
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import{ getPurchaseList } from '@/api/detail'
import { getUserById } from '@/api/catalog';
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
    
    const { list } = await getUserById(query);
    data.value = list;
    pagination.value = {
      ...pagination.value,
      total: list.length,
    };
    console.log(data.value[0]['name']);
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
    name: '用户唯一标识',
    value: 'a',
    type: null,
  },
  {
    name: '用户名',
    value: 'abc',
    type: null,
  },
  {
    name: '密码',
    value: '123',
    type: null,
  },
];
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
