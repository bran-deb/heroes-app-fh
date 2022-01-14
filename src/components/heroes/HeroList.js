import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    //memorizamos y ejecutamos getHeroByPublisher(publisher) si el publisher cambia
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
    // const heroes = getHeroByPublisher(publisher)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
