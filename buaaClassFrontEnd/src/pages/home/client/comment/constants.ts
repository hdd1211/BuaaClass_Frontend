import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '状态',
    align: 'left',
    width: 160,
    colKey: 'accusation',
    fixed: 'left',
  },
  {
    title: '标题',
    align: 'left',
    width: 260,
    colKey: 'heading',
    //fixed: 'left',
  },
  {
    title: '课程名称',
    align: 'left',
    width: 260,
    colKey: 'classname',
    // fixed: 'left',
  },
  { title: '内容质量', colKey: 'quality', width: 160 },
  { title: '工作量', colKey: 'load', width: 160 },
  { title: '考核/给分', colKey: 'score', width: 160 },
  { title: '总体评价', colKey: 'status', width: 160 },
  {
    title: '评论内容',
    width: 160,
    ellipsis: true,
    colKey: 'commentinfo',
  },
  {
    title: '评论者',
    width: 160,
    ellipsis: true,
    colKey: 'name',
  },
  {
    title: '评论时间',
    width: 160,
    ellipsis: true,
    colKey: 'updateTime',
  },
  {
    title: '热度',
    width: 160,
    ellipsis: true,
    colKey: 'paymentType',
  },
  // {
  //   title: '合同金额 (元)',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'amount',
  // },
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];
