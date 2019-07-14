import EquipmentRepository from '../repository/equipment.repository';
import EquipmentResponse from '../response/equipment.response';
import { Request, Response } from 'express';

class Controller {
    create(req: Request, res: Response) {
        try {
            EquipmentRepository.create(req).subscribe(record => {
                const data = EquipmentResponse.create(req, record, 'creste');
                res.status(data.status).json(data);
            });
        } catch (e) {
            console.log('Error on Create Record: ', e);
        }
    }
}

export default new Controller();
