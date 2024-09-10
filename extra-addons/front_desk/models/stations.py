# -*- coding: utf-8 -*-

from odoo import models, fields


class Stations(models.Model):
    _name = 'front_desk.station'
    _description = 'Stations'

    name = fields.Char(string="Stations Name", required=True)
    # responsibles = fields.Char(string="Responsibles")
    responsibles = fields.Many2one('res.users', string='Responsibles')
    company_id = fields.Many2one('res.company', string="Company")
    kiosk_url = fields.Char(string="Kiosk URL")
    message = fields.Char(string="Message")
    host_selection = fields.Boolean(string="Host Selection")
    authenticate_guest = fields.Boolean(string="Authenticate Guest")
    email_required = fields.Selection([('none', 'None'), ('optional', 'Optional'), ('required', 'Required')], string="Email")
    phone_required = fields.Selection([('none', 'None'), ('optional', 'Optional'), ('required', 'Required')], string="Phone")
    organization_required = fields.Selection([('none', 'None'), ('optional', 'Optional'), ('required', 'Required')], string="Organization")
    notify_email = fields.Boolean(string="Notify by email")
    notify_sms = fields.Boolean(string="Notify by SMS")
    notify_discuss = fields.Boolean(string="Notify by discuss")
    offer_drinks = fields.Boolean(string="Offer Drinks")
    drinks = fields.Many2many(
        'front_desk.drink',
        'front_desk_station_drink_rel',
        'station_id',
        'drink_id',
        string='Drinks'
    )
    theme = fields.Selection([('light', 'Light'), ('dark', 'Dark')], string="Theme")
