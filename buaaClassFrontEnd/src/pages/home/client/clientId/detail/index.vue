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
           <!-- <div v-for="(item, index) in data " :key="index" class="info-item">
            <h1>用户密码</h1>
            <span>{{ item.password}}</span>
          </div>  -->
        </div>
    </t-card>

    <t-card title="用户评论" :bordered="false">
      <div class="table-container">
      <t-table
        :data="data_review"
        :columns="COLUMNS"
        :row-key="rowKey"
        :vertical-align="verticalAlign"
        :hover="hover"
        :pagination="pagination"
        :loading="dataLoading"
        :header-affixed-top="headerAffixedTop"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
      >
      <template #status="{ row }">
          <t-tag v-if="row.status === COMMENT_STATUS.UNREPORT" theme="success"> 未举报 </t-tag>
          <t-tag v-if="row.status === COMMENT_STATUS.REPORT" theme="danger"> 已举报 </t-tag>
          <t-tag v-if="row.status === COMMENT_STATUS.DELETE" theme="default"> 已删除 </t-tag>
        </template>
<!-- 
        <template #total="{ row }">
          <t-tag v-if="row.total === SATISFY_STATUS.UNSATISFY" theme="success" variant="light"> 很满意 </t-tag>
          <t-tag v-if="row.total === SATISFY_STATUS.JUSTSOSO" theme="warning" variant="light"> 一般 </t-tag>
          <t-tag v-if="row.total === SATISFY_STATUS.SATISFY" theme="danger" variant="light"> 不满意 </t-tag>
        </template>
        <template #quality="{ row }">
          <t-tag v-if="row.quality === SATISFY_STATUS.UNSATISFY" theme="success" variant="light"> 很满意 </t-tag>
          <t-tag v-if="row.quality === SATISFY_STATUS.JUSTSOSO" theme="warning" variant="light"> 一般 </t-tag>
          <t-tag v-if="row.quality === SATISFY_STATUS.SATISFY" theme="danger" variant="light"> 不满意 </t-tag>
        </template>
        <template #workload="{ row }">
          <t-tag v-if="row.workload === SATISFY_STATUS.UNSATISFY" theme="success" variant="light"> 很满意 </t-tag>
          <t-tag v-if="row.workload === SATISFY_STATUS.JUSTSOSO" theme="warning" variant="light"> 一般 </t-tag>
          <t-tag v-if="row.workload === SATISFY_STATUS.SATISFY" theme="danger" variant="light"> 不满意 </t-tag>
        </template>
        <template #assessment="{ row }">
          <t-tag v-if="row.assessment === SATISFY_STATUS.UNSATISFY" theme="success" variant="light"> 很满意 </t-tag>
          <t-tag v-if="row.assessment === SATISFY_STATUS.JUSTSOSO" theme="warning" variant="light"> 一般 </t-tag>
          <t-tag v-if="row.assessment === SATISFY_STATUS.SATISFY" theme="danger" variant="light"> 不满意 </t-tag>
        </template>
        <template #heat="{ row }">
          <div v-if="row.heat === HEAT_STATUS.UP" class="payment-col">
            热度<trend class="dashboard-item-trend" type="up" />
          </div>
          <div v-if="row.heat === HEAT_STATUS.DOWN" class="payment-col">
            热度<trend class="dashboard-item-trend" type="down" />
          </div>
        </template> -->

        <template #op="slotProps">
          <a class="t-button-link" @click="handleClickDetail(slotProps)"> 详情 </a>
          <!-- <a class="t-button-link" @click="handleClickDelete(slotProps)"> 删除 </a> -->
        </template>

      </t-table>

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
import { getUserById,getReviewById } from '@/api/catalog';
import { useRoute, useRouter } from 'vue-router';
import { getParams } from 'tdesign-vue-next/es/utils/render-tnode';
import axios from 'axios';


import { HEAT_STATUS, SATISFY_STATUS, COMMENT_STATUS, COMMENT_STATUS_OPTIONS } from '@/constants';
import { MessagePlugin, PageInfo, PrimaryTableCol, TableRowData } from 'tdesign-vue-next';
import { useSettingStore } from '@/store';
import { prefix } from '@/config/global';
const store = useSettingStore();
const rowKey = 'id';
const verticalAlign = 'top' as const;
const hover = true;
const rehandlePageChange = (pageInfo: PageInfo, newDataSource: TableRowData[]) => {
  console.log('分页变化', pageInfo, newDataSource);
};
const rehandleChange = (changeParams, triggerAndData) => {
  console.log('统一Change', changeParams, triggerAndData);
};
const rehandleClickOp = ({ text, row }) => {
  console.log(text, row);
};

const headerAffixedTop = computed(
  () =>
    ({
      offsetTop: store.isUseTabsRouter ? 48 : 0,
      container: `.${prefix}-layout`,
    } as any), // TO BE FIXED
);


const handleClickDetail = ({row}) => {
  console.log('get comment detail')
  router.push({ path: '/home/client/comment/detail', query: {id:row.id} });
};
// const handleClickDelete = (row: { rowIndex: any }) => {
//   deleteIdx.value = row.rowIndex;
//   confirmVisible.value = true;
//   console.log('delete comment')
// };

const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    title: '评论id',
    align: 'left',
    width: 160,
    colKey: 'id',
  },
  {
    title: '评论状态',
    align: 'left',
    width: 160,
    colKey: 'status',
    fixed: 'left',
  },
  // {
  //   title: '评论者id',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'userid',
  // },
  // {
  //   title: '评论者',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'username',
  // },
  {
    title: '发表时间',
    width: 160,
    ellipsis: true,
    colKey: 'time',
  },  
  {
    title: '课程代码',
    align: 'left',
    width: 260,
    colKey: 'courseid',
  },
  {
    title: '课程名称',
    align: 'left',
    width: 260,
    colKey: 'coursename',
  },
  {
    title: '学期',
    colKey: 'semester',
    width: 160 
  },
  { 
    title: '总评分', 
    colKey: 'total', 
    width: 160 
  },
  {
    title: '内容质量',
    colKey: 'quality',
    width: 160 
  },
  { 
    title: '工作量', 
    colKey: 'workload', 
    width: 160 
  },
  { 
    title: '考核给分', 
    colKey: 'assessment', 
    width: 160 
  },
  {
    title: '标题',
    align: 'left',
    width: 260,
    colKey: 'title',
  },
  // {
  //   title: '正文',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'text',
  // },
  // {
  //   title: '热度',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'heat',
  // },
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];

const route = useRoute();
const router = useRouter();
const pagination = ref({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});

const data = ref([]);
const data_review = ref([]);

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

    console.log(data.value);
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};
const fetchData_review = async () => {
  dataLoading.value = true;
  try {
    let query = route.query;
    
    const { list } = await getReviewById(query);
    data_review.value = list;
    pagination.value = {
      ...pagination.value,
      total: list.length,
    };

    console.log(data_review);
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};
onMounted(() => {
  fetchData();
  fetchData_review();
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
