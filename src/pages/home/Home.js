// import { useFetch } from '../../hooks/useFetch'
import { useState, useEffect } from 'react'
import { db, collection, onSnapshot} from '../../firebase/config'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'


export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'recipes'), (snapshot) => {
            // if data doesnt exists
            if(snapshot.empty) {
                setPending(false)
                setError('no recipes found')
            }

            // get all documents from snapshot and set state
            const recipes = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setData(recipes)
            setPending(false)

            // 2nd arg of onSnapshot: error handling
        }, (err) => {
            setError(err.message)
            setPending(false)
        })
        return unsub
    }, [])

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading</p>}
            {data && <RecipeList recipes={data} />}
        </div>

        
    )
}
