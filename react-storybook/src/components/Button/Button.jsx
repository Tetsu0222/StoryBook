
//親コンポーネントからpropsでchildrenを受け取る。
function Button( {children }){
    return <button>{ children }</button>;
}

export default Button;