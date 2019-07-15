import { Router } from 'express';
import EquipmentSearchController from '../controllers/equipment-search.controller';



export const EquipmentSearchRoutes = Router();

EquipmentSearchRoutes.get('/:search', EquipmentSearchController.search)

