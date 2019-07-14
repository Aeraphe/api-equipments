import { AeroResponse } from '../../../core/response';
import { Request } from 'express';

class Response extends AeroResponse {
    constructor() {
        super();
    }

    create(req: Request, data: any, type: string) {
        switch (type) {
            case 'create':
                return this.createEquipament(req, data);
                break;
            default:
                break;
        }
    }

    private createEquipament(req: Request, data: any) {
        if (data.status != 200) {
            return {
                message: 'Não foi possível cadastrar o Equipamento',
                ...data
            };
        }
        return {
            message: 'Equipamento cadastrado com sucesso!!!',
            status: data.status,
            data: [
                {
                    ...data
                }
            ],
            url: this.route.getRoute(req)
        };
    }
}

export default new Response();
