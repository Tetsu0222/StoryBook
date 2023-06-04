import './button.css';
import PropTypes from 'prop-types';

//関数名をhandleClickへ変更
//onから始まる関数でなければ、初期設定で検知することができないため、このままだとイベント発火しない。
//設定は、preview.jsファイルでactionsに記述されている。
function Button({ children, color = 'default', size = 'base', handleClick }) {
    return (
      <button className={`${color} ${size}`} onClick={handleClick}>
        {children}
      </button>
    );
  }

export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'default', 'danger']),
    size: PropTypes.oneOf(['sm', 'base', 'lg']),
    onClick: PropTypes.func.isRequired,
  };