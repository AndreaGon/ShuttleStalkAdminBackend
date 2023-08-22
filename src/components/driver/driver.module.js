import DriverController from "./driver.controller.js";
import DriverRouter from "./driver.router.js";
import DriverService from "./driver.service.js";

const driverService = new DriverService();
const driverController = new DriverController(driverService);
const driverRouter = new DriverRouter(driverController);

export default {
    service: driverService,
    controller: driverController,
    router: driverRouter.getRouter()
}