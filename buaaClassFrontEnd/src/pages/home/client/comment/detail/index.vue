<template>
  <div class="detail-base">
    <t-card title="评论详情" :bordered="false">
      <div class="info-block">
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 评论代码 </h1>
          <span>
            {{ item.id }}
          </span>
          <h1> 评论代码 </h1>
          <span>
            {{ item.id }}
          </span>
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
import { getReviewById } from '@/api/catalog';
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
    const { list } = await getReviewById(query);
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
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
