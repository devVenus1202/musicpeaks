const routes = require('next-routes')();
const routeConfig = require('./config/routeConfig');

const { Link, Router } = routes;

Object.keys(routeConfig).forEach(routeName => routes.add(routeConfig[routeName]));

exports.Link = Link;
exports.Router = Router;

module.exports = routes;
