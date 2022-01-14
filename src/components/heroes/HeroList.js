import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
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
