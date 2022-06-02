import React, { useState } from 'react';
/*
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ handleNewTodo }) {

	const onEnterPress = (e) => {
		if (e.key === 'Enter') {
			handleNewTodo(e.target.value)
			e.target.value = '';
		}
	}

  return (
    <div className="panel-block">
			<input className='input' type="text" onKeyPress={onEnterPress}/>
    </div>
  );
}

export default Input;
