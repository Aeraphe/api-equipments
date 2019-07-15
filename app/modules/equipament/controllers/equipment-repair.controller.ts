import EquipmentRepairRepository from '../repository/equipment-repair.repository';
import { Request, Response } from 'express';


class Controller {
   

    async create(req: Request, res: Response) {
        try {
            
         await   EquipmentRepairRepository.create(req).then(
                equipment => {
                    res.status(equipment.status).json(equipment.data);
                }
            )
        } catch (e) {
            console.log('Error on Insert a Record: ', e);
        }
    }



}

export const EquipRepairController = new Controller();
