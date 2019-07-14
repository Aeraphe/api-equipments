"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var equipment_schema_1 = require("../schemas/equipment.schema");
var route_path_service_1 = require("../../../shared/services/route-path.service");
var rxjs_1 = require("rxjs");
var Repository = /** @class */ (function () {
    function Repository() {
        this.route = route_path_service_1.routerPathService;
    }
    Repository.prototype.create = function (req) {
        try {
            var Equipament = new equipment_schema_1.EquipmentModel(req.body);
            return rxjs_1.from(Equipament
                .save()
                .then(function (equipment) {
                return { status: 200, equipment: equipment };
            })
                .catch(function (error) {
                return { status: 500, error: error };
            }));
        }
        catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    };
    Repository.prototype.update = function (req) {
        try {
            return rxjs_1.from(equipment_schema_1.EquipmentModel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
                .then(function (equipment) {
                return { status: 200, equipment: equipment };
            })
                .catch(function (error) {
                return { status: 500, error: error };
            }));
        }
        catch (e) {
            console.log('Error:', e);
        }
    };
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
    Repository.prototype.get = function (req) {
        try {
            var id = req.params.id;
            return rxjs_1.from(equipment_schema_1.EquipmentModel.findOne({ _id: id })
                .then(function (equipment) {
                return { status: 200, equipment: equipment };
            })
                .catch(function (error) {
                return { status: 500, error: error };
            }));
        }
        catch (e) {
            console.log('Error on get equipment', e);
        }
    };
    Repository.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                equipment_schema_1.EquipmentModel.find({}, function (err, equipment) {
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
                        url: _this.route.getRoute(req)
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return Repository;
}());
exports.default = new Repository();
//# sourceMappingURL=equipment.repository.js.map