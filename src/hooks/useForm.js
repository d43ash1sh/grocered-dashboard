import { useState } from "react";
import { omit } from 'lodash';

import { useDispatch } from "react-redux";
import { showToast } from "../redux/ui";


const useForm = (callback, defaultValue = {}) => {
    const dispatch = useDispatch();

    //Form values
    const [values, setValues] = useState(defaultValue);
    //Errors
    const [errors, setErrors] = useState({});

    const onError = (name, err) => {
        setErrors({
            ...errors,
            [name]: err
        });
    }

    const validate = (event, name, type, value) => {
        //A function to validate each input values

        switch (type) {
            case 'number':
            case 'decimal':

                value = type === "number" ? parseInt(value) : parseFloat(value.replace(/[^\d.-]/g, ''));

                if (event.target.min && value < event.target.min) {
                    onError(name, `${name} should be > ${event.target.min}`);
                    dispatch(showToast(`${name} should be > ${event.target.min}`));
                }
                else if (event.target.max && value > event.target.max) {
                    onError(name, `${name} should be < ${event.target.max}`);
                    dispatch(showToast(`${name} should be < ${event.target.max}`));
                }
                else if (errors[name]) {
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                    dispatch(showToast(false));
                }
                break;

            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        [name]: 'Enter a valid email address'
                    })
                } else {
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                }
                break;

            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        [name]: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                }
                break;

            default:
                break;
        }

        return value;
    }



    //A method to handle form inputs
    const handleChange = (event, callback = false) => {
        //To stop default events    
        //event.persist();

        let name = event.target.name;
        let type = event.target.vtype || event.target.type;
        let val = event.target.value;



        //Let's set these values in state
        setValues({
            ...values,
            [name]: validate(event, name, type, val),
        });


        if (typeof callback === "function") {
            callback();
        }
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            alert("There is an Error!");
        }
    }


    const setValue = (key, val) => {
        console.log("setValue", key, val);
        setValues({
            ...values,
            [key]: val,
        });
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValue
    }
}

export default useForm


/*
//Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

const {handleChange, values,errors,handleSubmit} = useForm(formLogin);


<form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
      {
        errors.email && <h3>{errors.email}</h3>
      }
      <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
      {
        errors.password && <h3>{errors.password}</h3>

      }
      <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
      {
        errors.username && <h3>{errors.username}</h3>

      }
      <input type="submit" value="Submit" className="submit"  />
      </form>

*/