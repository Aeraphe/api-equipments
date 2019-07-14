"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var equipament_schema_1 = require("../schemas/equipament.schema");
var rxjs_1 = require("rxjs");
var EquipamentRepository = /** @class */ (function () {
    function EquipamentRepository() {
    }
    EquipamentRepository.prototype.create = function (req) {
        var Equipament = new equipament_schema_1.EquipamentModel(req.body);
        return rxjs_1.from(Equipament
            .save()
            .then(function (record) {
            var response = { status: 200, record: record };
            return response;
        })
            .catch(function (error) {
            var response = { status: 500, error: error };
            return response;
        }));
    };
    return EquipamentRepository;
}());
exports.EquipamentRepository = EquipamentRepository;
exports.default = new EquipamentRepository();
//# sourceMappingURL=equipament.repository.js.map