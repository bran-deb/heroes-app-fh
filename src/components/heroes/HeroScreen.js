import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {
    //extrae los argumentos que viene en el url
    const { heroeId } = useParams()

    const hero = getHeroById(heroeId)
    console.log(hero)
    //si el url no es valido se va a la pagina principal
    if (!hero) {
        return <Navigate to='/' />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
