import { Router } from 'express';
import { EquipmentRoutes } from './modules/equipament/routes/equipament.routes'
import { EquipmentSearchRoutes } from './modules/equipament/routes/equipment-search.routes';
import { EquipRepairRoutes } from './modules/equipament/routes/equipment-repair.routes';
import { EquipRepairTypeRoutes } from './modules/equipament/routes/equipament-repair-type.routes';

let router = Router();

router.use('/equipment', EquipmentRoutes,
    router.use('/search', EquipmentSearchRoutes),
    router.use('/repair', EquipRepairRoutes,
        router.use('/type', EquipRepairTypeRoutes)
    )
);


export default router;


