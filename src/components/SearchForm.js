import React,{useState} from 'react'

const SearchForm = ({searchText}) => {
    const[text,setText] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault();

      searchText(text)
     
    }
  

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input  type="text"  placeholder='Search News Here' className='py-1 px-2 rounded-l-lg' onChange={(e) => setText(e.target.value)}/>
            <button type='submit' className='bg-blue-600 py-2 px-2 rounded-r-lg text-white'>Submit</button>
        </form>
    </div>
  )
}

export default SearchForm