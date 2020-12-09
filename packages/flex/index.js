import McFlex from './src/flex';

McFlex.install = Vue => {
    Vue.component(McFlex.name,McFlex);
}
export default McFlex