const { Db } = require("mongodb");

use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Bob Younger",
        email: "youngbobrules@yahoo.com",
        checkedin: true

    },

    {
        name: "Rob Jones",
        email: "rj@hotmail.co.uk",
        checkedin: false

    },

    {
        name: "Alison Younger",
        email: "Alisony@hotmail.co.uk",
        checkedin: false

    },

])