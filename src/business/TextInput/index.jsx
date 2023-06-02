import React from 'react';
import './style.scss';


export const TextInput = ({ name, label, value }) => {
    return (
        <div className="text-input">
            <label for="form-input" class="inp">
                <input name={name} className="form-input" type="text" id="form-input" placeholder="&nbsp;" value={value} />
                <span className="label">{label}</span>
                <span className="focus-bg"></span>
            </label>
        </div>
    )
}