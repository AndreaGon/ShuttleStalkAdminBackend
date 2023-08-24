import ShuttleController from "./shuttle.controller.js";
import ShuttleRouter from "./shuttle.router.js";
import ShuttleService from "./shuttle.service.js";

const shuttleService = new ShuttleService();
const shuttleController = new ShuttleController(shuttleService);
const shuttleRouter = new ShuttleRouter(shuttleController);

export default {
    service: shuttleService,
    controller: shuttleController,
    router: shuttleRouter.getRouter()
}