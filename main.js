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
    // todo: [
    //   {a:'name', t_text: ''},
    //   {a:'age', t_text: ''},
    //   {a:'area', t_text: ''},
    //   {a:'gender', t_text: ''},
    // ],
    check: false,
    text: '',
    t_text: '',
  },
  methods: {
    onEdit(string, index) {
      this.check = string
      this.t_text = this.todo[index]
      console.log(this.todo)
      console.log(this.t_text)
    },
    offEdit() {
      this.check = ''
    },
    addBtn() {
      this.todo.push(this.text)
      this.text = ''
      // focusを動的に当てる
      this.$refs.focusInput.focus()

    },
    deleteBtn(index) {
      this.todo.splice(index, 1)
    },
  },
})

