import './static/css/Base.css';
import Content from "./blocks/Content";
import Main from "./Main";
import BookList from "./blocks/BookList";
import ThreeButtonGroup from "./blocks/ThreeButtonGroup";

function My() {
    const changeBtnType = () => {
        let now = document.getElementsByClassName('btn-sort')[0];
        if (now.innerHTML == "별 표시만") {
            now.innerHTML = "최신순";
            now.style.backgroundColor = "#BA8889"
        } else {
            now.innerHTML = "별 표시만";
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
        <h1 className="titleText"> 내가 작성한 도서 </h1>
    );

    const Body = (
        <>
            <BookList books={books} limitPage={0}/>
            <div className="content-box-content-footer">
                <div className="btn btn-sort" onClick={changeBtnType} style={{"marginRight": "auto"}}>별 표시만</div>
                <ThreeButtonGroup/>
            </div>
        </>
    );

    return (
        <Content siteHeader={Header} siteBody={Body}/>
    )
}

export default My;