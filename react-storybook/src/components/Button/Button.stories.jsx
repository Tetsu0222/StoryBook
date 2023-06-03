
import Button from './Button';


//Buttonコーポネントのストーリーを記述していく。
//Buttonコーポネントをどのように描写するのかをJSの関数で決めたものを記述する。
//このストーリーは、CSFと呼ばれるフォーマットを利用して記述する。

//この中で、titleとcomponentを設定する。
export default{
    title: 'Button',    //サイドメニューのストーリーをまとめていたButton,Header,Pageに対応
    component: Button,  //ストーリーを設定するコンポーネントを記述する。指定のコンポーネントはインポートしておく必要あり。
};