/*
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, onClickItem }) {
  return (
    <label className={`panel-block ${!item.done ? 'has-text-grey-light' : ''}`} >
       <input type="checkbox" checked={item.done} onChange={() => onClickItem(item.key)}/>
      {item.text}
    </label>
  );
}

export default TodoItem;
