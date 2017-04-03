System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
                new pelicula_1.Pelicula(2, "Batman Begins", "Zack Snider", 2015),
                new pelicula_1.Pelicula(3, "El Caballero Oscuro", "Zack Snider", 2016),
                new pelicula_1.Pelicula(4, "Dark Night Rises", "Zack Snider", 2016),
                new pelicula_1.Pelicula(5, "Batman Forever", "Zack Snider", 2016),
                new pelicula_1.Pelicula(6, "La vida de Brian", "Monty Pithon", 1987)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map