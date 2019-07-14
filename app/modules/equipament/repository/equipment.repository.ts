import { EquipmentModel } from '../schemas/equipment.schema';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request, Response } from 'express';
import { from, Observable } from 'rxjs';


class Repository {
    public route: RoutePathService = routerPathService;

    create(req: Request): Observable<any> {
        try {
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

    update(req): Observable<any> {
        try {
            return from(
                EquipmentModel.findOneAndUpdate(
                    { _id: req.params.id },
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
    //     /**
    //      * Update equipment Address
    //      * @param req 
    //      */
    //     updateAddress(req): Observable<any> {
    //         try {
    //             return from(
    //                 Company.findOneAndUpdate(
    //                     { _id: req.params.companyId, 'address._id': req.params.addressId },
    //                     { $set: req.body },
    //                     { new: true }
    //                 )
    //                     .then(company => {
    //                         return { status: 200, company };
    //                     })
    //                     .catch(error => {
    //                         return { status: 500, error };
    //                     })
    //             );
    //         } catch (e) {
    //             console.log('Error:', e);
    //         }
    //     }
    //     /**
    //      * Update company Phones
    //      * @param req 
    //      */
    //     updatePhones(req): Observable<any> {
    //         try {
    //             return from(
    //                 Company.findOneAndUpdate(
    //                     { _id: req.params.companyId, 'phones._id': req.params.phonesId },
    //                     { $set: req.body },
    //                     { new: true }
    //                 )
    //                     .then(company => {
    //                         return { status: 200, company };
    //                     })
    //                     .catch(error => {
    //                         return { status: 500, error };
    //                     })
    //             );
    //         } catch (e) {
    //             console.log('Error:', e);
    //         }
    //     }

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

    async getAll(req: Request, res: Response) {
        EquipmentModel.find({}, (err, equipment) => {
            if (err) {
                return res.status(404).json({
                    message: 'Não foi possível efetuar a operação',
                    status: 404
                });
            }
            return res.status(200).json({
                message: 'Operação realizada com sucesso!!!',
                status: 200,
                data: [equipment],
                url: this.route.getRoute(req)
            });
        });
    }

}

export default new Repository();
