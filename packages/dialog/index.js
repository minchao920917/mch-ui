import McDialog from './src/dialog.vue'

McDialog.install = Vue => {
    Vue.component(McDialog.name,McDialog)
}
export default McDialog