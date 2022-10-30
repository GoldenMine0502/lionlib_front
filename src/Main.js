import './static/css/Base.css';
import './static/css/Main.css';

import Arrow from './static/images/Arrow.png'
import { useNavigate } from 'react-router-dom';

function Main(props) {
    let navigate = useNavigate()

    const redirectTo = (page) => {
        navigate(page)
    }

    return (
        <div className="auto-position">

            <h1 className="title">사자의 서재</h1>

            <div className="index-box">
                <div className="index-main-item">
                    <div className="login-box">
                        <div className="login-item">
                            <div className="mini-textbox">
                                <h2>로그인</h2>
                            </div>
                            <button className="btn normal-btn login-btn" onClick={() => redirectTo('/login')}>
                                <img src={Arrow} style={{"height": "50%", "marginRight": "11px"}}/>
                            </button>
                        </div>

                        <div className="login-item">
                            <div className="mini-textbox">
                                <h2>회원가입</h2>
                            </div>
                            <button className="btn normal-btn login-btn" onClick={() => redirectTo('/register')}>
                                <img src={Arrow} style={{"height": "50%", "marginRight": "11px"}}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="index-design-flex">
                    <div className="gap" style={{"width": "8px"}}></div>
                    <div className="index-design-item"></div>
                    <div className="index-design-item"></div>
                    <div className="index-design-item"></div>
                    <div className="index-design-item"></div>
                </div>
            </div>


        </div>
    )
}

export default Main;