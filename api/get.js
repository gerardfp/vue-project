import { PSDB } from 'planetscale-node';

const conn = new PSDB('main')
  
export default async function handler(req, res) {
    const [rows, fields] = await conn.query(`select * from comentarios`);

    res.send(rows);
}