const pool = require('../config/dbconfig');

class ItemDao 
{
    constructor()
    {
        this.pool = pool
    }

    findAll(req, res)
    {
        pool.query('SELECT items.name, items.price, items.description, category.cat_name, items.rating FROM items INNER JOIN category ON items.category = category.id', (err, rows) => {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log(rows);
                res.send(rows);
            }
        })


    }
}

module.exports = ItemDao;