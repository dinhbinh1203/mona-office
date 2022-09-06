// import { useState } from 'react';

// import { signUpStart } from '../../store/user/user.action';
// import { useDispatch } from 'react-redux';
// import Button from '../../components/Button/Button';

// const initialValue = {
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// function Register() {
//   const [formFields, setFormFields] = useState(initialValue);
//   const { displayName, email, password, confirmPassword } = formFields;
//   const dispatch = useDispatch();

//   const resetFormFields = () => {
//     setFormFields(initialValue);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert('passwords do not match');
//       return;
//     }

//     try {
//       dispatch(signUpStart(email, password, displayName));
//       resetFormFields();
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         alert('Cannot create user, email already in use');
//       } else {
//         console.log('user creation encountered an error', error);
//       }
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <div>
//       <p>Bạn chưa có tài khoản</p>
//       <span>Sign up with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <p>Display Name</p>
//         <input
//           name="displayName"
//           placeholder="Display name"
//           type="text"
//           required
//           onChange={handleChange}
//           value={displayName}
//         ></input>
//         <p>Email</p>
//         <input
//           name="email"
//           placeholder="Enter email"
//           type="email"
//           required
//           onChange={handleChange}
//           value={email}
//         ></input>
//         <p>Nhập password</p>
//         <input
//           name="password"
//           placeholder="Enter password"
//           type="password"
//           required
//           onChange={handleChange}
//           value={password}
//         ></input>
//         <p>COnfirm password</p>
//         <input
//           name="confirmPassword"
//           placeholder="Enter password"
//           type="password"
//           required
//           onChange={handleChange}
//           value={confirmPassword}
//         ></input>

//         <Button primary type="submit">
//           ĐĂNG KÝ
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Register;
import FormSigUp from '../../components/FormSignUp/FormSignUp';
function Register() {
  return (
    <div className="grid wide">
      <FormSigUp />
    </div>
  );
}

export default Register;
