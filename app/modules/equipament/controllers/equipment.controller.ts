import EquipmentRepository from '../repository/equipment.repository';
import EquipmentResponse from '../response/equipment.response';
import { Request, Response } from 'express';


class Controller {
    create(req: Request, res: Response) {
        try {
            EquipmentRepository.create(req).subscribe(equipment => {
                const data = EquipmentResponse.create(req, equipment, 'create');
                res.status(data.status).json(data);
            });
        } catch (e) {
            console.log('Error on Create Record: ', e);
        }
    }

    findOne(req: Request, res: Response) {
        try {
            EquipmentRepository.get(req).subscribe(
                data => {
                    res.status(data.status).json(data.equipment);
                }
            )
        } catch (e) {
            console.log('Error on Find Record: ', e);
        }
    }


    findAll(req: Request, res: Response) {
        try {
            EquipmentRepository.getAll(req,res).subscribe(
                data => {
                    res.status(data.status).json(data.equipment);
                }
            )
        } catch (e) {
            console.log('Error on Find all Record: ', e);
        }
    }


    update(req: Request, res: Response) {
        try {
            EquipmentRepository.update(req).subscribe(
                data => {
                    res.status(data.status).json(data.equipment);
                }
            )
        } catch (e) {
            console.log('Error on Update Record: ', e);
        }
    }

    delete(req: Request, res: Response) {
        try {
            EquipmentRepository.delete(req).subscribe(
                data => {
                    res.status(data.status).json(data.equipment);
                }
            )
        } catch (e) {
            console.log('Error on Delete Record: ', e);
        }
    }


}

export default new Controller();
