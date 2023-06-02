<template>
  <div class="list-common-table">
    <t-form ref="form" :data="formData_type" label-width="80" colon @reset="onReset" @submit="onSubmit_type">
      <t-row>
        <t-col :span="11">
          <t-row :gutter="[24, 24]">

            <t-col :span="4">
              <t-form-item label="课程类别" name="type">
                <t-select
                  v-model="formData_type.type"
                  class="form-item-content"
                  :options="CLASS_TYPE_OPTIONS"
                  placeholder="请选择课程类别"
                />
                 <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }">  查询  </t-button>
              </t-form-item>
              
            </t-col>
          </t-row>
        </t-col>

        <!-- <t-col :span="2" class="operation-container">
          <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }"> 查询 </t-button>
          <t-button type="reset" variant="base" theme="default"> 重置 </t-button>
        </t-col> -->
      </t-row>
    </t-form>

    <t-form ref="form" :data="formData_name" :label-width="80" colon @reset="onReset" @submit="onSubmit_name">
      <t-col :span="4">
             <t-form-item label="课程名称" name="name">
                <t-input
                  v-model="formData_name.name"
                  class="form-item-content"
                  type="search"
                  placeholder="请输入课程名称"
                  :style="{ minWidth: '134px' }"
                />
                <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }">  查询  </t-button>
              </t-form-item>
            </t-col>
    </t-form>

    <t-form ref="form" :data="formData_id" :label-width="80" colon @reset="onReset" @submit="onSubmit_id">
      
      <t-col :span="4">
             <t-form-item label="课程代码" name="id">
                <t-input
                  v-model="formData_id.id"
                  class="form-item-content"
                  type="search"
                  placeholder="请输入课程代码"
                  :style="{ minWidth: '134px' }"
                />
                <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }">  查询  </t-button>
                <t-col :span="2" :push="1">
                   <t-button type="reset" variant="base" theme="default"> 重置 </t-button>
                </t-col> 
              </t-form-item>
            </t-col>
    </t-form>

            
    <div class="left-operation-container">
                <t-button @click="handleAddClass"> 新建课程 </t-button>
                <t-button class="t-button-link" variant="base" theme="default" :disabled="!selectedRowKeys.length" @click="handleClickDeleteALL()"> 删除课程 </t-button>
                <p v-if="!!selectedRowKeys.length" class="selected-count">已选{{ selectedRowKeys.length }}项</p>
              <t-dialog
                v-model:visible="confirmVisible"
                header="确认删除所选课程？"
                :body="confirmBody"
                :on-cancel="onCancel"
                @confirm="onConfirmDeleteALL"
              />
              </div>


    <div class="table-container">
      <t-table
        :data="data"
        :columns="COLUMNS"
        :row-key="rowKey"
        :vertical-align="verticalAlign"
        :hover="hover"
        :pagination="pagination"
        :loading="dataLoading"
        :header-affixed-top="headerAffixedTop"
        :selected-row-keys="selectedRowKeys"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
        @select-change="rehandleSelectChange"
      >
        <template #type="{ row }">
          <p v-if="row.type ===  CLASS_TYPE.A1"> 数学与自然科学类 </p>
          <p v-if="row.type ===  CLASS_TYPE.A2"> 工程基础类 </p>
          <p v-if="row.type ===  CLASS_TYPE.A3"> 语言类 </p>
          <p v-if="row.type ===  CLASS_TYPE.A4"> 外语类 </p>
          <p v-if="row.type ===  CLASS_TYPE.A5"> 英语分级 </p>

          <p v-if="row.type ===  CLASS_TYPE.B1"> 思政、军理类 </p>
          <p v-if="row.type ===  CLASS_TYPE.B2"> 体育类 </p>
          <p v-if="row.type ===  CLASS_TYPE.B3"> 核心通识类 </p>
          <p v-if="row.type ===  CLASS_TYPE.B4"> 素质教育通识限修课 </p>
          <p v-if="row.type ===  CLASS_TYPE.B5"> 素质教育类 </p>
          <p v-if="row.type ===  CLASS_TYPE.B6"> 一般通识类 </p>
          <p v-if="row.type ===  CLASS_TYPE.B7"> 博雅类 </p>
          <p v-if="row.type ===  CLASS_TYPE.B8"> Office Hours </p>
          <p v-if="row.type ===  CLASS_TYPE.B9"> 素质教育理论必修课 </p>
          <p v-if="row.type ===  CLASS_TYPE.B10"> 素质教育实践必修课 </p>

          <p v-if="row.type ===  CLASS_TYPE.C1"> 核心专业类 </p>
          <p v-if="row.type ===  CLASS_TYPE.C2"> 一般专业类 </p>
          <p v-if="row.type ===  CLASS_TYPE.C3"> 科研课堂 </p>
        </template>

        <template #op="slotProps">
          <a class="t-button-link" @click="handleClickDetail(slotProps)">详情</a>
          <a class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
      </t-table>
      <t-dialog
        v-model:visible="confirmVisible"
        header="确认删除当前所选课程？"
        :body="confirmBody"
        :on-cancel="onCancel"
        @confirm="onConfirmDelete"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MessagePlugin, PageInfo, PrimaryTableCol, TableRowData } from 'tdesign-vue-next';
