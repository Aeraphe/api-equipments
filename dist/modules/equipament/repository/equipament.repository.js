"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var equipment_schema_1 = require("../schemas/equipment.schema");
var route_path_service_1 = require("../../../shared/services/route-path.service");
var rxjs_1 = require("rxjs");
var Repository = /** @class */ (function () {
    function Repository() {
        this.route = route_path_service_1.routerPathService;
        // update(req): Observable<any> {
        //         try {
        //             return from(
        //                 Company.findOneAndUpdate(
        //                     { _id: req.params.id },
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
        //      * Update company Address
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
        //     get(req: Request): Observable<any> {
        //         try {
        //             const id: any = req.params.id;
        //             return from(
        //                 Company.findOne({ _id: id })
        //                     .then(company => {
        //                         return { status: 200, company };
        //                     })
        //                     .catch(error => {
        //                         return { status: 500, error };
        //                     })
        //             );
        //         } catch (e) {
        //             console.log('Error on get company', e);
        //         }
        //     }
        //     async getAll(req: Request, res: Response) {
        //         Company.find({}, (err, company) => {
        //             if (err) {
        //                 return res.status(404).json({
        //                     message: 'Não foi possível efetuar a operação',
        //                     status: 404
        //                 });
        //             }
        //             return res.status(200).json({
        //                 message: 'Operação realizada com sucesso!!!',
        //                 status: 200,
        //                 data: [company],
        //                 url: this.route.getRoute(req)
        //             });
        //         });
        //     }
    }
    Repository.prototype.create = function (req) {
        try {
            var Equipament = new equipment_schema_1.EquipamentModel(req.body);
            return rxjs_1.from(Equipament
                .save()
                .then(function (company) {
                return { status: 200, company: company };
            })
                .catch(function (error) {
                return { status: 500, error: error };
            }));
        }
        catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    };
    return Repository;
}());
exports.default = new Repository();
//# sourceMappingURL=equipament.repository.js.map