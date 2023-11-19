#!/usr/bin/python3

from flask import Blueprint
app_views = Blueprint('app_views', __name__)
from api.v1.views.categorie import *
from api.v1.views.product import *
from api.v1.views.order import *
from api.v1.views.product_photo import *
from api.v1.views.review import *
from api.v1.views.user import *
