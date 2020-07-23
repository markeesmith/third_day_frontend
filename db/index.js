require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

client.connect()
    .then(() => console.log("Successfully Connected."))
    .then(() => client.query("SELECT NOW()"))
    .then((res) => console.log(res.rows))
    .catch(e => console.log(e))
    .finally(() => client.end());