import './button.css';      //CSSファイルをインポートする。

//propsにcolorを追加、デフォルト値をそのままdefaultとする。
function Button({ children , color = 'default' }){
    return <button className={ color }>{ children }</button>;
}

export default Button;