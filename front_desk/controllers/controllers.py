# -*- coding: utf-8 -*-
from odoo import http
import json

class FrontDesk(http.Controller):

    @http.route('/station', type="http", auth='public', website=True)
    def list(self, **kw):
        return http.request.render('front_desk.index')




    @http.route('/station/<model("front_desk.station"):station>', type="http", auth='public', website=True)
    def station(self, station):

        station_data = {
            'name': station.name,
            'host_selection': station.host_selection,
        }
        station_json = json.dumps(station_data)
        print(station_json)
        return http.request.render('front_desk.index', {
            'station': station_json,
        })



