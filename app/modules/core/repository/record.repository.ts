import { EquipamentModel } from '../schemas/equipament.schema';
import { Request } from 'express';
import { Observable, from } from 'rxjs';
import { EquipamentContract } from '../contract/equipament.contract';

interface IResponse {
    status: number;
    record?: EquipamentContract;
    error?: any;
}

export class EquipamentRepository {

    create(req: Request): Observable<IResponse> {
        const Equipament = new EquipamentModel(req.body);

        return from(
            Equipament
                .save()
                .then(record => {
                    const response: IResponse = { status: 200, record };
                    return response;
                })
                .catch(error => {
                    const response: IResponse = { status: 500, error };
                    return response;
                })
        );
    }
}

export default new EquipamentRepository();
