// 课程类别枚举
export const CLASS_STATUS = {
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
export const CLASS_STATUS_OPTIONS = [
  { value: CLASS_STATUS.A1, label: '数学与自然科学类' },
  { value: CLASS_STATUS.A2, label: '工程基础类' },
  { value: CLASS_STATUS.A3, label: '语言类' },
  { value: CLASS_STATUS.A4, label: '外语类' },
  { value: CLASS_STATUS.A5, label: '英语分级' },

  { value: CLASS_STATUS.B1, label: '思政、军理类' },
  { value: CLASS_STATUS.B2, label: '体育类' },
  { value: CLASS_STATUS.B3, label: '核心通识类' },
  { value: CLASS_STATUS.B4, label: '素质教育通识限修课' },
  { value: CLASS_STATUS.B5, label: '素质教育类' },
  { value: CLASS_STATUS.B6, label: '一般通识类' },
  { value: CLASS_STATUS.B7, label: '博雅类' },
  { value: CLASS_STATUS.B8, label: 'Office Hours' },
  { value: CLASS_STATUS.B9, label: '素质教育理论必修课' },
  { value: CLASS_STATUS.B10, label: '素质教育实践必修课' },

  { value: CLASS_STATUS.C1, label: '核心专业类' },
  { value: CLASS_STATUS.C2, label: '一般专业类' },
  { value: CLASS_STATUS.C3, label: '科研课堂' },
];

// 合同状态枚举
export const CONTRACT_STATUS = {
  FAIL: 0,
  AUDIT_PENDING: 1,
  EXEC_PENDING: 2,
  EXECUTING: 3,
  FINISH: 4,
};

export const CONTRACT_STATUS_OPTIONS = [
  { value: CONTRACT_STATUS.FAIL, label: '审核!失败' },
  { value: CONTRACT_STATUS.AUDIT_PENDING, label: '待审核' },
  { value: CONTRACT_STATUS.EXEC_PENDING, label: '待履行' },
  { value: CONTRACT_STATUS.EXECUTING, label: '审核成功' },
  { value: CONTRACT_STATUS.FINISH, label: '已!完成' },
];


// 合同类型枚举
export const CONTRACT_TYPES = {
  MAIN: 0,
  SUB: 1,
  SUPPLEMENT: 2,
};

export const CONTRACT_TYPE_OPTIONS = [
  { value: CONTRACT_TYPES.MAIN, label: '主合同' },
  { value: CONTRACT_TYPES.SUB, label: '子合同' },
  { value: CONTRACT_TYPES.SUPPLEMENT, label: '补充合同' },
];

// 合同收付类型枚举
export const CONTRACT_PAYMENT_TYPES = {
  PAYMENT: 0,
  RECEIPT: 1,
};

// 通知的优先级对应的TAG类型
export const NOTIFICATION_TYPES = {
  low: 'primary',
  middle: 'warning',
  high: 'danger',
};

// 通用请求头
export enum ContentTypeEnum {
  Json = 'application/json;charset=UTF-8',
  FormURLEncoded = 'application/x-www-form-urlencoded;charset=UTF-8',
  FormData = 'multipart/form-data;charset=UTF-8',
}
