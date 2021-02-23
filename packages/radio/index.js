import McRadio from './src/radio';

McRadio.install = Vue => {
    Vue.component(McRadio.name,McRadio);
}
export default McRadio