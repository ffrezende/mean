import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import angularCookies from 'angular-cookies';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/efeitos.css'


const appDirectivas = angular.module('minhasDiretivas', []);
const appServices = angular.module('meusServicos', ['ngResource'])
const app = angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos']);

/* Controllers */
require('./controllers/foto-controller')(app);
require('./controllers/fotos-controller')(app);
require('./controllers/grupos-controller')(app);

// /* Directives */
require('./directives/minhas-diretivas')(appDirectivas);

// /* Services */
require('./services/meus-servicos')(appServices);


app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'});

}]);