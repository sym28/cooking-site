import { Link } from 'react-router-dom'

// styles
import './RecipeList.css'
import deleteIcon from '../assets/delete_black_24dp.svg'

import { useTheme } from '../hooks/useTheme'
import { db, deleteDoc, doc} from '../firebase/config'

export default function RecipeList({recipes}) {
    const {mode} = useTheme()

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'recipes', id))
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className={`recipe-list`}>
            {!recipes.length && <div>no results found</div>}
            {recipes.map((recipe) => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime}</p>
                    {recipe.method && <p>{recipe.method.slice(0, 60)}...</p>}
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    
                    <img
                        className='delete'
                        src={deleteIcon} 
                        alt="delete recipe" 
                        onClick={() => handleDelete(recipe.id)}
                    />
                </div>
        ))}
        </div>
    )
}
