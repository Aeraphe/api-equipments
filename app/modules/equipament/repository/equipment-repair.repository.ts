import { EquipmentModel, ParentEquipmentRepairModel } from '../schemas/equipment.schema';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request } from 'express';
import { from, Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';


class Repository {
    public route: RoutePathService = routerPathService;

    async create(req: Request) {
        try {
            console.log(req.body)
            const id: any = req.body.equipment_id;
            let parent = new ParentEquipmentRepairModel(req.body);

            const res = await EquipmentModel.findOne({ _id: id })
                .then(async equipment => {
                    equipment.repairs.push(parent)
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
