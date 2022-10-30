import './static/css/Base.css'
import './static/css/Login.css'
import {useNavigate} from "react-router-dom";

function Login(props) {
    let nevigate = useNavigate()

    const redirectToTrend = () => {
        nevigate("/trend")
    }

    return (
        <div className="login-box">
            <div className="login-box-title">
                <h2>로그인</h2>
            </div>
            <div className="login-box-content">
                <div className="form-box">
                    <h3>아이디</h3>
                    <input className="input" id="id" />
                    <h3>비밀번호</h3>
                    <input className="input" id="pw" type="password"/>
                    <input className="btn normal-btn login-btn" onClick={redirectToTrend} ></input>
                </div>
            </div>
        </div>
    )
}

export default Login;