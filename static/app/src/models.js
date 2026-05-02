/** @odoo-module */

import { Order } from "@point_of_sale/app/store/models";
import { patch } from "@web/core/utils/patch";

patch(Order.prototype, {
    setup() {
        super.setup(...arguments);
        this.print_count = this.print_count || 0;
    },
    
    export_as_JSON() {
        const json = super.export_as_JSON(...arguments);
        json.print_count = this.print_count;
        return json;
    },
    
    init_from_JSON(json) {
        super.init_from_JSON(...arguments);
        this.print_count = json.print_count || 0;
    }
});