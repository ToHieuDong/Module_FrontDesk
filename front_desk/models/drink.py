from odoo import models, fields

class Drink(models.Model):  # Sử dụng PascalCase cho tên lớp
    _name = 'front_desk.drink'
    _description = 'Drinks'

    drink_name = fields.Char(string='Drink Name', required=True)
    drink_image = fields.Image(string='Drink Image')

    name = fields.Char(string='Name', related='drink_name', store=True)