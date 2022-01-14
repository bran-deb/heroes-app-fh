import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {
    //extrae los argumentos que viene en el url
    const { heroeId } = useParams()
    //permite cambiar de rutas
    const navigate = useNavigate();

    // memorizamos y llama getHeroById(heroeId) si [heroeId] cambia
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
    // const hero = getHeroById(heroeId)
    //si el url no es valido se va a la pagina principal
    if (!hero) {
        return <Navigate to='/' />
    }
    //retorna a la pagina anterior
    const handleReturn = () => {
        navigate(-1)
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero
    //url de la imagen
    const imgPath = `../assets/heroes/${heroeId}.jpg`

    return (
        <div className='row mt-5'>
            <div className='clo-4'>
                <img
                    src={imgPath}
                    alt={superhero}
                    className='img-thumbnail'
                />
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>{alter_ego}</b></li>
                    <li className='list-group-item'><b>{publisher}</b></li>
                    <li className='list-group-item'><b>{first_appearance}</b></li>
                </ul>
                <h5>characters</h5>
                <p>{characters}</p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}
