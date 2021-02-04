import React from 'react'
import ReactDom from 'react-dom'
import './index.css'


const books =[
{
    img: 'https://www.india.com/wp-content/uploads/2016/12/One-Indian-Girl.jpg',
    title: "One Indian Girl",
    author : "Chetan Bhagat"

},

{
    img: 'https://images-na.ssl-images-amazon.com/images/I/41bChkOa4zL._AC_UL200_SR200,200_.jpg',
    title: "Think Again: The Power of Knowing",
    author : "Adam Grant"

}
];

//Git TEST
const BookList = () => {
    return (
        <section className='booklist'>
            {books.map((book) =>{
                const {img, title, author} = book;
                return (<Book book={book}></Book>

                        )
            } )}
        </section>
    )
}

//BOOK Object
const Book = (props) => {
    const {img, title, author} = props.book;
    return( <article className='book'>
            <img className='img' src={img} alt='' />
            <h1>{title}</h1>
            <h4 style={{color:'#617d98', fontSize:'0.75rem'
                , margin:'0.25rem'}}>{author}</h4>



        </article>
        )
};


ReactDom.render(<BookList />, document.getElementById('root'));