import { Request, Response, Router } from 'express';
import EquipmentController from '../modules/equipament/controllers/equipment.controller';

export const EquipmentRoutes = Router();

EquipmentRoutes.post('/', EquipmentController.create);






let router = Router();


// Not Found
router.get('/', function (req: Request, res: Response) {
res.send('Rota não encontrada')
});


// Define the Core routes (Demilitarized Zone)
router.use(
    '/equipament',
    EquipmentRoutes
);

export default router;
