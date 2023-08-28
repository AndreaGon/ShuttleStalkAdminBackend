import RouteController from "./route.controller.js";
import RouteRouter from "./route.router.js";
import RouteService from "./route.service.js";

const routeService = new RouteService();
const routeController = new RouteController(routeService);
const routeRouter = new RouteRouter(routeController);

export default {
    service: routeService,
    controller: routeController,
    router: routeRouter.getRouter()
}