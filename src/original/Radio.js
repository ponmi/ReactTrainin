import { useMemo, useState } from 'react';

export default function Radio({
    radioId,
    radioName,
    radioValue,
    isChecked,
    radioLabel,
    onChange
}) {

    return (
        <div>
            {/* id={radioId} のように{}で囲まないといけないのはなぜ？あとで確認する。*/}
            <input
                type="radio"
                id={radioId}
                name={radioName}
                value={radioValue}
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={radioId}>
                {radioLabel}
            </label>
        </div>
    );
}