import { computed, onMounted, ref } from 'vue';
import {getList}from '@/api/list'
import { getCourseList,getCourseById,getCourseByName,getCourseByType,deleteBatch,deleteCourse } from '@/api/catalog';
import Trend from '@/components/trend/index.vue';
import { prefix } from '@/config/global';
import {
  CLASS_TYPE,
  CLASS_TYPE_OPTIONS,
  CONTRACT_TYPES,
} from '@/constants';
import { useSettingStore } from '@/store';
import { useRoute,useRouter } from 'vue-router';

const store = useSettingStore();
const selectedRowKeys = ref([]);
const rehandleSelectChange = (val: number[]) => {
  selectedRowKeys.value = val;
};

const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '课程名称',
    fixed: 'left',
    width: 280,
    ellipsis: true,
    align: 'left',
    colKey: 'name',
  },
  { 
    title: '课程类别', 
    colKey: 'type', 
    width: 160,
  },
  {
    title: '课程代码',
    width: 160,
    ellipsis: true,
    colKey: 'id',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];

const searchForm_name = {
  name: '',
  file:[],
};
const searchForm_id = {
  id: '',
};
const searchForm_type = {
  type: '',
};

const formData_name = ref({ ...searchForm_name });
const formData_id = ref({ ...searchForm_id });
const formData_type = ref({...searchForm_type});
const rowKey = 'id';
const verticalAlign = 'top' as const;
const hover = true;
const router = useRouter();
const route = useRoute();

const handleAddClass = () => {
  router.push('/home/catalog/addclass');
};
const handleClickDetail = ({row}) => {
  console.log('get detail')
  router.push({ path: '/home/catalog/detail', query: {id:row.id} });
};
const handleClickDelete = ({ row }) => {
  deleteIdx.value = row.rowIndex;
  confirmVisible.value = true;
  console.log(row.id)
};
const handleClickDeleteALL = () => {
  // deleteIdx.value = selectedRowKeys;
  // confirmVisible.value = true;
  console.log(selectedRowKeys.value)
};


const pagination = ref({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});
const confirmVisible = ref(false);

const data = ref([]);
const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  try {
    let query = route.query;
    
    const { list } = await getCourseList();
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

const deleteIdx = ref(-1);
const confirmBody = computed(() => {
  if (deleteIdx.value > -1) {
    const { name } = data.value[deleteIdx.value];
    return `删除后，${name}的所有合同信息将被清空，且无法恢复`;
  }
  return '';
});

const resetIdx = () => {
  deleteIdx.value = -1;
};

const onConfirmDelete = async () => {
  // 真实业务请发起请求
  data.value.splice(deleteIdx.value, 1);
  pagination.value.total = data.value.length;
  const selectedIdx = selectedRowKeys.value.indexOf(deleteIdx.value);
  // await deleteCourse(1);
  if (selectedIdx > -1) {
    selectedRowKeys.value.splice(selectedIdx, 1);
  }
  confirmVisible.value = false;
  MessagePlugin.success('删除成功');
  resetIdx();
};
const onConfirmDeleteALL = () => {
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

onMounted(() => {
  fetchData();
});

const onReset = (val) => {
  console.log(val);
};

const onSubmit_name = async (val) => {
  dataLoading.value = true;
  try {
    let query = route.query;
    const { list } = await getCourseByName(formData_name.value);
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
  console.log(formData_name.value);
};
const onSubmit_type = async (val) => {
  dataLoading.value = true;
  try {
    let query = route.query;
    const { list } = await getCourseByType(formData_type.value);
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
  console.log(formData_type.value.type);
};
const onSubmit_id = async (val) => {
  dataLoading.value = true;
  try {
    let query = route.query;
    const { list } = await getCourseById(formData_id.value);
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
  console.log(formData_id.value.id);
};

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
</script>

<style lang="less" scoped>

.selected-count {
  display: inline-block;
  margin-left: var(--td-comp-margin-l);
  color: var(--td-text-color-secondary);
}
.list-common-table {
  background-color: var(--td-bg-color-container);
  padding: var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl);
  border-radius: var(--td-radius-medium);

  .table-container {
    margin-top: var(--td-comp-margin-xxl);
  }
}

.form-item-content {
  width: 100%;
}

.operation-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .expand {
    .t-button__text {
      display: flex;
      align-items: center;
    }
  }
}

.payment-col {
  display: flex;

  .trend-container {
    display: flex;
    align-items: center;
    margin-left: var(--td-comp-margin-s);
  }
}
</style>