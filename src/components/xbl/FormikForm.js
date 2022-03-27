import React, { useState, Fragment, forwardRef } from "react";
import useFocus from "../hooks/useFocus";

import { Field, ErrorMessage } from "formik";



export const FormikInput = (props) => {
    const {
        type = "text",
    } = props;

    if (type === "textarea") {
        return <Textarea {...props} />
    }
    if (type === "radio" || type === "checkbox") {
        return <Checkbox {...props} />
    }
    if (type === "switch") {
        return <Switch {...props} />
    }

    return <InputBox {...props} />
}


const InputBox = forwardRef((props, ref) => {
    const {
        children,
        type = "text",
        name = "",
        label = "",
        className = "",
        prefix = "",
        ...rest
    } = props;

    const [inputRef, setInputFocus] = useFocus()
    const [inputType, setInputType] = useState(type);

    const togglePassword = () => {
        setInputType(inputType === "text" ? "password" : "text");
        setInputFocus();
    }

    return <div className={`ninput ${className}`} prefix={prefix}>
        <Field name={name} type={inputType} innerRef={inputRef} {...rest} placeholder="." />
        <label>{label}</label>
        {
            type === "password" && <div
                className={`password-toggle pa ic50 cp z2 t0 r0 ${inputType}`}
                onClick={togglePassword}
            ></div>
        }
        <ErrorMessage name={name} component={FormikError} />
    </div>
});






const Checkbox = (props) => {
    const {
        type,
        label,
        name,
        options,
        className = "",
        ...rest
    } = props;

    return (<Fragment>
        <div className={`flex fww ${className}`}>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map((option, i) => {
                            return (<Fragment key={i}>
                                <label className={`checkbox ${type}`}>
                                    <input
                                        type={type}
                                        className="rb dn"
                                        {...field}
                                        value={option.value}
                                        checked={type === "radio" ? field.value === option.value : field.value.includes(option.value)}
                                    />
                                    <div className="tick">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" className="pr z100">
                                            <circle></circle>
                                            <path fill="none" stroke="#075EDD" strokeWidth="2" d="M5.3999023,14.2783203 l4.8852539,6.7744141l13.9477539-10.6259766"></path>
                                        </svg>
                                    </div>
                                    <div className="text">{option.key}</div>
                                </label>
                            </Fragment>)
                        })
                    }
                }
            </Field>
        </div>
        <ErrorMessage name={name} component={FormikError} />
    </Fragment>)
}



const Switch = (props) => {
    const {
        name,
        option,
        ...rest
    } = props;

    return (<Fragment>
        <Field name={name} {...rest}>
            {
                ({ field }) => <label className="switch" >
                    <input
                        {...field}
                        type="checkbox"
                        checked={field.value}
                    />
                    <span className="slider"></span>
                </label>
            }
        </Field>
        <ErrorMessage name={name} component={FormikError} />
    </Fragment>)
}




function Textarea(props) {
    const {
        name,
        label = "",
        ...rest
    } = props;
    return <div className="ninput">
        <Field as="textarea" name={name} {...rest} placeholder="." />
        <label>{label}</label>
        <ErrorMessage name={name} component={FormikError} />
    </div>
}


export const FormikError = ({ children }) => {
    return <div className="form-error">
        {children}
    </div>
}
