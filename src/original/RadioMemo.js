// テキストフォームとラジオボタンを用意する。ラジオボタンの値をstate管理する。
// ラジオボタンの値が変更されたら再描画するようにメモ化する
import { useMemo, useState } from 'react';
import Radio from './Radio';



export default function RadioMemo() {
    const [selectedRadio, setSelectedRadio] = useState({
        radioYesOrNo: 'yes'
    });
 
    const handleRadio = e => {
        setSelectedRadio({
            ...selectedRadio,
            [e.target.name]: e.target.value
            // answer: e.target.value
        });
    };

    return (
        <>
            <form>
                <div className="radio-wrap">
                    <Radio
                        radioId="radioYes"
                        radioName="radioYesOrNo"
                        radioValue="yes"
                        isChecked={selectedRadio.radioYesOrNo === 'yes'}
                        radioLabel="Yes"
                        onChange={handleRadio}
                    >
                    </Radio>
                    <Radio
                        radioId="radioNo"
                        radioName="radioYesOrNo"
                        radioValue="no"
                        isChecked={selectedRadio.radioYesOrNo === 'no'}
                        radioLabel="No"
                        onChange={handleRadio}
                    >
                    </Radio>
                </div>
            </form>
        </>
    );
}

