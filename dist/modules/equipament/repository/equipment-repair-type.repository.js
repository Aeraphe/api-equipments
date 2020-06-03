"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.EquipmentRepairType = void 0;
var equipment_repair_type_schema_1 = require("../schemas/equipment-repair-type.schema");
var Repository = /** @class */ (function () {
    function Repository() {
    }
    Repository.prototype.findById = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var id, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, equipment_repair_type_schema_1.EquipmentRepairTypeSchemaModel.findById(id).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, { status: 200, data: data }];
                                });
                            }); })
                                .catch(function (error) {
                                return { status: 500, data: error };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        console.log('Error on get Record', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, equipment_repair_type_schema_1.EquipmentRepairTypeSchemaModel.find().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, { status: 200, data: data }];
                                });
                            }); })
                                .catch(function (error) {
                                return { status: 500, data: error };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        console.log('Error on Insert new Repair Type', e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.create = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var EquiRepairType, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        EquiRepairType = new equipment_repair_type_schema_1.EquipmentRepairTypeSchemaModel(req.body);
                        return [4 /*yield*/, EquiRepairType.save().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, { status: 200, data: data }];
                                });
                            }); })
                                .catch(function (error) {
                                return { status: 500, data: error };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_3 = _a.sent();
                        console.log('Error on Insert new Repair Type', e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.update = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, equipment_repair_type_schema_1.EquipmentRepairTypeSchemaModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                                .then(function (repairType) {
                                return { status: 200, data: repairType };
                            })
                                .catch(function (error) {
                                return { status: 500, data: error };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_4 = _a.sent();
                        console.log('Error:', e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.delete = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, equipment_repair_type_schema_1.EquipmentRepairTypeSchemaModel.findByIdAndDelete(req.params.id)
                                .then(function (repairType) {
                                return { status: 200, data: repairType };
                            })
                                .catch(function (error) {
                                return { status: 500, data: error };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_5 = _a.sent();
                        console.log('Error:', e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.search = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var search, userRegex, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        search = req.params.search;
                        userRegex = new RegExp(search, 'i');
                        return [4 /*yield*/, equipment_repair_type_schema_1.EquipmentRepairTypeSchemaModel.find({ title: userRegex })
                                .then(function (repairType) {
                                return { status: 200, data: repairType };
                            })
                                .catch(function (error) {
                                return { status: 500, data: error };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_6 = _a.sent();
                        console.log('Error on get Record', e_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Repository;
}());
exports.EquipmentRepairType = new Repository();
//# sourceMappingURL=equipment-repair-type.repository.js.map