import '../static/css/Base.css'
import {useNavigate} from "react-router-dom";

// https://react.vlpt.us/basic/05-props.html
function BookList(props) {
    const navigate = useNavigate()
    const limitPage = props.limitPage
    const books = props.books

    const redirectToShow = (page) => {
        navigate("/show/" + page)
    }

    // https://codingbroker.tistory.com/123
    const renderBooks = () => {
        const results = []
        // 5개마다 렌더링하겠지만, 최소 1페이지는 보여주자는 마인드. 그렇지만 limit개 까지만...
        const perPage = 5
        let lines = Math.max(1, Math.ceil(books.length / perPage))

        if(lines >= limitPage && limitPage !== 0)
            lines = limitPage

        for(let line = 0; line < lines; line++) {
            const subResults = []
            for(let x = 0; x < perPage; x++) {
                const index = line * perPage + x;

                console.log(index)
                if(index < books.length) { // 렌더링 가능한 경우만 사용
                    subResults.push(<div className="book" key={index.toString()} onClick={() => redirectToShow(index)}></div>)
                } else {
                    subResults.push(<div className="book" key={index.toString()}/>)
                }
            }
            results.push(
                <div className="five-books" key={"line" + line}>
                    {subResults}
                </div>
            )
        }

        return results
    }

    return (
        <div className="content-box-content-body">
            <div className="scroll-box scroll-design">
                {renderBooks()}
            </div>
        </div>
    )
}

export default BookList;