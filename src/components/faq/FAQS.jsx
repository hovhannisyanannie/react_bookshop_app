import React,{useState} from 'react';
import { data } from './data';
import FAQ from './FAQ';
import "./faqs.css";


const FAQS = () => {
    const [faqs, setFaqs]=useState(data);

  return (
    <div className='faqs'>
      <div className="container">
        <h2>Frequently Asked Question </h2>
        {faqs.map((faq, index)=> <FAQ key={index} faq={faq} />)}
      </div>
    </div>
  )
}

export default FAQS