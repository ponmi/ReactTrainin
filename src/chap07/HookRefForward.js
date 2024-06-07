import { useEffect, useRef } from 'react';
import MyTextBox from './MyTextBox';

export default function HookRefForward() {
  // textという名前の参照オブジェクト
  const text = useRef(null);

  /* useEffect()関数の第二引数のdepthが空配列なのでコンポーネント初期描画時のみ実行される
     参照オブジェクトであるtextにフォーカスをあてている。
     Refオブジェクトなのでcurrentプロパティを使ってアクセスしている。
　*/
  useEffect(() => {
    text.current?.focus();
  }, []);

  return (
    <MyTextBox label="名前" ref={text} />
  );
}