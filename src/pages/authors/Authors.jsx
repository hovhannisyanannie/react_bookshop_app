import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { Image } from 'antd';
import "./authors.css";


const Authors = () => {

  const [books, setBooks] = useState([]);
  const [search, setSearch]=useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const getBooks = async () => {
        setLoading(true);

        const response = await fetch ("https://uninterested-jade-sheep.cyclic.app/books");
            setBooks(await response.json());
            setLoading(false);
    }
    getBooks();

}, []);


  return (
    <div className="authors">
        <div className="container">
          <div className="search-box">
              <input 
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              type="text" 
              placeholder="Search Authors" />
          </div>
          
          <div className="authors-box">
              {
                  loading?<Loading />
                  :books
                  .filter(author=>author.authors.toLowerCase().includes(search))
                  .map(author=>
                      <div className="author" key={author.index}>
                        <Image src={author.author_image} alt={author.authors} className="author-img"/>
                        <h2>{author.authors}</h2>
                      </div>    
              )}
          </div>
        </div>
    </div>
  )
}

export default Authors 


