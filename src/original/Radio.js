import { useMemo, useState } from 'react';

export default function Radio({ radioId, radioName, radioValue, isChecked, radioLabel, radioLabelFor}) {
    const [radio, setRadio] = useState({
        answer: 'yes'
});

const handleRadio = e => {
    setRadio({
        ...radio,
        [e.target.name]: e.target.value
    });
};

    return (
        <div>
            {/* id={radioId} のように{}で囲まないといけないのはなぜ？あとで確認する。*/}
            <input
                type="radio"
                id={radioId}
                name={radioName}
                value={radioValue}
                isChecked
            />
            <lable
                htmlFor={radioLabelFor}
            >
                {radioLabel}
            </lable>
        </div>
    );
}