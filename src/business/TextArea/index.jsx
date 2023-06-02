import React from 'react';
import './style.scss';

export const TextArea = ({ name, label, value }) => {
    return (
        <div className="text-area">
            <label for="int" class="inp">
                <textarea
                    name={name}
                    className="form-textarea"
                    type="text" id="form-input"
                    placeholder="&nbsp;"
                    value={value}
                />
                <span className="label">{label}</span>
                <span className="focus-bg"></span>
            </label>
        </div>
    )
}