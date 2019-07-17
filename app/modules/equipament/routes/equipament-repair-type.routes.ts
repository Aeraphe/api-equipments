import { Router } from 'express';
import { EquipRepairTypeController } from '../controllers/equipament-repair-type.controller';



export const EquipRepairTypeRoutes = Router();


EquipRepairTypeRoutes.get('/:id', EquipRepairTypeController.findOne);
EquipRepairTypeRoutes.get('/', EquipRepairTypeController.findAll);
EquipRepairTypeRoutes.post('/', EquipRepairTypeController.create);
EquipRepairTypeRoutes.patch('/:id',EquipRepairTypeController.update);
EquipRepairTypeRoutes.delete('/:id',EquipRepairTypeController.delete);
