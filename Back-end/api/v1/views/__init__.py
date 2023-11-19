#!/usr/bin/python3

from flask import Blueprint
app_views = Blueprint('app_views', __name__)
from views.categorie import *
from views.product import *
from views.order import *
from views.product_photo import *
from views.review import *
from views.user import *
