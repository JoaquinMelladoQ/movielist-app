import React, {useState, createContext} from 'react'


export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Machuca',
            price: '$10.990',
            id: 787877
        },
        {
            name: 'Una mujer fantastica',
            price: '$10.990',
            id: 787876
        },
        {
            name: 'El bosque de Karadima',
            price: '$10.990',
            id: 787875
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
