// テキストフォームとラジオボタンを用意する。ラジオボタンの値をstate管理する。
// ラジオボタンの値が変更されたら再描画するようにメモ化する
import { useMemo, useState } from 'react';
import Radio from './Radio';



export default function RadioMemo() {

    // const showDialog = useMemo(() => {
    //     alert('これはアラートです');
    // }, [radio]);
    return (
        <>
            <form>
                <div class="radio-wrap">
                    <Radio
                        id="radioYes"
                        name="radioYesOrNo"
                        value="yes"
                        isChecked={true}
                        radioLabelFor="yes"
                        radioLabel="Yes"
                    >
                    </Radio>
                    <Radio
                        id="radioNo"
                        name="radioYesOrNo"
                        value="no"
                        isChecked={false}
                        radioLabelFor="no"
                        radioLabel="No"
                    >
                    </Radio>
                </div>
            </form>
        </>
    );
}
