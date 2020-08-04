import Header from './components/Header.js';
import Input from './components/Input.js';
import Button from './components/Button.js';
import TextButton from './components/TextButton.js';

const inputConfig = [
  [ 'Full Name', 'signup-full-name'],
  [ 'Email ID', 'signup-email-id', 'email'],
  [ 'Mobile Number', 'signup-mobile-number', 'phone'],
  [ 'Password', 'signup-mobile-number', 'password'],
  [ 'Re-enter Password', 'signup-mobile-number', 'password'],
  [ 'Car Model', 'signup-car-model'],
]

const Signup = () => {

  const onRegisterClick = () => {
    window.location.assign('/');
  }

  const onLoginClick = () => {
    window.location.assign('/');
  }

  const header = Header('REGISTER WITH APP');
  const inputs = inputConfig.map((item) => {
    return Input(...item);
  })
  const signup = Button('Register', onRegisterClick, 'register-btn');
  const loginbtn = TextButton('Login Now', onLoginClick, 'register-login-btn');

  return{
    render: `
    ${header.render}
    <section class="login-container">
      ${inputs.map((item) => {
        return item.render;
      }).join('\n')}
      ${signup.render}
    </section>
    <section class="auth-secondary-action">
      <span>Already have an account? </span>
      ${loginbtn.render}
    </section>
  `,
    afterRender: () => {
      inputs.map((item) => {
        return item.afterRender();
      })
      signup.afterRender();
      loginbtn.afterRender();
    }
  }
};

export default Signup;
