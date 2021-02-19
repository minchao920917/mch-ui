import McBtn from './btn';
import McContainer from './container';
import McRow from './row';
import McCol from './col';
import McFlex from './flex';
import McItem from './item';
import McIcon from './icon';
import McBar from './icon';
import McLoading from './loading';
import McForm from './form';
import McFormItem from './formItem';
import McInput from './input';
// 定义一个组件列表，将McBtn组件放入其中
const components = [
    McBtn,
    McContainer,
    McRow,
    McCol,
    McFlex,
    McItem,
    McIcon,
    McBar,
    McLoading,
    McForm,
    McFormItem,
    McInput
    //... 未来其他的组件需要在开头引入
]
// 定义 调用vue的加载器方法，将 Vue 作为参数传入
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历组件列表，将组件注入进vue组件中
  components.map(component => Vue.component(component.name, component))
}

// 判断调用vue加载器，实现全局加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
