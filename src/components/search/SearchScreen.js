import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = () => {
    //lo usamos para nuevas rutas
    const navigate = useNavigate()
    //se usa para obtener datos de la localizacion
    const location = useLocation()
    //usamos la query(q) de la localizacion de la busqueda
    //cuando la query no tiene valor es '' para que no marque error(undefined)
    const { q = '' } = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: q          //inicial state es la query del url de busqueda
    })

    const { searchText } = formValues

    // const heroesFiltered = getHeroesByName(searchText)
    //se renderiza solo cuando preciona el boton y cambia el query(q)
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchText)
        //navegamos a la url de la busqueda
        navigate(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className='alert alert-info'>
                            Search a Hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-danger'>
                            There is no a hero with {q}
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
