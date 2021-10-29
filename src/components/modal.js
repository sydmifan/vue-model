import modal from './modal.vue'

export default {
  install(Vue,options){
    let myModal = Vue.extends(modal)
    const instan = new myModal({
      el:document.createElement('div')
    })
    document.body.appendChild(instan.$el)
    let message = function(){

    }
    Vue.prototype.$message = message
  }
}