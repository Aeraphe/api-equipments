import EquipamentRepository from '../repository/equipament.repository';
import EquipamentResponse from '../response/equipament.response';
import { Request, Response } from 'express';

class Controller {
    create(req: Request, res: Response) {
        try {
            EquipamentRepository.create(req).subscribe(record => {
                const data = EquipamentResponse.create(req, record, 'creste');
                res.status(data.status).json(data);
            });
        } catch (e) {
            console.log('Error on Create Record: ', e);
        }
    }
}

export default new Controller();
