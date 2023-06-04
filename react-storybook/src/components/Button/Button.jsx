import './button.css';      //CSSファイルをインポートする。

//propsにcolorを追加、デフォルト値をそのままdefaultとする。
function Button({ children , color = 'default' , size='base' }){
    return <button className={`${color} ${size}`} >{ children }</button>;   //複数のpropsを使用する時は、`${ } ${ }` シフト+@
}

export default Button;