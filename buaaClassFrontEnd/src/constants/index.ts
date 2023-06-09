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
  { value: '数学与自然科学类' , label: '数学与自然科学类' },
  { value: '工程基础类', label: '工程基础类' },
  { value: '语言类', label: '语言类' },
  { value: '外语类', label: '外语类' },
  { value:  '英语分级', label: '英语分级' },

  { value: '思政、军理类', label: '思政、军理类' },
  { value: '体育类' , label: '体育类' },
  { value: '核心通识类', label: '核心通识类' },
  { value: '素质教育通识限修课', label: '素质教育通识限修课' },
  { value: '素质教育类', label: '素质教育类' },
  { value:  '一般通识类' , label: '一般通识类' },
  { value: '博雅类', label: '博雅类' },
  { value: 'Office Hours', label: 'Office Hours' },
  { value: '素质教育理论必修课', label: '素质教育理论必修课' },
  { value: '素质教育实践必修课', label: '素质教育实践必修课' },

  { value: '核心专业类' , label: '核心专业类' },
  { value: '一般专业类', label: '一般专业类' },
  { value: '科研课堂', label: '科研课堂' },
];

// 评论状态枚举
export const COMMENT_STATUS = {
  UNREPORT: 0,
  REPORT: 1,
  DELETE: 2,
};

export const COMMENT_STATUS_OPTIONS = [
  { value: COMMENT_STATUS.UNREPORT, label: '未举报' },
  { value: COMMENT_STATUS.REPORT, label: '已举报' },
  { value: COMMENT_STATUS.DELETE, label: '已删除' },
];

// 满意度枚举
export const SATISFY_STATUS = {
  UNSATISFY: 0,
  JUSTSOSO: 1,
  SATISFY: 2,
  SS:3,
  SSS:4,
  SSSS:5,
};

export const SATISFY_STATUS_OPTIONS = [
  { value: SATISFY_STATUS.UNSATISFY, label: '不满意' },
  { value: SATISFY_STATUS.JUSTSOSO, label: '一般般' },
  { value: SATISFY_STATUS.SATISFY, label: '很满意' },
];

// 热度枚举
export const HEAT_STATUS = {
  UP: 0,
  DOWN: 1,
};

export const HEAT_STATUS_OPTIONS = [
  { value: HEAT_STATUS.UP, label: '热度上升' },
  { value: HEAT_STATUS.DOWN, label: '热度下降' },
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
  { value: CONTRACT_STATUS.FAIL, label: '审核失败' },
  { value: CONTRACT_STATUS.AUDIT_PENDING, label: '待审核' },
  { value: CONTRACT_STATUS.EXEC_PENDING, label: '待履行' },
  { value: CONTRACT_STATUS.EXECUTING, label: '审核成功' },
  { value: CONTRACT_STATUS.FINISH, label: '已完成' },
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
