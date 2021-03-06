import Vue from 'vue'
import VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import routes from './router'
import './public-path';

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Antd);

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/', // path 需要和基座（base）应用保持一致
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    // store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 解决子项目不能独立访问的问题 根据访问来源，执行不同渲染方法
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`---------VueApp--------- [onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  // props.setGlobalState &&
  //   props.setGlobalState({
  //     ignore: props.name,
  //     user: {
  //       name: props.name,
  //     },
  //   });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // receive the global data from base App
  Vue.prototype._BASE_STORE = props.BASE_STORE
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}