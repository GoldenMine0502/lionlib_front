import './static/css/Base.css'
import './static/css/Login.css'

import {useNavigate} from "react-router-dom";

function Register(props) {
    let navigate = useNavigate()

    const redirectToTrend = () => {
        navigate("/trend")
    }
    return (
        <div className="login-box">
            <div className="login-box-title">
                <h2>회원가입</h2>
            </div>
            <div className="login-box-content">
                <div className="form-box" style={{"marginTop": "70"}}>
                    <h3>아이디</h3>
                    <input className="input" id="id" />
                    <h3>비밀번호</h3>
                    <input className="input" id="pw" type="password"/>
                    <h3>비밀번호 확인</h3>
                    <input className="input" id="pw-check" type="password"/>
                    <input className="btn normal-btn login-btn" style={{"marginTop": "0"}} value="" onClick={redirectToTrend}></input>
                </div>
            </div>
        </div>
    )
}

export default Register;