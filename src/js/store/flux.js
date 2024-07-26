const getState = ({ getStore, getActions, setStore }) => {
    return {
      
        store: {
            personas: [
                
            ],
            planetas: [
                
            ],
            vehiculos: [
               
            ],
            favorites:[

            ]
            
        },
        actions: {
            exampleFunction: () => {
                getActions().getCharactersInfo();
                getActions().getPlanetsInfo();
                getActions().getVehiclesInfo();
              },
            // Use getActions to call a function within a fuction
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            getCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/")
                    const data = await response.json();
                    const personas = await Promise.all(data.results.map((character) => getActions().getCharactersInfo(character.uid)));
                    console.log(personas);
                    setStore({ personas: personas });
                } catch (error) {
                    console.log(error);
                }
            },
            getCharactersInfo: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
                    const data = await response.json();
                    // console.log(data.result.properties);
                    return data.result.properties;
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanets: async () => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/`)
                    const data = await response.json();
                    const planets = await Promise.all(data.results.map((planets) => getActions().getPlanetsInfo(planets.uid)));
                    //return data.result.properties;
                    console.log(planets);
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
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/`)
                    const data = await response.json();
                    const vehicles = await Promise.all(data.results.map((vehicles) => getActions().getVehiclesInfo(vehicles.uid)));
                    console.log(vehicles);
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
            
            addFavorites: async () => {

                setStore({ favorites: 1 });
            }
        },
    }
}
export default getState;