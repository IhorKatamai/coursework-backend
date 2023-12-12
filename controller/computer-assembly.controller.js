const db = require('../db');
const { values } = require('pg/lib/native/query');
class ComputerAssemblyController {
    async createComputerAssembly(req, res) {
        const {computerModel, delivery, phoneNumber,
            deliveryAddress, urgent, payment,
            additionalInfo
        } = req.body
        const newComputerAssembly = await db.query('INSERT INTO computerAssemblies(computerModel, delivery, phoneNumber, deliveryAddress, urgent, payment, additionalInfo) values ' +
            '($1, $2, $3, $4, $5, $6, $7) RETURNING *', [computerModel, delivery, phoneNumber, deliveryAddress, urgent, payment, additionalInfo])
        res.json(newComputerAssembly.rows[0]);
    }
}
module.exports = new ComputerAssemblyController();
