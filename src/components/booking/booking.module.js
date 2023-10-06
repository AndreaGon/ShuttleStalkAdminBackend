import BookingController from "./booking.controller.js";
import BookingService from "./booking.service.js";
import BookingRouter from "./booking.router.js";

const bookingService = new BookingService();
const bookingController = new BookingController(bookingService);
const bookingRouter = new BookingRouter(bookingController);

export default {
    service: bookingService,
    controller: bookingController,
    router: bookingRouter.getRouter()
}