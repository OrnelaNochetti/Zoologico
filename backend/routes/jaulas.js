const express = require('express');
const router = express.Router();
const jaulasController = require('../controllers/jaulascontroller');

// CRUD Jaulas
router.get('/', jaulasController.listar);
router.post('/', jaulasController.agregar);
router.put('/:id', jaulasController.editar);
router.delete('/:id', jaulasController.eliminar);

module.exports = router;
