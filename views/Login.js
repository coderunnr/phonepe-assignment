import Header from './components/Header.js';
import Input from './components/Input.js';
import Button from './components/Button.js';
import TextButton from './components/TextButton.js';

const Login = () => {
  const onLoginClick = () => {
    if (document.getElementById('login-username').value && document.getElementById('login-password').value) {
      window.location.assign('/#search');
      return;
    }
    alert('Please fill Username and Password');
  }

  const onSignupClick = () => {
    window.location.assign('/#signup');
  }

  const header = Header('LOGIN TO APP');
  const username = Input('Username', 'login-username');
  const password = Input('Password', 'login-password', 'password');
  const login = Button('Login', onLoginClick, 'login-btn');
  const forgotpass= TextButton('Forgot Password ?', () => {},  'forgot-password');
  const signupbtn = TextButton('Register Now', onSignupClick, 'signup-btn');

  return{
    render: `
    ${header.render}
    <section class="login-container">
      ${username.render}
      ${password.render}
      ${forgotpass.render}
      ${login.render}
    </section>
    <section class="auth-secondary-action">
      <span>Don't have an account ?</span>
      ${signupbtn.render}
    </section>
  `,
    afterRender: () => {
      username.afterRender();
      password.afterRender();
      forgotpass.afterRender();
      login.afterRender();
      signupbtn.afterRender();
    }
  }
};

export default Login;
