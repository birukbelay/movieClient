import React from "react";

export function SingleInput({className, lable, inputType, id, placeholder, name, setText, required, value = false}) {

    return <div className={`${className}`}>
        <div className="form-group">
            <label htmlFor="projectinput3">{`${lable}`}</label>

            <input
                value={value}
                type={`${inputType}`}
                placeholder={`${placeholder}`}
                onChange={(e) => {
                    setText(e.target.value)
                }}
                required={required}
                id={`${id}`}
                name={`${name}`}
                className="form-control"
            />
        </div>
    </div>;
}

export const CheckboxGroup = ({genres, checkedValues, onChange}) => {
    return (
        <>
            <h4>Select Genres</h4>
            {
                genres.map(genre =>
                    <CheckBox key={genre.id} name={genre.name} value={genre.id} checked={checkedValues[genre.id]}
                              onChange={onChange}/>
                )
            }
        </>
    )
}
const CheckBox = ({name, value, checked, onChange}) => {
    return (
        <>
            <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange}/>
            <span style={{padding: '0.5em'}}/>
            <label htmlFor={name}> {name}</label>

            <br/>
        </>
    )
}
export const CategoryRadioGroup = ({categories, categoryState, onChange}) => {
    return (
        <>
            <h4>Select category</h4>
            {
                categories.map(category =>
                    <Radio key={category.id} name={category.name} value={category.id}
                           checked={categoryState === category.id} onChange={onChange}/>
                )
            }
        </>
    )
}
const Radio = ({name, value, checked, onChange}) => {
    return (
        <>
            <input type="radio" name={name} value={value} checked={checked} onChange={onChange}/>
            <span style={{padding: '0.5em'}}/>
            <label htmlFor={name}> {name}</label>

            <br/>
        </>
    )
}