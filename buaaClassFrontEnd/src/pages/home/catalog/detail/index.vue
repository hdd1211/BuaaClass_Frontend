<template>
  <div class="detail-base">
    <t-card title="基本信息" :bordered="false">
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

    <t-card title="其他信息" :bordered="false">
      <div class="info-block">
        <div v-for="(item, index) in OTHER_INFO_DATA" :key="index" class="info-item">
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

  </div>
</template>

<script lang="ts">
export default {
  name: 'DetailBase',
};
</script>

<script setup lang="ts">
const BASE_INFO_DATA = [
  {
    name: '课程名称',
    value: '软件工程',
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
