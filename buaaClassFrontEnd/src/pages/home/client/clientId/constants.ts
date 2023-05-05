import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '用户名称',
    align: 'left',
    width: 320,
    colKey: 'name',
    fixed: 'left',
  },
  { title: '注册时间', colKey: 'logTime', width: 160 },

  {
    title: '最近一次访问时间',
    width: 160,
    ellipsis: true,
    colKey: 'updateTime',
  },
  
  {
    title: '参与度',
    width: 160,
    ellipsis: true,
    colKey: 'amount',
  },
  // {
  //   title: '合同类型',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'contractType',
  // },
  // {
  //   title: '合同收付类型',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'paymentType',
  // },
 
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];
