"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var movies_component_1 = require("./components/movies/movies.component");
var movie_component_1 = require("./components/movie/movie.component");
var appRoutes = [
    {
        path: '',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'movie/:id',
        component: movie_component_1.MovieComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map