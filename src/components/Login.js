import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from './schema/ValidationSchema'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: ""
  }
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await axios.post('http://localhost:3000/admin/login', values)
        .then((response) => {
          if (response.data.status === 1) {
            localStorage.setItem('authToken', response.data.data.access_token);
            toast.dismiss()
            toast.success(response.data.message, {
              position: "top-right"
            })
            setTimeout(()=>{
              navigate('/dashboard')
            },1000)
          } else {
            toast.dismiss()
            toast.error(response.data.message, {
              position: "top-right"
            })
          }
        })
        .catch((error) => {
          if (error.response.data.status === 0) {
            toast.dismiss()
            toast.error(error.response.data.message, {
              position: "top-right"
            })
          }
        })
    }
  });

  return (
    <div className='main-registration'>
      <div className='form-box'>
        <div>
          <button className='back-button' onClick={() => navigate('/')}>&#8592;</button>
        </div>
        <div className='form-class'>
          <form onSubmit={handleSubmit} className='registrationForm'>
            <div className='formInput'>
              <label>Email: <br></br></label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='email' value={values.email} className='formInput' placeholder='Enter your email' />
              {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
            </div>
            <div className='formInput'>
              <label>Password</label>
              <input onChange={handleChange} onBlur={handleBlur} type='text' name='password' value={values.password} className='formInput' placeholder='Enter your password' />
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

export default Login;