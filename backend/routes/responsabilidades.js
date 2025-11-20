const express = require('express');
const router = express.Router();
const responsabilidadesController = require('../controllers/responsabilidadescontroller');

// CRUD Responsabilidades
router.get('/', responsabilidadesController.listar);
router.post('/', responsabilidadesController.agregar);
router.put('/:id', responsabilidadesController.editar);
router.delete('/:id', responsabilidadesController.eliminar);

module.exports = router;
