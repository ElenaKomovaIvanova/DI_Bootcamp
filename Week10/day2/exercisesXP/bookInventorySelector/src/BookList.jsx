import {useDispatch, useSelector} from "react-redux";
import {selectBooks, selectFantasyBooks, selectHorrorBooks, selectScienceFictionBooks} from "./features/selectors.js";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const BookList = () => {
    const [booksToShow, setBooksToShow] = useState([]);

    const allBooks = useSelector(selectBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const scienceFictionBooks = useSelector(selectScienceFictionBooks);

    const handleAllBooks = () => {
        setBooksToShow(allBooks);
    }

    const handleHorrorBooks = () => {
        setBooksToShow(horrorBooks);
    }

    const handleFantasyBooks = () => {
        setBooksToShow(fantasyBooks);
    }

    const handleScienceFictionBooks = () => {
        setBooksToShow(scienceFictionBooks);
    }


    return (
        <div className='container mt-4'>
            <h3>Books:</h3>
            <div className="btn-group mb-3" role="group">
                <button className ='btn btn-outline-success' onClick={handleAllBooks}>All Books</button>
                <button className ='btn btn-outline-success' onClick={handleHorrorBooks}>Horror Books</button>
                <button className ='btn btn-outline-success' onClick={handleFantasyBooks}>Fantasy Books</button>
                <button className ='btn btn-outline-success' onClick={handleScienceFictionBooks}>Science Books</button>
            </div>
            <div className="row">
                {booksToShow.map(book => (
                    <div className="col" key={book.id}>
                        <div className="card bg-light-subtle">
                            <div className="card-body bg-warning-subtle">
                                <h5 className="card-title ">{book.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Author: {book.author}</h6>
                                <p className="card-text">Genre: {book.genre}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BookList;