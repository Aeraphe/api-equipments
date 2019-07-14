import { Request, Response, Router } from 'express';
import EquipamentController from '../modules/equipament/controllers/equipament.controller';

export const EquipamentRoutes = Router();

EquipamentRoutes.post('/', EquipamentController.create);






let router = Router();


// Not Found
router.get('/', function (req: Request, res: Response) {
res.send('Rota não encontrada')
});


// Define the Core routes (Demilitarized Zone)
router.use(
    '/equipament',
    EquipamentRoutes
);

export default router;
