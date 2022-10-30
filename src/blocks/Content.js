
import '../static/css/Base.css'
import '../static/css/MainBase.css'

function Content(props) {
    return (
        <div className="content-box">
            <div className="content-box-title">
                {props.siteHeader}
            </div>
            <div className="content-box-content">
                {props.siteBody}
            </div>
        </div>
    );
}

export default Content;