import Driver from './driver.entities.js'

//Messaging
const topic = 'announcements';

class DriverController {
    constructor(driverService){
        this.driverService = driverService;
    }

    getAllDrivers = (_, res) => {
        this.driverService.getAllDrivers().then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    registerDriverAccount = (req, res) => {
        const driver = new Driver(req.body.fullname, req.body.icNumber, req.body.email, req.body.password);
        return res.status(201).send(this.driverService.registerDriverAccount(driver));
    }

}

export default DriverController;