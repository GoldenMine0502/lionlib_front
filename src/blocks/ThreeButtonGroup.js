import '../static/css/Base.css'
import {useNavigate} from "react-router-dom";

function ThreeButtonGroup(props) {
    const navigate = useNavigate()

    const redirectTo = (link) => {
        navigate(link)
    }

    return (
        <div className="btn-group">
            <div className="btn btn-left" onClick={() => redirectTo('/trend')}>인기</div>
            <div className="btn btn-center" onClick={() => redirectTo('/my')}>MY</div>
            <div className="btn btn-right" onClick={() => redirectTo('/new')}>기록</div>
        </div>
    )
}

export default ThreeButtonGroup;