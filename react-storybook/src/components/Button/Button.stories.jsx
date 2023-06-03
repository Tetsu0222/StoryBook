
import Button from './Button';


//Buttonコーポネントのストーリーを記述していく。
//Buttonコーポネントをどのように描写するのかをJSの関数で決めたものを記述する。
//このストーリーは、CSFと呼ばれるフォーマットを利用して記述する。

//この中で、titleとcomponentを設定する。
export default{
    title: 'Button',    //サイドメニューのストーリーをまとめていたButton,Header,Pageに対応
    component: Button,  //ストーリーを設定するコンポーネントを記述する。指定のコンポーネントはインポートしておく必要あり。
};

//上記でmetadataを設定後、以降にストーリーを記述していく。

//独自関数をエクスポート、Buttonタグの間に文字列を挿入
//この文字列は、props.childrenでButtonコンポーネントに渡していく。
export const HelloButton = () => 
    <Button>Hello World!</Button>;



//ここまででストーリーの設定は完了
//ストーリーブック（ブラウザ）でここまでの変更内容が自動的に反映されているため、すぐに変更内容の影響を確認できる。
//※srcフォルダ下に存在する*stories.jsxファイルが自動的に検知されるように設定されているため。

//main.jsの記述を変更することで、上記の設定は細かく変更が可能
//module.exports = { ... } 内部の記述を変更すれば設定も変更可能