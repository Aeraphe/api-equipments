"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var equipment_schema_1 = require("../schemas/equipment.schema");
var route_path_service_1 = require("../../../shared/services/route-path.service");
var rxjs_1 = require("rxjs");
var Repository = /** @class */ (function () {
    function Repository() {
        this.route = route_path_service_1.routerPathService;
    }
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
        var _this = this;
        return rxjs_1.from(equipment_schema_1.EquipmentModel.find().then(function (equipment) {
            return res.status(200).json({
                message: 'Operação realizada com sucesso!!!',
                status: 200,
                data: [equipment],
                url: _this.route.getRoute(req)
            });
        }).catch(function (err) {
            if (err) {
                return res.status(404).json({
                    message: 'Não foi possível efetuar a operação',
                    status: 404
                });
            }
        }));
    };
    Repository.prototype.create = function (req) {
        try {
            var tags = req.body.title.split(' ');
            if (tags != null) {
                req.body.tags = __spreadArrays(tags);
            }
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
            return rxjs_1.from(equipment_schema_1.EquipmentModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
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
    Repository.prototype.delete = function (req) {
        try {
            return rxjs_1.from(equipment_schema_1.EquipmentModel.findByIdAndDelete(req.params.id)
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
    Repository.prototype.search = function (req) {
        try {
            var search = req.params.search;
            var userRegex = new RegExp(search, 'i');
            return rxjs_1.from(equipment_schema_1.EquipmentModel.find({ title: userRegex })
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
    return Repository;
}());
exports.default = new Repository();
//# sourceMappingURL=equipment.repository.js.map