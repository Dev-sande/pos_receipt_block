{
    'name': 'POS Print Limit',
    'version': '18.0.1.0.0',
    'category': 'Sales/Point of Sale',
    'summary': 'Restrict POS receipt printing to one time only.',
    'depends': ['point_of_sale'],
    'data': [],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_print_limit/static/src/app/models.js',
            'pos_print_limit/static/src/app/receipt_screen.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}