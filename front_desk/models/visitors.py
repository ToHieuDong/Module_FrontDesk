# -*- coding: utf-8 -*-

from odoo import models, fields, api


class visitors(models.Model):
    _name = 'front_desk.visitor'
    _description = 'Visitors'

    name = fields.Char(string='Name', required=True)
    # visitor_company = fields.Many2one('res.partner', string='Visitor Company')
    visitor_company = fields.Char(string='Visitor Company')
    phone = fields.Char(string='Phone')
    drink = fields.Char(string='Preferred Drink')
    host = fields.Many2one('res.users', string='Host')
    check_in = fields.Datetime(string='Check-In Time')
    duration = fields.Float(string='Duration (hours)')
    station = fields.Char(string='Station')
    status = fields.Selection([
        ('pending', 'Pending'),
        ('checked_in', 'Checked In'),
        ('checked_out', 'Checked Out'),
        ('cancelled', 'Cancelled')
    ], string='Status', default='checked_in')

    drink_served = fields.Boolean(string='Drink Served', default=False)

    @api.depends('drink_served')
    def action_serve_drink(self):
        for record in self:
            record.drink_served = True

    def action_delete_record(self):
        for record in self:
            record.unlink()  # Xóa bản ghi hiện tại
        return {
            'type': 'ir.actions.act_window_close',
        }

    # @api.model
    # def create_visitor_record(self, name, phone):
    #     # Thực hiện tạo bản ghi mới trong model 'front_desk.visitor'
    #     visitor_data = {
    #         'name': name,
    #         'phone': phone,
    #     }
    #
    #     new_visitor = self.env['front_desk.visitor'].create(visitor_data)
    #     return new_visitor.id


