import './button.css';
import PropTypes from 'prop-types';

//onClick関数をコンポーネントのButton要素へ追加
function Button({ children, color = 'default', size = 'base', onClick }) {
    return (
      <button className={`${color} ${size}`} onClick={onClick}>
        {children}
      </button>
    );
  }

export default Button;

//propTypesにonClickで発火するように記述を追記
Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'default', 'danger']),
    size: PropTypes.oneOf(['sm', 'base', 'lg']),
    onClick: PropTypes.func.isRequired,
  };