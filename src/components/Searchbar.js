import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import './Searchbar.css'

export default function Searchbar() {
    const navigate = useNavigate()

    const [searchText, setSearchText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${searchText}`)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input
                type="text"
                id='search'
                onChange={(e) => setSearchText(e.target.value)}
                required
                />
            </form>
        </div>
    )
}
