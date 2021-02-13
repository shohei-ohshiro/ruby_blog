import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#hello',
    data: {
      message: '',
      todos: [],
      array: [],
    },
    methods: {
      todo: function(){
        if(this.message == '') return
        this.todos.push(this.message)
        this.message = ''
      },
      deleteItem: function(index){
        this.todos.splice(index, 1)
      },
      create_input: function(){
        this.array.push('')
      },
      deleteAry: function(index){
        this.array.splice(index, 1)
      }
    },
    components: { App }
  })
})
