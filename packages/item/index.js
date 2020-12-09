import McItem from './src/item';

McItem.install = Vue => {
    Vue.component(McItem.name,McItem);
}
export default McItem