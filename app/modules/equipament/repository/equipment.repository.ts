import { EquipmentModel } from '../schemas/equipment.schema';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request, Response } from 'express';
import { from, Observable } from 'rxjs';


class Repository {
    public route: RoutePathService = routerPathService;

    get(req: Request): Observable<any> {
        try {
            const id: any = req.params.id;

            return from(
                EquipmentModel.findOne({ _id: id })
                    .then(equipment => {
                        return { status: 200, equipment };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error on get equipment', e);
        }
    }

    getAll(req: Request, res: Response): Observable<any> {
        return from(
            EquipmentModel.find().then(

                equipment => {

                    return res.status(200).json({
                        message: 'Operação realizada com sucesso!!!',
                        status: 200,
                        data: [equipment],
                        url: this.route.getRoute(req)
                    });
                }
            ).catch(err => {
                if (err) {
                    return res.status(404).json({
                        message: 'Não foi possível efetuar a operação',
                        status: 404
                    });
                }
            })
        );

    }

    create(req: Request): Observable<any> {
        try {
            const tags = req.body.title.split(' ');
            if (tags != null) {
                req.body.tags = [...tags];
            }
            const Equipament = new EquipmentModel(req.body);
            return from(
                Equipament
                    .save()
                    .then(equipment => {
                        return { status: 200, equipment };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    }

    update(req: Request): Observable<any> {
        try {
            return from(
                EquipmentModel.findByIdAndUpdate(req.params.id,
                    { $set: req.body },
                    { new: true }
                )
                    .then(equipment => {
                        return { status: 200, equipment };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error:', e);
        }
    }

    delete(req: Request): Observable<any> {
        try {
            return from(
                EquipmentModel.findByIdAndDelete(req.params.id)
                    .then(equipment => {
                        return { status: 200, equipment };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error:', e);
        }
    }

    search(req: Request): Observable<any> {
        try {

            const search: any = req.params.search;
            const userRegex = new RegExp(search, 'i')

            return from(
                EquipmentModel.find({ title: userRegex })
                    .then(equipment => {
                        return { status: 200, equipment };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error on get equipment', e);
        }
    }



}

export default new Repository();
