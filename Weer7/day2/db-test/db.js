import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();
const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env;
// console.log(process.env);

console.log(PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT);

const db = knex({
    client: 'pg',
    connection: {
        host : PGHOST,
        port : PGPORT,
        user : PGUSER,
        password : PGPASSWORD,
        database : PGDATABASE,
        ssl : {rejectUnauthorized: false}
    }
});


async function getVervion(){
    const result = await db.raw('select version()');
    console.log(result.raws);
    // await db.destroy();
}
getVervion();