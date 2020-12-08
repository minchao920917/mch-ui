import McContainer from './src/container'

McContainer.install = Vue => {
    Vue.component(McContainer.name,McContainer)
}
export default McContainer