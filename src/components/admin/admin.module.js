import AdminController from "./admin.controller.js";
import AdminRouter from "./admin.router.js";
import AdminService from "./admin.service.js";

const adminService = new AdminService();
const adminController = new AdminController(adminService);
const adminRouter = new AdminRouter(adminController);

export default {
    service: adminService,
    controller: adminController,
    router: adminRouter.getRouter()
}