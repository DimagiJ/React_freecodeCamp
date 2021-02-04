import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
    img: 'https://www.india.com/wp-content/uploads/2016/12/One-Indian-Girl.jpg',
    title: "One Indian Girl",
    author : "Chetan Bhagat"

}

const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41bChkOa4zL._AC_UL200_SR200,200_.jpg',
    title: "Think Again: The Power of Knowing",
    author : "Adam Grant"

}




const BookList = () => {
    return (
        <section className='booklist'>
            <Book img={firstBook.img}
                  title={firstBook.title}
                  author={firstBook.author} />

                  <Book img={secondBook.img}
                        title={secondBook.title}
                        author={secondBook.author} ><p>Think Again is a must-read for anyone
                                                        who wants to create a culture of learning
                                                        and exploration, whether at home, at work,
                                                        or at school... In an increasingly divided
                                                        world, the lessons in this book are more important than ever.</p></Book>
        </section>
    )
}

//BOOK Object
const Book = (props) => {
    const {img, title, author, children} = props
    return( <article className='book'>
            <img className='img' src={img} alt='' />
            <h1>{title}</h1>
            {children}
            <h4 style={{color:'#617d98', fontSize:'0.75rem'
                , margin:'0.25rem'}}>{author}</h4>



        </article>
        )
};


ReactDom.render(<BookList />, document.getElementById('root'));