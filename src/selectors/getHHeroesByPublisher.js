import { heroes } from '../data/heroes';


export const getHeroByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics']
    //si no incluye los publishers validos retorna error
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher} no es correcto"`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}