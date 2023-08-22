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

    getDriverByEmail = (req, res) => {
        const { email } = req.params;
        this.driverService.getDriverByEmail(email).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    registerDriverAccount = (req, res) => {
        const driver = new Driver(req.body.fullname, req.body.icNumber, req.body.email, req.body.password);
        return res.status(201).send(this.driverService.registerDriverAccount(driver));
    }

    deleteDriver = (req, res) => {
        const { id, email } = req.params;
        console.log("HELLO")
        return res.status(200).send(this.driverService.deleteDriver(id, email));
    }

}

export default DriverController;