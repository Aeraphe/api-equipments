import { Request, Response, Router } from 'express';
import EquipmentController from '../modules/equipament/controllers/equipment.controller';

export const EquipmentRoutes = Router();

EquipmentRoutes.post('/', EquipmentController.create);



let router = Router();


// Not Found
router.get('/', function (req: Request, res: Response) {
    res.send('Rota da API de Equipamentos')
});


// Define the Core routes (Demilitarized Zone)
router.use(
    EquipmentRoutes
);

export default router;
