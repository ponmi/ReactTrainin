import { forwardRef } from 'react';

const TextForm = forwardRef(({
    textId,
    textName,
    onChange,
    textLabel,
    show,
    defaultValue
}, ref) => (
        <form>
            <div>
                <label
                    htmlFor={textId}>
                        {textLabel}
                </label>
                <input
                    id={textId}
                    name={textName}
                    type="text"
                    ref={ref}
                    onChange={onChange}
                    defaultValue={defaultValue}
                >    
                </input>
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    )
);

export default TextForm;