import {useLocation, useParams } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

import {collection, query, where, getDocs, db} from '../../firebase/config'

// style
import './Search.css'

export default function Search() {
    const {searchText} = useParams()

    const getRecipe = async () => {

        const q = query(collection(db, 'recipes'), where('title', 'array-contains', searchText))
        const querySnapshot = await getDocs(q)
     
        querySnapshot.forEach((doc) => {
         console.log(doc.id, " => ", doc.data());
       });

       console.log('running')
    }
    getRecipe()
  


   

    return (
        <div>
            {/* <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading</p>}
            {data && <RecipeList recipes={ data } />} */}
            
        </div>
    )
}
