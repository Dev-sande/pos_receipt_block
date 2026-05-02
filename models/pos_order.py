from odoo import models, fields, api

class PosOrder(models.Model):
    _inherit = 'pos.order'

    print_count = fields.Integer(string="Print Count", default=0, readonly=True)

    @api.model
    def _order_fields(self, ui_order):
        # Extend the default method to capture our custom JS field
        fields = super(PosOrder, self)._order_fields(ui_order)
        fields['print_count'] = ui_order.get('print_count', 0)
        return fields