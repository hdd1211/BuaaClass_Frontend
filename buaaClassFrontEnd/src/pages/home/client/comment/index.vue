<template>
  <div>
    <t-card class="list-card-container" :bordered="false">
      <t-form ref="form" :label-width="80" colon @reset="onReset" @submit="onSubmit">
        <t-row :gutter="[30, 30]">
          <t-col :span="10">
            <t-row :gutter="[30, 24]">
              <t-col :span="4">
                <t-form-item label="评论状态" name="status">
                  <t-select
                    v-model="data.status"
                    class="form-item-content"
                    :options="COMMENT_STATUS_OPTIONS"
                    placeholder="请选择评论状态"
                  />
                </t-form-item>
              </t-col>
              <t-col :span="2" class="operation-container">
                <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }"> 查询 </t-button>
              </t-col>
              <t-space>
                <t-col :span="4">
                  <div class="search-input">
                    <t-input v-model="searchValue" placeholder="请输入你需要搜索的内容" clearable>
                      <template #suffix-icon>
                        <search-icon size="16px" />
                      </template>
                    </t-input>
                  </div>
                </t-col>
              </t-space>
              <t-space>
                <t-col :span="2" class="operation-container">
                  <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }"> 查询 </t-button>
                </t-col>
              </t-space>
            </t-row>
          </t-col>
          <t-col :span="4">
            <t-row>
              <div class="left-operation-container">
                  <t-button variant="base" theme="default" :disabled="!selectedRowKeys.length" @click="handleClickDelete(slotProps)"> 删除 </t-button>
                <p v-if="!!selectedRowKeys.length" class="selected-count">已选{{ selectedRowKeys.length }}项</p>
              </div>
            </t-row>
          </t-col>
        </t-row>
      </t-form>

      <t-table
        :data="data"
        :columns="COLUMNS"
        :row-key="rowKey"
        vertical-align="top"
        :hover="true"
        :pagination="pagination"
        :selected-row-keys="selectedRowKeys"
        :loading="dataLoading"
        :header-affixed-top="headerAffixedTop"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
        @select-change="rehandleSelectChange"
      >
        <template #status="{ row }">
          <t-tag v-if="row.status === COMMENT_STATUS.UNREPORT" theme="success">未举报</t-tag>
          <t-tag v-if="row.status === COMMENT_STATUS.REPORT" theme="danger">已举报</t-tag>
          <t-tag v-if="row.status === COMMENT_STATUS.DELETE" theme="default">已删除</t-tag>
        </template>

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
        </template>

        <template #op="slotProps">
          <a class="t-button-link" @click="handleClickDetail()"> 详情 </a>
          <a class="t-button-link" @click="handleClickDelete(slotProps)"> 删除 </a>
        </template>
      </t-table>
    </t-card>

    <t-dialog
      v-model:visible="confirmVisible"
      header="确认删除当前所选评价？"
      :body="confirmBody"
      :on-cancel="onCancel"
      @confirm="onConfirmDelete"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListBase',
};
</script>

<script setup lang="ts">
import { SearchIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, ref } from 'vue';

import { getReviewList,getReviewById,getReviewByCourse } from '@/api/catalog';
import Trend from '@/components/trend/index.vue';
import { prefix } from '@/config/global';
import { HEAT_STATUS, SATISFY_STATUS, COMMENT_STATUS, COMMENT_STATUS_OPTIONS } from '@/constants';
import { useSettingStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';

import { COLUMNS } from './constants';


const store = useSettingStore();

const data = ref([]);
const pagination = ref({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});

const searchValue = ref('');

const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  try {
    const { list } = await getReviewList();
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

const searchForm_id = {
  id: '',
};
const searchForm_courseid = {
  courseid: '',
};
const formData_id = ref({ ...searchForm_id });
const formData_courseid = ref({ ...searchForm_courseid });

const deleteIdx = ref(-1);
const confirmBody = computed(() => {
  if (deleteIdx.value > -1) {
    const { name } = data.value[deleteIdx.value];
    return `${name}的此条评论将被删除，且无法恢复`;
  }
  return '';
});

const confirmVisible = ref(false);

const selectedRowKeys = ref([1, 2]);

const router = useRouter();
const route = useRoute();

const resetIdx = () => {
  deleteIdx.value = -1;
};

const onConfirmDelete = () => {
  // 真实业务请发起请求
  data.value.splice(deleteIdx.value, 1);
  pagination.value.total = data.value.length;
  const selectedIdx = selectedRowKeys.value.indexOf(deleteIdx.value);
  if (selectedIdx > -1) {
    selectedRowKeys.value.splice(selectedIdx, 1);
  }
  confirmVisible.value = false;
  MessagePlugin.success('删除成功');
  resetIdx();
};

const onCancel = () => {
  resetIdx();
};

const rowKey = 'index';

const rehandleSelectChange = (val: number[]) => {
  selectedRowKeys.value = val;
};
const rehandlePageChange = (curr, pageInfo) => {
  console.log('分页变化', curr, pageInfo);
};
const rehandleChange = (changeParams, triggerAndData) => {
  console.log('统一Change', changeParams, triggerAndData);
};
const handleClickDetail = ({row}) => {
  console.log('get comment detail')
  router.push({ path: '/home/client/comment/detail', query: {id:row.id} });
};
const handleClickDelete = (row: { rowIndex: any }) => {
  deleteIdx.value = row.rowIndex;
  confirmVisible.value = true;
  console.log('delete comment')
};

const headerAffixedTop = computed(
  () =>
    ({
      offsetTop: store.isUseTabsRouter ? 48 : 0,
      container: `.${prefix}-layout`,
    } as any),
);
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

.list-card-container {
  padding: var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl);

  :deep(.t-card__body) {
    padding: 0;
  }
}

.left-operation-container {
  display: flex;
  align-items: center;
  margin-bottom: var(--td-comp-margin-xxl);

  .selected-count {
    display: inline-block;
    margin-left: var(--td-comp-margin-l);
    color: var(--td-text-color-secondary);
  }
}

.search-input {
  width: 360px;
}
</style>
