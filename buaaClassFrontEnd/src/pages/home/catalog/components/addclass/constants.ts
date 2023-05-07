import { FormRule } from 'tdesign-vue-next';

export const FORM_RULES: Record<string, FormRule[]> = {
  name: [{ required: true, message: '请输入课程名称', type: 'error' }],
  type: [{ required: true, message: '请选择课程类别', type: 'error' }],
  no: [{ required: true, message: '请输入课程代码', type: 'error' }],
  school: [{ required: true, message: '请选择开课学院', type: 'error' }],
  teacher: [{ required: true, message: '请输入任课教师', type: 'error' }],
};

export const INITIAL_DATA = {
  name: '',
  type: '',
  no: '',
  school: '',
  teacher: '',
  comment: '',
};

// 课程类别枚举
export const CLASS_TYPE = {
  A1: 0,
  A2: 1,
  A3: 2,
  A4: 3,
  A5: 4,
  B1: 5,
  B2: 6,
  B3: 7,
  B4: 8,
  B5: 9,
  B6:10,
  B7:11,
  B8:12,
  B9:13,
  B10:14,
  C1:15,
  C2:16,
  C3:17,
};

export const CLASS_TYPE_OPTIONS = [
  { value: CLASS_TYPE.A1, label: '数学与自然科学类' },
  { value: CLASS_TYPE.A2, label: '工程基础类' },
  { value: CLASS_TYPE.A3, label: '语言类' },
  { value: CLASS_TYPE.A4, label: '外语类' },
  { value: CLASS_TYPE.A5, label: '英语分级' },

  { value: CLASS_TYPE.B1, label: '思政、军理类' },
  { value: CLASS_TYPE.B2, label: '体育类' },
  { value: CLASS_TYPE.B3, label: '核心通识类' },
  { value: CLASS_TYPE.B4, label: '素质教育通识限修课' },
  { value: CLASS_TYPE.B5, label: '素质教育类' },
  { value: CLASS_TYPE.B6, label: '一般通识类' },
  { value: CLASS_TYPE.B7, label: '博雅类' },
  { value: CLASS_TYPE.B8, label: 'Office Hours' },
  { value: CLASS_TYPE.B9, label: '素质教育理论必修课' },
  { value: CLASS_TYPE.B10, label: '素质教育实践必修课' },

  { value: CLASS_TYPE.C1, label: '核心专业类' },
  { value: CLASS_TYPE.C2, label: '一般专业类' },
  { value: CLASS_TYPE.C3, label: '科研课堂' },
];

// 开课学院枚举
export const SCHOOL_OPTIONS = [
  { label: '材料科学与工程学院', value: '1' },
  { label: '电子信息工程学院', value: '2' },
  { label: '自动化科学与电气工程学院', value: '3' },
];

// export const PARTY_B_OPTIONS = [
//   { label: '公司A', value: '1' },
//   { label: '公司B', value: '2' },
//   { label: '公司C', value: '3' },
// ];
