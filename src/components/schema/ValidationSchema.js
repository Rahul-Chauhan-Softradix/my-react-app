import * as Yup from 'yup';

export const signupSchema = Yup.object({
    first_name:Yup.string().min(2).max(25).required("Please enter your first name"),
    last_name:Yup.string().min(2).max(25).required("Please enter your last name"),
    email:Yup.string().email().required("Please enter email"),
    phone_number:Yup.string().required("Please enter phone number").matches(/^[0-9]{10}$/,"Phone number is not valid"),
    password:Yup.string().required("Please enter Password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,"Please enter strong password")
})

export const loginSchema = Yup.object({
    email:Yup.string().email().required("Please enter email"),
    password:Yup.string().required("Please enter Password")
})