import { useRef, useState} from 'react'
import {useNavigate} from 'react-router'
import {collection, addDoc, db} from '../../firebase/config'


// style
import './Create.css'


export default function Create() {

    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [ingrid, setIngrid] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingridInput = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            title,
            method,
            cookingTime: cookingTime + ' minutes',
            ingredients
        }
        try {
            const docRef = await addDoc(collection(db, 'recipes'), userData)
            console.log(docRef)
            navigate('/')
        } catch(err) {
            console.log(err)
        }
        
    }

    const handleIngredients = (e) => {
        e.preventDefault()
        // check if same ingrid is not already in array
        if(ingrid && !ingredients.includes(ingrid)) {
            setIngredients(prevState =>  [...prevState, ingrid.trim()] )
        }
        setIngrid('')
        ingridInput.current.focus()
    }

    
    
    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>

                <label>
                    <span>Ingredients:</span>
                    <div className="ingredients">
                        <input
                        onChange={(e) => setIngrid(e.target.value)}
                        type="text" 
                        value={ingrid}
                        ref={ingridInput}
                        />
                        <button onClick={handleIngredients} className='btn'>Add</button>
                    </div>
                </label>
                <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Recipe Method:</span>
                    <textarea value={method} onChange={(e) => setMethod(e.target.value)} required />
                </label>
                <label>
                    <span>Cooking Time (minutes)</span>
                    <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}


