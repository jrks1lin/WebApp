
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
/*
    注释掉以后是约定式路由
    routes: [
    {
      path: '/',//网页地址栏
      component: '../layouts/index',//组件路径
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],*/
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'MyApp1',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
