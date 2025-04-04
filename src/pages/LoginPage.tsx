import LoginForm from "../components/auth/LoginForm"
import "../styles/classic.css"

function LoginPage() {
  return (
    <div className="login-page">
      {/* <div className="container"> */}
        {/* <div className="login-container"> */}
          {/* <div className="login-image">
            <img src="/login-image.jpg" alt="Login" /> */}
          {/* </div> */}
          <div className="login-box">
            <LoginForm/>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default LoginPage;