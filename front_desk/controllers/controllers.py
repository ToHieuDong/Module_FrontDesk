# -*- coding: utf-8 -*-
from odoo import http
import json
import datetime

class FrontDesk(http.Controller):

    # @http.route('/station', type="http", auth='public', website=True)
    # def list(self, **kw):
    #     return http.request.render('front_desk.index')

    @http.route('/station/<model("front_desk.station"):station>', type="http", auth='public', website=True)
    def station(self, station):

        station_data = {
            'name': station.name,
            'kiosk_url': station.kiosk_url,
            'host_selection': station.host_selection,
            'authenticate_guest': station.authenticate_guest,
            'email_required': station.email_required,
            'phone_required': station.phone_required,
            'organization_required': station.organization_required,
            'notify_email': station.notify_email,
            'notify_sms': station.notify_sms,
            'notify_discuss': station.notify_discuss,
            'offer_drinks': station.offer_drinks,
            # 'drinks': [{'drink_name': drink.drink_name, 'drink_image': drink.drink_image} for drink in station.drinks],
            # 'drinks': [{'drink_id': drink.id, 'drink_name': drink.drink_name} for drink in station.drinks],
            'drinks': [drink.id for drink in station.drinks],
            'theme': station.theme,
            'message': station.message,

        }
        station_json = json.dumps(station_data)
        print(station_json)
        return http.request.render('front_desk.index', {
            'station': station_json,
        })




    @http.route('/front_desk/visitor/create', type='json', auth='public', methods=['POST'], csrf=False)
    def create_visitor(self, visitor):

        login = visitor.get('host').get('login')
        # print(login)

        # Fetch the host user record
        host = http.request.env['res.users'].sudo().search([('login', '=', login)], limit=1)

        # Check if the host was found
        if not host:
            visitor_data = {
                'name': visitor.get('name'),
                'visitor_company': visitor.get('visitor_company'),
                'phone': visitor.get('phone'),
                'drink': visitor.get('drink'),
                'check_in': visitor.get('check_in'),
                'duration': visitor.get('duration'),
                'station': visitor.get('station'),
                'status': visitor.get('status'),
                'drink_served': visitor.get('drink_served'),
            }
        else :
            visitor_data = {
                'name': visitor.get('name'),
                'visitor_company': visitor.get('visitor_company'),
                'phone': visitor.get('phone'),
                'drink': visitor.get('drink'),
                'host': host.id,  # Use the ID of the host user
                'check_in': visitor.get('check_in'),
                'duration': visitor.get('duration'),
                'station': visitor.get('station'),
                'status': visitor.get('status'),
                'drink_served': visitor.get('drink_served'),
            }
        print(visitor_data)
        # Sử dụng sudo() để bỏ qua các hạn chế về quyền hạn
        try:
            visitor = http.request.env['front_desk.visitor'].sudo().create(visitor_data)
            return {'status': 'success', 'message': 'Visitor created successfully', 'visitor_id': visitor.id}
        except Exception as e:
            return {'status': 'error', 'message': str(e)}



    @http.route('/front_desk/getHost', type='json', auth='public', methods=['POST'], csrf=False)
    def getHost(self):
        try:
            hosts = http.request.env['res.users'].sudo().search([])
            hosts_data = [{'login': host.login, 'name': host.name} for host in hosts]
            return {'status': 'success', 'message': 'Get host successfully', 'host': hosts_data}
        except Exception as e:
            return {'status': 'error', 'message': str(e)}



    @http.route('/front_desk/getDrink', type='json', auth='public', methods=['POST'], csrf=False)
    def getDrink(self):
        try:
            drinks = http.request.env['front_desk.drink'].sudo().search([])
            print(drinks)
            # drinks_data = [{'id': drink.id, 'name': drink.drink_name, 'img': drink.drink_image} for drink in drinks]
            drinks_data = [{'name': drink.drink_name, 'img': drink.drink_image} for drink in drinks]
            return {'status': 'success', 'message': 'Get host successfully', 'drink': drinks_data}
        except Exception as e:
            return {'status': 'error', 'message': str(e)}
