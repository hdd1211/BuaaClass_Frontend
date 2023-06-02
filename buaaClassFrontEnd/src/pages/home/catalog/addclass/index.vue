<template>

     <t-col :span="6">
        <t-form
      ref="form"
      class="base-form"
      :data="formData1"
      :rules="FORM_RULES"
      label-align="top"
      :label-width="100"
      @reset="onReset"
      @submit="onSubmit"
    >
        <t-form-item label="批量上传" name="files">
          <t-upload
            v-model="formData1.files"
            :method ="POST"
            action = "/api/admin/catalog/add_batch"
            tips="请上传xls或xlsx文件，大小在60M以内"
            :size-limit="{ size: 60, unit: 'MB' }"
            :format-response="formatResponse"
            :before-upload="beforeUpload"
            @fail="handleFail"
          >
            <t-button class="form-submit-upload-btn" variant="outline"> 上传课程文件 </t-button>
          </t-upload>
        </t-form-item>
  </t-form>
</t-col>
  <t-form
    ref="form"
    class="base-form"
    :data="formData"
    :rules="FORM_RULES"
    label-align="top"
    :label-width="100"
    @reset="onReset"
    @submit="onSubmit"
  >
    <div class="form-basic-container">
      <div class="form-basic-item">
        <div class="form-basic-container-title"> 基本信息 </div>
        <!-- 表单内容 -->

        <!-- 课程名称 课程类别 -->
        <t-row class="row-gap" :gutter="[32, 24]">
          <t-col :span="6">
            <t-form-item label="课程名称" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入课程名称" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="课程类别" name="type">
              <t-select
                v-model="formData.type"
                :style="{ width: '322px' }"
                placeholder="请选择课程类别"
                class="demo-select-base"
                clearable
              >
                <t-option v-for="(item, index) in CLASS_TYPE_OPTIONS" :key="index" :value="item.value" :label="item.label">
                  {{ item.label }}
                </t-option>
              </t-select>
            </t-form-item>
          </t-col>

          <!-- 课程代码 -->
          <t-col :span="8">
           <t-form-item label="课程代码" name="no">
              <t-input v-model="formData.no" :style="{ width: '322px' }" placeholder="请输入课程名称" />
            </t-form-item>
          </t-col>

          <t-col :span="6">
            <t-form-item label="开课学院" name="school">
              <t-select
                v-model="formData.school"
                :style="{ width: '322px' }"
                class="demo-select-base"
                placeholder="请选择开课学院"
                clearable
              >
                <t-option v-for="(item, index) in SCHOOL_OPTIONS" :key="index" :value="item.value" :label="item.label">
                  {{ item.label }}
                </t-option>
              </t-select>
            </t-form-item>
          </t-col>

          <t-col :span="6">
            <t-form-item label="任课教师" name="teacher">
              <t-input 
              v-model="formData.teacher" :style="{ width: '322px' }" placeholder="请输入任课教师" />
            </t-form-item>
          </t-col>
          
        </t-row>

        <div class="form-basic-container-title form-title-gap"> 其它信息 </div>

        <t-form-item label="备注" name="comment">
          <t-textarea v-model="formData.comment" :height="124" placeholder="请输入备注" />
        </t-form-item>
        <t-space></t-space>
          <t-button theme="primary" class="form-submit-confirm" type="submit"> 确认 </t-button>
          <t-button type="reset" class="form-submit-cancel" theme="default" variant="base"> 取消 </t-button>
      </div>
    </div>
    
         <!-- <div class="form-submit-container">
      <div class="form-submit-sub">
        <div class="form-submit-left">
          <t-button theme="primary" class="form-submit-confirm" type="submit"> 确认 </t-button>
          <t-button type="reset" class="form-submit-cancel" theme="default" variant="base"> 取消 </t-button>
        </div>
      </div>
    </div> -->
  </t-form>
  
</template>

<script lang="ts">
export default {
  name: 'FormBase',
};
</script>

<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

import { FORM_RULES, INITIAL_DATA, CLASS_TYPE_OPTIONS, SCHOOL_OPTIONS } from './constants';
import {addCourse, getCourseById,addBatch} from '@/api/catalog';
import {useRouter}from 'vue-router'
const formData = ref({ ...INITIAL_DATA });
const router = useRouter();
const onReset = () => {
  MessagePlugin.warning('取消新建');
};
const INITIAL_DATA1 = {
  files: [],
};

const formData1 = ref({ ...INITIAL_DATA1 });
const pagination = ref({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});
const confirmVisible = ref(false);
const data = ref([]);
const dataLoading = ref(false);
const onSubmit = async ({validateResult}) => {
  dataLoading.value = true;
  try {
    const { list } = await addCourse(formData.value);
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
  
  console.log(validateResult ,formData.value);
  if(validateResult ===true){
    MessagePlugin.success('新建成功');
    // router.push('/home/catalog');
    router.back();
  }
};
const beforeUpload =(file) => {
  console.log(file);
  if (!(/\.(xls)$/.test(file.name)) && !(/\.(xlsx)$/.test(file.name))) {
    MessagePlugin.warning('请上传xls或xlsx文件');
    return false;
  }
  if (file.size > 60 * 1024 * 1024) {
    MessagePlugin.warning('上传文件不能大于60M');
    return false;
  }
  return true;
};
const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};
// 用于格式化接口响应值，error 会被用于上传失败的提示文字；url 表示文件/图片地址
const formatResponse = (res) => {
  return { ...res, error: '上传失败，请重试', url: res.url };
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
