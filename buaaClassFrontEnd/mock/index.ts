import Mock from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/admin/catalog/get_course',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|5-5': [
            {
              'id|1': 'BH00@natural(01, 100)',
              'name|1': ["人体工程","工科大学物理","概率统计B","概率统计A","创新创业基础","计算机组成","软件工程","数学建模","大学英语","大学语文","大数据分析","虚拟现实技术","计算机图形学","数学分析"],
              
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/admin/catalog/get_by_id',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-1': [
            {
              'name|1': ["人体工程","工科大学物理","概率统计B","概率统计A","创新创业基础","计算机组成","软件工程","数学建模","大学英语","大学语文","大数据分析","虚拟现实技术","计算机图形学","数学分析"],
              'type|1': '@natural(0, 17)',
              id: 'BH00@natural(01, 100)',
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/admin/catalog/get_by_name',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-1': [
            {
              'name|1': ["人体工程","工科大学物理","概率统计B","概率统计A","创新创业基础","计算机组成","软件工程","数学建模","大学英语","大学语文","大数据分析","虚拟现实技术","计算机图形学","数学分析"],
              'type|1': '@natural(0, 17)',
              id: 'BH00@natural(01, 100)',
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/admin/catalog/add_course',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/admin/review/get_review',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|5-5': [
            {
              id:'@natural(0,1000)',
              'status|1': '@natural(0, 2)',
              username: 'buaaer@natural(01, 100)',
              time: '2023-@natural(03,04)-@natural(00,29) @date("HH:mm:ss")',
              'coursename|1': ["人体工程","工科大学物理","概率统计B","概率统计A","创新创业基础","计算机组成","软件工程","数学建模","大学英语","大学语文","大数据分析","虚拟现实技术","计算机图形学","数学分析"],
              courseid:'courseid@natural(0,1000)',
              semester: '学期',
              'total|1': '@natural(0, 2)',
              'quality|1': '@natural(0, 2)',
              'workload|1': '@natural(0, 2)',
              'assessment|1': '@natural(0, 2)',
              'title|1':["比较充实，有所收获","不错"],
              'heat|1': '@natural(0, 1)',
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/admin/review/get_by_id',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-1': [
            {
              id:'@natural(0,1000)',
              'status|1': '@natural(0, 2)',
              username: 'buaaer@natural(01, 100)',
              time: '2023-@natural(03,04)-@natural(00,29) @date("HH:mm:ss")',
              'coursename|1': ["人体工程","工科大学物理","概率统计B","概率统计A","创新创业基础","计算机组成","软件工程","数学建模","大学英语","大学语文","大数据分析","虚拟现实技术","计算机图形学","数学分析"],
              courseid:'courseid@natural(0,1000)',
              semester: '学期',
              'total|1': '@natural(0, 2)',
              'quality|1': '@natural(0, 2)',
              'workload|1': '@natural(0, 2)',
              'assessment|1': '@natural(0, 2)',
              'title|1':["比较充实，有所收获","不错"],
              'heat|1': '@natural(0, 1)',
            },
          ],
        }),
      },
    }),
  },



  

  {
    url: '/api/get-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-100': [
            {
              'heading|1':["比较充实，有所收获","不错"],
              'status|1': '@natural(0, 2)',
              'commentinfo|1':["课程听感：助教和老师都很细心负责，会认真的答疑+讲解。","锻炼自学能力(*/ω＼*)","助教超好！！！"],
              'index|+1': 1,
              'quality|1': '@natural(0, 2)',
              'load|1': '@natural(0, 2)',
              'score|1': '@natural(0, 2)',
              'comment|1': '@natural(0, 2)',
              no: 'BH00@natural(01, 100)',
              name: 'buaaer@natural(01, 100)',
              'classname|1': ["人体工程","工科大学物理","概率统计B","概率统计A","创新创业基础","计算机组成","软件工程","数学建模","大学英语","大学语文","大数据分析","虚拟现实技术","计算机图形学","数学分析"],
              'type|1': '@natural(0, 17)',
              'heat|1': '@natural(0, 1)',
              'contractType|1': '@natural(0, 2)',
              logTime: '2022-@natural(01,03)-@natural(00,29) @date("HH:mm:ss")',
              updateTime: '2023-@natural(01,03)-@natural(00,29) @date("HH:mm:ss")',
              time: '2023-@natural(03,04)-@natural(00,29) @date("HH:mm:ss")',
              amount: '@natural(10, 500)',
              adminName: '@cname()',
            },
          ],
        }),
      },
    }),
  },
  
  {
    url: '/api/get-purchase-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|100-100': [
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: 'Macbook',
              pdNum: 'p_tmp_60a637cd0d',
              'purchaseNum|1-100': 100,
              adminName: '财务部111',
              updateTime: '2020-05-20@date("HH:mm:ss")',
              pdType: '电子产品',
            },
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: 'Macbook',
              pdNum: 'p_tmp_60a637cd0d',
              'purchaseNum|1-100': 100,
              adminName: '财务部',
              updateTime: '2020-05-20@date("HH:mm:ss")',
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/detail-basic',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          name: 'td_20023747',
          loginType: 'Web',
          currentRole: 'Admin',
          rightsList: '通用权限',
          userStatus: '启用',
          language: '简体中文',
          timeZone: '(GMT+08:00)中国时区—北京（Asia/Beijing）',
        }),
      },
    }),
  },
  {
    url: '/api/get-card-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|48-50': [
            {
              'index|+1': 1,
              isSetup: '@boolean',
              'type|1': '@natural(1, 5)',
              'banner|1': [
                'https://tdesign.gtimg.com/starter/cloud-db.jpg',
                'https://tdesign.gtimg.com/starter/cloud-server.jpg',
                'https://tdesign.gtimg.com/starter/ssl.jpg',
                'https://tdesign.gtimg.com/starter/t-sec.jpg',
                'https://tdesign.gtimg.com/starter/face-recognition.jpg',
              ],
              'name|1': ['人脸识别', 'SSL证书', 'CVM', '云数据库', 'T-Sec 云防火墙'],
              'description|1': [
                '基于腾讯优图强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸',
                '云硬盘为您提供用于CVM的持久性数据块级存储服务。云硬盘中的数据自动地可用区内以多副本冗',
                'SSL证书又叫服务器证书，腾讯云为您提供证书的一站式服务，包括免费、付费证书的申请、管理及部',
                '腾讯安全云防火墙产品，是腾讯云安全团队结合云原生的优势，自主研发的SaaS化防火墙产品，无需客无需客无需客无需客无需客无需客无需客',
                '云数据库MySQL为用户提供安全可靠，性能卓越、易于维护的企业级云数据库服务。',
              ],
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/get-project-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-50': [
            {
              'index|+1': 1,
              adminPhone: '+86 13587609955',
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              'adminName|1': ['顾娟	', '常刚', '郑洋'],
              'name|1': [
                '沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办公用品采购项目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 ',
              ],
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/get-menu-list',
    method: 'get',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        ...Mock.mock({
          list: [
            {
              path: '/list',
              name: 'list',
              component: 'LAYOUT',
              redirect: '/list/base',
              meta: {
                title: '列表页',
                icon: 'view-list',
              },
              children: [
                {
                  path: 'base',
                  name: 'ListBase',
                  component: '/list/base/index',
                  meta: {
                    title: '基础列表页',
                  },
                },
                {
                  path: 'card',
                  name: 'ListCard',
                  component: '/list/card/index',
                  meta: {
                    title: '卡片列表页',
                  },
                },
                {
                  path: 'filter',
                  name: 'ListFilter',
                  component: '/list/filter/index',
                  meta: {
                    title: '筛选列表页',
                  },
                },
                {
                  path: 'tree',
                  name: 'ListTree',
                  component: '/list/tree/index',
                  meta: {
                    title: '树状筛选列表页',
                  },
                },
              ],
            },
            {
              path: '/form',
              name: 'form',
              component: 'LAYOUT',
              redirect: '/form/base',
              meta: {
                title: '表单页',
                icon: 'edit-1',
              },
              children: [
                {
                  path: 'base',
                  name: 'FormBase',
                  component: '/form/base/index',
                  meta: {
                    title: '基础表单页',
                  },
                },
                {
                  path: 'step',
                  name: 'FormStep',
                  component: '/form/step/index',
                  meta: {
                    title: '分步表单页',
                    keepAlive: false,
                  },
                },
              ],
            },
            {
              path: '/detail',
              name: 'detail',
              component: 'LAYOUT',
              redirect: '/detail/base',
              meta: {
                title: '详情页',
                icon: 'layers',
              },
              children: [
                {
                  path: 'base',
                  name: 'DetailBase',
                  component: '/detail/base/index',
                  meta: {
                    title: '基础详情页',
                  },
                },
                {
                  path: 'advanced',
                  name: 'DetailAdvanced',
                  component: '/detail/advanced/index',
                  meta: {
                    title: '多卡片详情页',
                  },
                },
                {
                  path: 'deploy',
                  name: 'DetailDeploy',
                  component: '/detail/deploy/index',
                  meta: {
                    title: '数据详情页',
                  },
                },
                {
                  path: 'secondary',
                  name: 'DetailSecondary',
                  component: '/detail/secondary/index',
                  meta: {
                    title: '二级详情页',
                  },
                },
              ],
            },
            {
              path: '/frame',
              name: 'Frame',
              component: 'Layout',
              redirect: '/frame/doc',
              meta: {
                icon: 'internet',
                title: '外部页面',
              },
              children: [
                {
                  path: 'doc',
                  name: 'Doc',
                  component: 'IFrame',
                  meta: {
                    frameSrc: 'https://tdesign.tencent.com/starter/docs/vue-next/get-started',
                    title: '使用文档（内嵌）',
                  },
                },
                {
                  path: 'TDesign',
                  name: 'TDesign',
                  component: 'IFrame',
                  meta: {
                    frameSrc: 'https://tdesign.tencent.com/vue-next/getting-started',
                    title: 'TDesign 文档（内嵌）',
                  },
                },
                {
                  path: 'TDesign2',
                  name: 'TDesign2',
                  component: 'IFrame',
                  meta: {
                    frameSrc: 'https://tdesign.tencent.com/vue-next/getting-started',
                    frameBlank: true,
                    title: 'TDesign 文档（外链）',
                  },
                },
              ],
            },
          ],
        }),
      },
    },
  },
] as MockMethod[];
