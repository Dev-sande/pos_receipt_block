/** @odoo-module */

import { ReceiptScreen } from "@point_of_sale/app/screens/receipt_screen/receipt_screen";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";

patch(ReceiptScreen.prototype, {
    setup() {
        super.setup(...arguments);
        this.dialog = useService("dialog");
    },

    async printReceipt() {
        const order = this.pos.get_order();
        
        // 1. Check if it has already been printed
        if (order && order.print_count > 0) {
            this.dialog.add(AlertDialog, {
                title: "Print Restricted",
                body: "This receipt has already been printed. Reprints are blocked for security purposes.",
            });
            return false; // Abort printing
        }

        // 2. Execute normal print action
        const isPrinted = await super.printReceipt(...arguments);

        // 3. If printing was successful, increment the counter
        if (isPrinted && order) {
            order.print_count += 1;
        }
        
        return isPrinted;
    }
});