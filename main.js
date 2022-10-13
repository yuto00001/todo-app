/*
click on addBtn , added card from input text. and become empty input text.

click on deleteBtn , splice only self card.

data are managed in arrays.

using direction is {
  v-for = manage arrays
  v-on:click = catching click event
  v-model = obtain input element.(双方向データバインディング)
}

using property is {
  el = connect html to vue
  data = managed todo and text
  methods = making click event function
}


*/


// 編集押した時に、すべてのinputタグが開かないようにしたい
// そのbutton（若しくはinput）の持つindexのみ開きたい

new Vue({
  el: '#app',
  data: {
    todo: ['name','age','area','gender'],
    // check: false,
    // t_text: '',
    text: '',
    // isEditing: false,
    todos: {
      content: '宿題',
      isEditing: false,
    },
  },
  methods: {
    onEdit(boolean, index) {
      // this.t_text = this.todo[index]
      this.todos.isEditing = boolean
      console.log(this)
      console.log(this.todos.isEditing)
      console.log(index, this.todo[index])
    },
    offEdit(boolean) {
      this.todos.isEditing = boolean
    },
    addBtn() {
      this.todo.push(this.text)
      this.text = ''
      this.$refs.focusInput.focus()
    },
    deleteBtn(index) {
      this.todo.splice(index, 1)
    },
  },
})

