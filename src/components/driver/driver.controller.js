import Driver from './driver.entities.js'

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
        this.driverService.registerDriverAccount(driver).then((value)=>{
            return res.status(201).send();
        });
    }

    deleteDriver = (req, res) => {
        const { id, email } = req.params;
        return res.status(200).send(this.driverService.deleteDriver(id, email));
    }

}

export default DriverController;