<template>
  <div class="detail-base">
    <t-card title="用户信息" :bordered="false">
      <div class="info-block">
        <div v-for="(item, index) in BASE_INFO_DATA" :key="index" class="info-item">
          <h1>{{ item.name }}</h1>
          <span
            :class="{
              ['inProgress']: item.type && item.type.value === 'inProgress',
              ['pdf']: item.type && item.type.value === 'pdf',
            }"
          >
            <i v-if="item.type && item.type.key === 'contractStatus'" />
            {{ item.value }}
          </span>
        </div>
      </div>
    </t-card>

    <t-card title="点过赞的评价" class="container-base-margin-top" :bordered="false">
      <t-steps class="detail-base-info-steps" layout="vertical" theme="dot" :current="1">
        <t-step-item title="上传合同附件" content="这里是提示文字" />
        <t-step-item title="修改合同金额" content="这里是提示文字" />
        <t-step-item title="新建合同" content="2020-12-01 15:00:00 管理员-李川操作" />
      </t-steps>
    </t-card>

    <t-card title="点过踩的评价" class="container-base-margin-top" :bordered="false">
      <t-steps class="detail-base-info-steps" layout="vertical" theme="dot" :current="1">
        <t-step-item title="上传合同附件" content="这里是提示文字" />
        <t-step-item title="修改合同金额" content="这里是提示文字" />
        <t-step-item title="新建合同" content="2020-12-01 15:00:00 管理员-李川操作" />
      </t-steps>
    </t-card>
    
    <t-card title="发布的评价" class="container-base-margin-top" :bordered="false">
      <t-steps class="detail-base-info-steps" layout="vertical" theme="dot" :current="1">
        <t-step-item title="上传合同附件" content="这里是提示文字" />
        <t-step-item title="修改合同金额" content="这里是提示文字" />
        <t-step-item title="新建合同" content="2020-12-01 15:00:00 管理员-李川操作" />
      </t-steps>
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
import{getPurchaseList} from '@/api/detail'
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
    const { list } = await getUserById(query.id);
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
    name: '用户唯一标识',
    value: '123',
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
