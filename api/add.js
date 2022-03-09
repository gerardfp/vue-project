import { auth } from 'express-oauth2-jwt-bearer';

import { PSDB } from 'planetscale-node';

const conn = new PSDB('main')


export default async function handler(req, res) {   

    req.is = () => false;

    await auth()(req, res, (e) => {});

    if (req.auth === undefined) {
        res.status(401).send();
        return;        
    }
    
    const email = req.auth.payload['https://my-awesome-namespace.com/user'].email;
    const picture = req.auth.payload['https://my-awesome-namespace.com/user'].picture;
    
    const { contenido } = req.query;

    const [rows, fields] = await conn.query(`insert into comentarios(contenido, email, picture) values ('${contenido}','${email}','${picture}')`);
    res.send(rows);
};