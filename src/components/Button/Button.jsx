import React from 'react';
import './Button.css';


const Button = (props) => {
  let { onClickHandler } = props;

  // onClickHndlerに関数以外の値をセットされていたら、
  // ボタンクリック時にエラーを出さないために何も中身のない関数を実行する
  if (typeof onClickHandler !== 'function') {
    onClickHandler = () => {};
  }

  return (
    <div 
      className="Button" 
      onClick={onClickHandler} 
    >
        {props.children}
    </div>
  );
};

export default Button;