import { Router } from 'express';
import { EquipmentRoutes } from './modules/equipament/routes/equipament.routes'
import { EquipmentSearchRoutes } from './modules/equipament/routes/equipment-search.routes';
let router = Router();

router.use('/equipment', EquipmentRoutes,
    router.use('/search', EquipmentSearchRoutes)
);


export default router;


