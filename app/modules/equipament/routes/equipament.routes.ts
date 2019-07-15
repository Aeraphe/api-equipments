import { Router } from 'express';
import EquipmentController from '../controllers/equipment.controller';


export const EquipmentRoutes = Router();

EquipmentRoutes.get('/:id', EquipmentController.findOne);
EquipmentRoutes.get('/', EquipmentController.findAll);
EquipmentRoutes.post('/', EquipmentController.create);
EquipmentRoutes.patch('/:id',EquipmentController.update);
EquipmentRoutes.delete('/:id',EquipmentController.delete);




