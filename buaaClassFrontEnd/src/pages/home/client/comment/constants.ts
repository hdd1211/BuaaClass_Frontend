import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
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
  {
    title: '评论者id',
    width: 160,
    ellipsis: true,
    colKey: 'userid',
  },
  {
    title: '评论者',
    width: 160,
    ellipsis: true,
    colKey: 'username',
  },
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
  {
    title: '热度',
    width: 160,
    ellipsis: true,
    colKey: 'heat',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];
