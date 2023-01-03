import Modal from "../../components/modal/Modal"
import "./product.css";


const ProductList = ({books, addToCart ,openModal,HandleModal,bookData,setOpenModal} ) => {

  return (
    <div id='productList'>   
        {
            books.map((item, index)=>{

              return (
                <div className='productItem' key={index}>
                  <div className="image">
                    <img src={item.image_url} alt={item.title} />
                  </div>
                  <div className="button-div">
                    <button className='btn' onClick={()=>HandleModal(item)}> View</button>
                    <button className='btn' onClick={ ()=> addToCart (item) }>Add to Cart</button>
                  </div>
                  {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} item={item}/> }
                </div>
              )})
        }
    </div>
  )
}

export default ProductList