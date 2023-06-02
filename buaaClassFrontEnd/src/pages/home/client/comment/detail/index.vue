<template>
  <div class="detail-base">

    <t-card title="评论标题" :bordered="false">
      <div v-for="(item, id) in data" :key="id" class="info-item">
            {{ item.title }}
        </div>
    </t-card>
    
    <t-card title="评论正文" class="container-base-margin-top" :bordered="false">
      <div v-for="(item, id) in data" :key="id" class="info-item">
            {{ item.text }}
        </div>
    </t-card>

    <t-card title="评论详情" class="container-base-margin-top" :bordered="false">
      <div class="info-block">
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 评论id </h1>
          <span>
            {{ item.id }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 评论状态 </h1>
            <t-tag v-if="item.status === COMMENT_STATUS.UNREPORT" theme="success"> 未举报 </t-tag>
            <t-tag v-if="item.status === COMMENT_STATUS.REPORT" theme="danger"> 已举报 </t-tag>
            <t-tag v-if="item.status === COMMENT_STATUS.DELETE" theme="default"> 已删除 </t-tag>
          <span>
            {{ item.status }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 评论者id </h1>
          <span>
            {{ item.userid }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 评论者 </h1>
          <span>
            {{ item.username }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 发表时间 </h1>
          <span>
            {{ item.time }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 课程代码 </h1>
          <span>
            {{ item.courseid }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 课程名称 </h1>
          <span>
            {{ item.coursename }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 学期 </h1>
          <span>
            {{ item.semester }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 总评分 </h1>
          <span>
            <t-rate disabled :modelValue=item.total :count="5" />
          </span>
          <span>
            {{ item.total }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 内容质量 </h1>
          <span>
            <t-rate disabled :modelValue=item.quality :count="5" />
          </span>
          <span>
            {{ item.quality }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 工作量 </h1>
          <span>
            <t-rate disabled :modelValue=item.workload :count="5" />
          </span>
          <span>
            {{ item.workload }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 考核给分 </h1>
          <span>
            <t-rate disabled :modelValue=item.assessment :count="5" />
          </span>
          <span>
            {{ item.assessment }}
          </span>
        </div>
        <div v-for="(item, id) in data" :key="id" class="info-item">
          <h1> 热度 </h1>
          <span>
          <div v-if="item.heat === HEAT_STATUS.UP" class="payment-col">
            热度<trend class="dashboard-item-trend" type="up" />
          </div>
          <div v-if="item.heat === HEAT_STATUS.DOWN" class="payment-col">
            热度<trend class="dashboard-item-trend" type="down" />
          </div>
          </span>
          <span>
            {{ item.heat }}
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
import { HEAT_STATUS, SATISFY_STATUS, COMMENT_STATUS, COMMENT_STATUS_OPTIONS } from '@/constants';
import Trend from '@/components/trend/index.vue';
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
.payment-col {
  display: flex;

  .trend-container {
    display: flex;
    align-items: center;
    margin-left: var(--td-comp-margin-s);
  }
}

@import url('./index.less');
</style>
