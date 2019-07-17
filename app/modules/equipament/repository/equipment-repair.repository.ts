import { EquipmentModel } from '../schemas/equipment.schema';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request } from 'express';



class Repository {
    public route: RoutePathService = routerPathService;

    async create(req: Request) {
        try {
     
            const id: any = req.body.equipment_id;
       

            const res = await EquipmentModel.findOne({ _id: id })
                .then(async equipment => {
                    equipment.repairs.push(req.body)
                    const data = await equipment.save().then(
                        eq => {
                            return eq;
                        }
                    );
                    return { status: 200, data: data };
                })
                .catch(error => {
                    return { status: 500, data:error };
                })

            return res;
        } catch (e) {
            console.log('Error on Insert new Repair to Equipment', e);
        }
    }
}


export default new Repository();
