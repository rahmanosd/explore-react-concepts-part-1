// import './Book.css';
// export default function Book({book}){
//     const {name, price} = book
//     return (
//       <div className='book'>
//         <h3>Book Name: {name}</h3>
//         <p>price: {price}</p>
//       </div>
//     )
// }
import './Book.css'
export default function Book({book}){
    return (
        <div className='book'>
            <h1>name : {book.name}</h1>
            <p>price: {book.price}</p>
        </div>
    )
}