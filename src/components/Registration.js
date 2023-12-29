import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import {signupSchema} from './schema/ValidationSchema'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Registration() {
  let initialValues = {
    first_name : "",
    last_name : "",
    phone_number : "",
    email:"",
    password:""
  }

  const navigate = useNavigate()

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:async(values)=>{
      delete values.phone_number
      if(Object.keys(errors).length === 0){
        await axios.post('http://localhost:3000/auth/register',values)
        .then((response)=>{
          if(response.data.status === 1){
            toast.dismiss();
            toast.success(response.data.message,{
              position:"top-right"
            })
            setTimeout(()=>{
              navigate('/login')
            },1000)
          }else{
            toast.dismiss();
            toast.error(response.data.message,{
              position:"top-right"
            })
          }
        })
        .catch((error)=>{
          if(error.response.data.status === 0){
            toast.dismiss();
            toast.error(error.response.data.message,{
              position:"top-right"
            })
          }
        })
      }
    }
  });


  return (
    <div className='main-registration'>
      <div className='form-box'>
        <div>
          <button className='back-button' onClick={() => navigate('/')}>&#8592;</button>
        </div>
        <div className='form-class'>
        <form className='registrationForm' onSubmit={handleSubmit}>
            <div className='formInput'>
              <label>First Name:<br></br></label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='first_name' placeholder='Enter your first name' value={values.first_name} />
                  {errors.first_name && touched.first_name ? <p className='form-error'>{errors.first_name}</p> : null}
            </div>
            <div className='formInput'>
              <label>Last Name:<br></br> </label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='last_name' placeholder='Enter your last name' value={values.last_name} />
              {errors.last_name && touched.last_name ? <p className='form-error'>{errors.last_name}</p> : null}
            </div>
            <div className='formInput'>
              <label>Number:<br></br>
              </label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='phone_number' placeholder='Enter your number' value={values.phone_number} />
              {errors.phone_number && touched.phone_number ? <p className='form-error'>{errors.phone_number}</p> : null}
            </div>
            <div className='formInput'>
              <label>Email:<br></br> </label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='email' placeholder='Enter your email' value={values.email} />
                {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
            </div>
            <div className='formInput'>
              <label>Password:<br></br> </label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='password' placeholder='Enter your password' value={values.password} />
              {errors.password && touched.password ? <p className='form-error'>{errors.password}</p> : null}
            </div>
            <div className='submit-button'>
              <button type='submit'>Submit</button>
            </div>
          </form>
      <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Registration