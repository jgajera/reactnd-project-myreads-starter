const Book = (props) => {
    let imageCatch = props.book.imageLinks ?
        props.book.imageLinks.thumbnail :
        '';

    return (
        <div className="book">
              <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url("${imageCatch}'`
                }}
              />
          <div className="book-shelf-changer">
            <select
              onChange={(event)=>props.moveShelves(
                props.book, event.target.value
              )}
              defaultValue={props.currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    );
}


export default Book;