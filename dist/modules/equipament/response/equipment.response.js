"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../../../core/response");
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super.call(this) || this;
    }
    Response.prototype.create = function (req, data, type) {
        switch (type) {
            case 'create':
                return this.createEquipment(req, data);
                break;
            default:
                break;
        }
    };
    Response.prototype.createEquipment = function (req, data) {
        if (data.status != 200) {
            return __assign({ message: 'Não foi possível cadastrar o Equipamento' }, data);
        }
        return {
            message: 'Equipamento cadastrado com sucesso!!!',
            status: data.status,
            data: [
                __assign({}, data)
            ],
            url: this.route.getRoute(req)
        };
    };
    return Response;
}(response_1.AeroResponse));
exports.default = new Response();
//# sourceMappingURL=equipment.response.js.map