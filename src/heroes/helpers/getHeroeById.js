import {heroes} from '../data/heroes';

export const getHeroeById = ( id ) => {

    return heroes.find( (heroe) => {
        return heroe.id === id;
    });

}