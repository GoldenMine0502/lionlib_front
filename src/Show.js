import './static/css/Base.css';
import Content from "./blocks/Content";
import Main from "./Main";
import BookList from "./blocks/BookList";
import ThreeButtonGroup from "./blocks/ThreeButtonGroup";

// https://ej2.syncfusion.com/react/documentation/textbox/how-to/set-the-read-only-textbox/
function Show(props) {
    const Header = (
        <>
            <h1 className="titleText more"> 도서 제목 </h1>
            <h2 className="subtitleText">yyyy.mm.dd ~ yyyy.mm.dd</h2>
        </>
    );

    const Body = (
        <>
            <div className="content-box-content-body">
                <div className="writing-box">
                    <div className="book" style={{"backgroundImage": "static/images/sample_book.png"}}></div>
                    <textarea readOnly={true} className="writing-area scroll-design">
                            멍게는 엄밀히 말해(어쨌든 오늘날 분류학자들에 따르면) 척추동물은 아니지만, 척삭이라는 척추와 비슷한 구조물을 가장 먼저 선구적으로 갖춘 생물 중 하나다.
                        </textarea>
                </div>
            </div>
            <div className="content-box-content-footer">
                <div style={{"marginRight": "auto"}}></div>
                <div className="btn-group">
                    <div className="btn btn-left">수정하기</div>
                    <div className="btn btn-right" onClick="history.back()">뒤로가기</div>
                </div>
            </div>
        </>
    );

    return (
        <Content siteHeader={Header} siteBody={Body}/>
    )
}

export default Show;