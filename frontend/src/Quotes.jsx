import React, { useState } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [ text, setText ] = useState("");
  const [ author, setAuthor ] = useState("");

  const getQuote = () => {
    axios.get("http://localhost:8080/", { crossdomain: true
    }).then((response) => {
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  };

  return (
    <div className='flex flex-col justify-center w-3/4 ml-auto mr-auto bg-white mt-10 p-10 rounded-xl shadow-lg border-2'>
      <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto mr-auto p-20 mb-10'
      onClick={getQuote}>
        Generate Quote
      </button>
      <h1 className='text-center text-2xl font-medium'>{text}</h1>
      {!author ? null : <h1 className='text-center text-xl font-medium'>- {author}</h1>}
    </div>
  )
}

export default Quotes;