import EquipmentRepository from '../repository/equipment.repository';
import { Request, Response } from 'express';


class Controller {
   

    search(req: Request, res: Response) {
        try {
            console.log('oooooooo')
            EquipmentRepository.search(req).subscribe(
                data => {
                    res.status(data.status).json(data.equipment);
                }
            )
        } catch (e) {
            console.log('Error on Find Record: ', e);
        }
    }



}

export default new Controller();
