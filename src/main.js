// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';
import {
  Button,
  Select,
  Option,
  Row,
  Header,
  Container,
  Footer,
  Main,
  Form,
  Input,
  FormItem,
  Message,
  Step,
  Steps,
  Carousel,
  CarouselItem,
  Col,
  TimePicker,
  DatePicker

} from 'element-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Header);
Vue.use(Container);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Col);
Vue.use(TimePicker);
Vue.use(DatePicker);

Vue.prototype.$message = Message;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
