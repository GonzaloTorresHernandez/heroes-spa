import {heroes} from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (validPublishers.includes(validPublishers)){
        throw new Error(`El ${publisher} no esta permitido`);
    }

    return heroes.filter( (heroe) => {
        return heroe.publisher === publisher;
    });

}