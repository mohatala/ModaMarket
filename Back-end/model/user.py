#!/usr/bin/python3
""" holds class User"""

from os import getenv
from sqlalchemy import Column, String, Date
from sqlalchemy.orm import relationship
from hashlib import md5


class User():
    """Representation of a user """
    __tablename__ = 'users'
    email = Column(String(128), nullable=False)
    password = Column(String(128), nullable=False)
    first_name_User = Column(String(128), nullable=True)
    last_name_User = Column(String(128), nullable=True)
    dateofbirth_User = Column(Date, nullable=True)
    phone = Column(String(128), nullable=True)
    adresse = Column(String(128), nullable=True)
    places = relationship("Place", backref="user")
    reviews = relationship("Review", backref="user")

    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)

    def __setattr__(self, name, value):
        """sets a password with md5 encryption"""
        if name == "password":
            value = md5(value.encode()).hexdigest()
        super().__setattr__(name, value)
