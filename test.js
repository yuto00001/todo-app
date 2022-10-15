// @click="editClick(i)"を押下した際に、他のすべての要素を触れないようにしたい。

// チェックの数を完了数としてカウントしたい

// 削除ではなく、アーカイブをしたい
// アーカイブからのみ、削除可能にしたい

// 空白のまま要素を追加できないようにしたい

// 操作をアニメーションさせたい

new Vue({
  el: '#app',
  data: {
    content: '',
    todos: [
      {name: '課題a', result: true, check: false},
      {name: '課題b', result: true, check: false},
      {name: '課題c', result: true, check: false},
    ],
  },
  methods: {
    addClick() {
      this.todos.push({name: this.content, result: true, check: false})
      this.content = ''
      this.$refs.focusInput.focus()
    },
    editClick(index) {
      this.todos[index].result = false
      console.log(this.todos.result)
      console.log(this.todos)
    },
    decisionClick(index) {
      this.todos[index].result = true
    },
    deleteClick(index) {
      this.todos.splice(index, 1)
    }
  }
})
