import React from 'react';
import { useField ,ErrorMessage} from 'formik';
export const Text = ({label, ...props}) => {
    const[field,meta] = useField(props);
  return (
      <>
    <label htmlFor={field.name}>{label}</label>
    <input className='form-control shadow-none'  {...field} {...props} autoComplete='off'>
    </input>
    <div style={{fontSize:'12px',color:'red'}}>
    <ErrorMessage name={field.name} ></ErrorMessage>
    </div>
    </>
  )
}
