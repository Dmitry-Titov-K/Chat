import RegisterForm from '../components/RegisterForm'
import { withFormik} from 'formik';

export default withFormik({
    mapPropsToValues:()=>({email:''}),
   validate: values=>{
    let errors ={};
    if (!values.email) {
      errors.email = 'Введите ваш Е-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Не правильный формат E-mail';
    }
    if(!values.password){
        errors.password = 'Введите пароль';
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password) )
        errors.password= 'Слишком простой пароль'
    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
  
})(RegisterForm);

