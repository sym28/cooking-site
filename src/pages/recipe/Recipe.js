import { useParams } from 'react-router'
import { useTheme } from '../../hooks/useTheme'
import { db, doc, onSnapshot} from '../../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './Recipe.css'


export default function Recipe() {
    const {mode} = useTheme()
    const {id} = useParams()
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [pending, setPending] = useState(false)

    useEffect(() => {
        // realtime update for one doc
        const unsub = onSnapshot(doc(db, 'recipes', id), (doc) => {
            // if data doesnt exists
            if(!doc.exists()) {
                setPending(false)
                setError('no recipe found')
                setData(null)
            } else {
                setData({...doc.data(), id: doc.id})
                setPending(false)
            }
            
        }, (err) => {
            setError(err.message)
            setPending(false)
        })
        return unsub
    }, [id])


    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {pending && <p className='loading'>Loading</p>}
            {data && (
                <>
                    <h2 className='page-title'>{data.title}</h2>
                    <p>Takes {data.cookingTime} to cook.</p>
                    <ul>
                        {data.ingredients.map(ingrid => <li key={ingrid}>{ingrid}</li>)}
                    </ul>
                    <p className="method">{data.method}</p>
                </>
            )}
        </div>
    )
}

