"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartDto = void 0;
const openapi = require("@nestjs/swagger");
class cartDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { coupon: { required: true, type: () => String }, price: { required: true, type: () => Number }, itemname: { required: true, type: () => String }, totalprice: { required: true, type: () => Number } };
    }
}
exports.cartDto = cartDto;
//# sourceMappingURL=cart-dto.dto.js.map