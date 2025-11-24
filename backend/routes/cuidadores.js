const express = require('express');
const router = express.Router();
const cuidadoresController = require('../controllers/cuidadoresController');

router.get('/', cuidadoresController.listar);
router.post('/', cuidadoresController.agregar);
router.put('/:id', cuidadoresController.editar);
router.delete('/:id', cuidadoresController.eliminar);

module.exports = router;
