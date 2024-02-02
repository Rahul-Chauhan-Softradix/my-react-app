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
  const urlString = window.location.href

  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);

  // Accessing individual parameters
  const param1Value = params.get('redirect_uri');  

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log('------------hello12--------------')
      if (param1Value.indexOf("moneyhabitudes") == -1) {
        await axios.post('https://0eba-61-247-230-182.ngrok-free.app/auth/login', values)
          .then((response) => {
            if (response.data.status === 1) {
              localStorage.setItem('authToken', response.data.code);
              toast.dismiss()
              toast.success(response.data.message, {
                position: "top-right"
              })
              setTimeout(() => {
                window.location.replace(`https://demostore-a8.mybigcommerce.com/login/token/${response.data.code}`)
                //  window.location.replace(`https://community.moneyhabitudes.com/oauth2/callback?code=${response.data.code}`)

              }, 1000)
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
      }else{
        console.log('------------hello--------------')
        await axios.post('https://0eba-61-247-230-182.ngrok-free.app/circle/login', values)
        .then((response) => {
          console.log(response,'--------response----------')
          if (response.data.status === 1) {
            localStorage.setItem('authToken', response.data.code);
            toast.dismiss()
            toast.success(response.data.message, {
              position: "top-right"
            })
            setTimeout(() => {
              // window.location.replace(`https://demostore-a8.mybigcommerce.com/login/token/${response.data.code}`)
               window.location.replace(`https://community.moneyhabitudes.com/oauth2/callback?code=${response.data.code}`)

            }, 1000)
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