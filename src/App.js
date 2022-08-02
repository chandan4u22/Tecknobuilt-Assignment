import React,{ useState, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import { ThreeDots	 } from  'react-loader-spinner'



const App = () => {
const [articles,setArticles] = useState([])
const [word,setWord] = useState("Breaking News")
const [isLoading,setIsLoading] = useState(true)

useEffect(()=> {
  const fetchAtricles = async () => {
  try{
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
     )
     setIsLoading(true)
     const articles = await res.json()
     console.log(articles.response.docs)
     
     setArticles(articles.response.docs)
     setIsLoading(false)
    }  catch (error) {
      console.error(error);
  }
  }
  fetchAtricles()
},[word])



return(
<>
<div className='showcase'>
<div className='overlay px-5'>
  <h1 className='text-4xl font-bold text-white text-center mb-4 capitalize lg:text-6xl'>All about {word}</h1>
  
  <SearchForm  searchText={(text) => setWord(text)} />
  

</div>
</div>

{isLoading ? (
<div className='mt-20 ml-20 px-25' >
  <ThreeDots	  
    height = "80"
    width = "1400"
    radius = "9"
    color = '#00BFFF'
       
     />
  
   </div> 
) : (
  <section className='grid grid-cols-1 gap-10 px-5 pt-10 pb-20'>
  {articles.map((article)=>{
    const {abstract,
           headline:{main},
           byline:{original},
           lead_paragraph,
           news_desk,
           section_name,
           web_url,
           _id,word_count } = article

    return(
    
      <article key ={_id} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
        
        <h2 className='font-bold text-2xl mb-5 lg:text-4xl'>{main}</h2>
        <p>{abstract}</p>
        <p>{lead_paragraph}</p>

        <ul className='my-4'>
          <li>{original}</li>
          <li>
            < span className='font-bold'>News Desk:</ span>{news_desk}</li>
          <li>
            < span className='font-bold'>Section Name:</ span>{section_name}</li>
          <li>
            < span className='font-bold'>Word Count:</span>{word_count}</li>
        </ul>

        <a href={web_url} target="_blank" className='underline'>
          Web Resource
          </a>

        </article>
    );
  })}
</section>
)  }
</>
    );
  }

export default App;




