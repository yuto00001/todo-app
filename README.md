# todo-app

index.html　と test.html　の二つのファイルがあります。

index.html　では、編集ボタンを押した際に、全てのinputタグが開いてしまいます。

      <div v-if="check === true">
        <input v-model="t_text">
        <button v-on:click="offEdit">確定</button>
        <button v-on:click="deleteBtn(i)">削除</button>
      </div>
      
上記にある　v-if="check === true"　が問題なのだろうと思っているのですが、それを解決する術がわかりませんでした。

コンポーネントを使って記述すれば、「追加」ボタンを押して作成される要素を別々に操作できるかと思い、test.html　上で試しました。



test.html　では、コンポーネントの考え方で記述を試みました。
ただ、うまく動作していません。
templateオプションと、created(){} でmethodsオブジェクトを関数みたいに呼び出そうとしている部分が強引すぎることはわかるのですが、解決策が分かりませんでした。
