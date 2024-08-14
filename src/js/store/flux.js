const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personas: [],
            planetas: [],
            vehiculos: [],
            favorites: []
        },
        actions: {
            exampleFunction: () => {
                getActions().getCharactersInfo();
                getActions().getPlanetsInfo();
                getActions().getVehiclesInfo();
                getActions().addFavorite();
                getActions().removeFavorite();
            },
            getCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/");
                    const data = await response.json();
                    const personas = await Promise.all(data.results.map((character) => getActions().getCharactersInfo(character.uid)));
                    setStore({ personas: personas });
                } catch (error) {
                    console.log(error);
                }
            },
            getCharactersInfo: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    const data = await response.json();
                    return data.result.properties;
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/");
                    const data = await response.json();
                    const planets = await Promise.all(data.results.map((planet) => getActions().getPlanetsInfo(planet.uid)));
                    setStore({ planetas: planets });
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanetsInfo: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    const data = await response.json();
                    return data.result.properties;
                } catch (error) {
                    console.log(error);
                }
            },
            getVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/");
                    const data = await response.json();
                    const vehicles = await Promise.all(data.results.map((vehicle) => getActions().getVehiclesInfo(vehicle.uid)));
                    setStore({ vehiculos: vehicles });
                } catch (error) {
                    console.log(error);
                }
            },
            getVehiclesInfo: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await response.json();
                    return data.result.properties;
                } catch (error) {
                    console.log(error);
                }
            },
            addFavorite: (item) => {
                const store = getStore();
                // if (!store.favorites.some(fav => fav.id === item.id)) {
                //     setStore({ favorites: [...store.favorites, item] });
                // }
                setStore({ favorites: [...store.favorites, item] });
                
            },
      
            // removeFavorite: (item) => {
            //     const store = getStore();
            //     setStore({ favorites: store.favorites.filter(fav => fav.item !== item) });
            // }
            removeFavorite: (itemId) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.name !== itemId) });
            }
            
        }
    };
};
export default getState;
