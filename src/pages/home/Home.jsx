import { useState, useEffect } from "react";
import ProductList from '../product/ProductList';
import Cart from '../cart/Cart';
import Loading from '../../components/Loading/Loading';
import Pagination from "../../components/pagination/Pagination";
import { HashLink } from 'react-router-hash-link';
import FAQS from "../../components/faq/FAQS";
import Swal from 'sweetalert2';
import { Carousel } from 'antd';
import "./home.css";


const Home = ({Show, handleShow,order, setOrder}) => {

  const [books, setBooks] = useState([]);
  const [openModal, setOpenModal]=useState(false);
  const [bookData, setBookData]=useState(null);
  const [currentPage, setCurrentPage]=useState(1)
  const [loading, setLoading] = useState(false);



  useEffect(() => {
  
    const getBooks = async () => {
        setLoading(true);

        const response = await fetch ("https://odd-teal-dhole-veil.cyclic.app/books")
            setBooks(await response.json());
            setLoading(false);
    }
    getBooks();

}, []);


  const addToCart = item => {
    const itemIndex = order.findIndex( 
      el=> el.id === item.id
    );

    if(itemIndex < 0){
      const newItem = {
        ...item,
        quantity: 1
      };
      setOrder( [...order, newItem] );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        iconColor:'#6c3e06',
        title: 'Your cart has been updated',
        showConfirmButton: false,
        timer: 2000, 
        width: 500,
        padding: '10px',
        color: '#000'
      })

    }else{
      const newOrder = order.map( (el, index)=>{
          if(index === itemIndex){
              return {
                ...el,
                quantity: el.quantity+1
              };
          }else{
            return el;
          }
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        iconColor:'#6c3e06',
        title: 'You added another item from the same book to your card',
        showConfirmButton: false,
        timer: 2500, 
        width: 500,
        padding: '10px',
        color: '#000'
       
      })
      setOrder(newOrder);
    }

}

const removeFromCart = id =>{
  const newOrder = order.filter(el => el.id !== id);
  setOrder(newOrder);
}


const  handleIncrement = id =>{
  const newOrder = order.map(el=>{
    if(el.id === id){
      return {
        ...el,
        quantity: el.quantity+1
      }
    }else{
      return el;
    }

  });
  setOrder(newOrder);
}

const handleDecerement = id =>{
  const newOrder = order.map(el=>{
    if(el.id === id){
      return {
        ...el,
        quantity: el.quantity>1 ? el.quantity-1 : 1
      }
    }else{
      return el;
    }
  });
  setOrder(newOrder);
}


const handleClear=()=>{
  setOrder([]); 
}

  const HandleModal=(book)=>{
    setOpenModal(true);
    setBookData(book);
  }


    const BOOK_PER_PAGE=10;
    const pages=Math.ceil(books.length/BOOK_PER_PAGE);
   
    const indexOfFirst=(currentPage-1)* BOOK_PER_PAGE;
    const indexOfLast=currentPage* BOOK_PER_PAGE;
    const currentBooks=books.slice(indexOfFirst,indexOfLast);

  return (
    <div className="home">
       <div className="container">
      <div className="carousel-text">
        <div className="text">
          <h2>Online bookstore</h2>
          <HashLink smooth
                  to="#productList"
                  className="btn"
                >
                  Learn more
                </HashLink>

        </div>
        <div className="carousel">
           <Carousel autoplay>
                <div className="box"><img src="https://s2982.pcdn.co/wp-content/uploads/2021/09/bookstore-shelves-hero-image.jpg.optimal.jpg" alt="" /></div>
                <div className="box"><img src="https://wallpaperaccess.com/full/124383.jpg" alt="" /></div>
                <div className="box"><img src="https://img.freepik.com/premium-photo/chair-with-books-background-bookshelves-library-background_105428-3837.jpg?w=2000" alt="" /></div>
            </Carousel> 
        </div>
      </div>
      
       {
       Show &&  <Cart 
          order={order} 
          handleIncrement={handleIncrement} 
          handleDecerement={ handleDecerement} 
          removeFromCart={removeFromCart}
          handleShow ={handleShow }
          handleClear={handleClear}
      />
       }

      {
         loading ? <Loading />
        :
        <ProductList books={currentBooks} addToCart ={addToCart} openModal={openModal} HandleModal={HandleModal} bookData={bookData} setOpenModal={setOpenModal} />

       }

    {!loading&& <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}  />}
       </div>
       <FAQS /> 
    </div>
  )
}

export default Home




