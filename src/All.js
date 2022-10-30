import Content from "./blocks/Content";
import ThreeButtonGroup from "./blocks/ThreeButtonGroup";
import './static/css/Base.css'
import BookList from "./blocks/BookList";

function All(props) {
    const changeButtonType = () => {
        let now = document.getElementsByClassName('btn-sort')[0];
        if( now.innerHTML == "최신순"){
            now.innerHTML = "인기순";
            now.style.backgroundColor = "#BA8889"
        }else{
            now.innerHTML = "최신순";
            now.style.backgroundColor = "rgba(221, 200, 189, 1)"
        }
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
        <h1 className="titleText"> 모두의 서재 </h1>
    );

    const Body = (
        <>
            <BookList books={books} limit={0}/>
            <div className="content-box-content-footer">
                <div className="btn btn-sort" onClick={changeButtonType} style={{"marginRight": "auto"}}>최신순</div>
                <ThreeButtonGroup />
            </div>
        </>
    );

    return (
        <Content siteHeader={Header} siteBody={Body}/>
    )
}

export default All;