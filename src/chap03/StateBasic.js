import { useState } from 'react';

export default function StateBasic({ init }) {
  // Props(init)でState(count)を初期化
  const [count, setCount] = useState(init);
  // [カウント]ボタンクリック時にカウント値をインクリメント
  console.log(`count is ${count}.`);
  const handleClick = () => setCount(count + 1);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // const handleClick = () => {
  //   setCount(c => c + 1);
  //   setCount(c => c + 1);
  // };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}