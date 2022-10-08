
// コンポーネントのオブジェクトを作る

// vueインスタンスを作る

// html上で命名したタグを作成。


var MyComponent = {
  template: '<div id="card" v-for="(index, i) in todo"><div v-if="check !== true "><span>{{i}}:{{index}}</span><button v-on:click="onEdit(true, i)">編集</button><button v-on:click="deleteBtn(i)">削除</button></div><div v-if="check === true "><input v-model="t_text"><button v-on:click="offEdit">確定</button><button v-on:click="deleteBtn(i)">削除</button></div></div>',
  created() {
    this.methods
  },
  data() {
    return {
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
    }
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
}

new Vue({
  el: '#app',
  components: {
    'my-component': MyComponent
  },
  data: {
    myArray: []
  }
})

