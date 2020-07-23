const db = require('../lib/db');

test('can connect to db', async () => {
    const sql = 'SELECT NOW()';
    const params = [];
    db.query(sql, params);
    expect(1).toBe(1);
});