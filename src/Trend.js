import './static/css/Base.css';
import Content from "./blocks/Content";
import ThreeButtonGroup from "./blocks/ThreeButtonGroup";
import BookList from "./blocks/BookList";
import Main from "./Main";
import {useNavigate} from "react-router-dom";

function Trend(props) {
    let navigate = useNavigate()

    const redirectToAll = () => {
        navigate("/all")
    }

    // use rest api to get all book lists
    const books = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        }
    ]

    const Header = (
        <>
            <h1 className="titleText"> 실시간 인기 도서 </h1>
        </>
    );

    const Body = (
        <>
            <BookList books={books} limitPage={1}/>
            <div className="content-box-content-footer">
                <div className="btn" style={{"marginRight": "auto"}} onClick={redirectToAll}>전체보기</div>
                <ThreeButtonGroup />
            </div>
        </>
    );

    return (
        <Content siteHeader={Header} siteBody={Body}/>
    )
}

export default Trend;