import React,{useState, useEffect, useContext} from 'react'
import { fetchCategories } from '../UseFetch'
import SearchContext from '../Context/SearchContext'

const CategoryResult=() =>{
    const [searchedFor, setSearchedFor] = useState("")
    const {categoryResults, setCategoryResults} = useContext(SearchContext)
    
    useEffect(() => {
        if (searchedFor !== "") {
          fetchCategories(searchedFor)
            .then((response) => {
              CategoryResult(response.results);
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, [searchedFor,setCategoryResults]);

  

  return (
    <div> <div>
      
    <div>
      {/*{categoryResults.map((result) => (
        <div key={result.id}>
          <img src={result.urls.small} alt={result.alt_description} />
        </div>
      ))}*/}
    </div>
    </div></div>
  )
}

export default CategoryResult