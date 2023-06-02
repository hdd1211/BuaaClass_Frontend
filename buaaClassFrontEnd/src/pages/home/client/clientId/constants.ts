import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  // { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '用户名称',
    align: 'left',
    width: 320,
    colKey: 'username',
    fixed: 'left',
  },
  { 
    title: '用户ID', 
    colKey: 'id', 
    width: 160 
  },

  // {
  //   title: '最近一次访问时间',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'updateTime',
  // },
  
  // {
  //   title: '参与度',
  //   width: 160,
  //   ellipsis: true,
  //   colKey: 'involve',
  // },
 
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];
