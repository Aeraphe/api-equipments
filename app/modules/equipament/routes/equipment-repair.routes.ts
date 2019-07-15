import { Router } from 'express';

import { EquipRepairController } from '../controllers/equipment-repair.controller';



export const EquipRepairRoutes = Router();

EquipRepairRoutes.post('/', EquipRepairController.create)

