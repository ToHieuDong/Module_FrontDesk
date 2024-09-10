FROM odoo:17.0

USER root

RUN mkhomedir_helper odoo

COPY ./requirements.txt /requirements.txt
RUN pip3 install --upgrade pip && pip3 install -r /requirements.txt

COPY --chown=odoo:odoo ./odoo /usr/bin/odoo

USER odoo
