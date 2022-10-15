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

// テキストが配列なら、要素も配列に。
new Vue({
  el: '#app',
  data: {
    content: '',
    todos: [
      {name: 'aaa',isEditing: false,},
      {name: 'bbb',isEditing: false,},
      {name: 'ccc',isEditing: false,},
    ],
  },
  methods: {
    addBtn() {
      this.todos.push({name: this.content,isEditing: false,})
      this.content = ''
      this.$refs.focusInput.focus()
    },
    onEdit(boolean, index) {
      this.todos[index].isEditing = boolean
      console.log(this)
      console.log(this.isEditing)
    },
    offEdit(boolean, index) {
      this.todos[index].isEditing = boolean
    },
    deleteBtn(index) {
      this.todos.splice(index, 1)
    },
  },
})

