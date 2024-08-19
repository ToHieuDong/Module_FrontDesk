# -*- coding: utf-8 -*-
{
    'name': "FrontDesk",

    'summary': "A check-in app records the time and location of users attending events or working, aiding in management and tracking efficiency.",

    'description': """
A check-in app designed to streamline the process of recording time and location for users attending events or workplaces. With features like easy login, real-time check-in/check-out, event management, reminders, and detailed reporting, this app enhances efficiency and accuracy in tracking attendance and participation. Ideal for businesses, event organizers, and HR departments, it simplifies management and ensures precise data collection for analysis and decision-making.
    """,
    'sequence': 15,
    'author': "Gnoodd",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Sales',
    'version': '1.0',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'website'],
    # 'depends': ['base_setup', ],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/menu.xml',
        'views/templates.xml'
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
    'assets': {
        'web.assets_frontend': [
            'front_desk/static/src/components/*/*.js',
            'front_desk/static/src/components/*/*.scss',
            'front_desk/static/src/components/*/*.xml',
            'front_desk/static/src/img/*/*.png',
        ],
    },
    
    'installable': True,
    'application': True,
    'auto_install': False,
}

