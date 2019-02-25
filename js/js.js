var planets =   {
    "name": "Alderaan", 
    "rotation_period": "24", 
    "orbital_period": "364", 
    "diameter": "12500", 
    "climate": "temperate", 
    "gravity": "1 standard", 
    "terrain": "grasslands, mountains", 
    "surface_water": "40", 
    "population": "2000000000", 
    "residents": [
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/68/", 
        "https://swapi.co/api/people/81/"
    ], 
    "films": [
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-10T11:35:48.479000Z", 
    "edited": "2014-12-20T20:58:18.420000Z", 
    "url": "https://swapi.co/api/planets/2/"
}


var main = document.getElementById("tr1");

planets.residents.forEach(element => {
        var new_P = document.createElement("td");
        var doc = document.createTextNode(element);
        new_P.appendChild(doc);
        main.appendChild(new_P);
        console.log(element);
    })
    // temp.forEach(element => {
        //     console.log(element);
        // });