const express = require('express');
const router = express.Router();
const animalesController = require('../controllers/animalescontroller');

// CRUD Animales
router.get('/', animalesController.listar);
router.post('/', animalesController.agregar);
router.put('/:id', animalesController.editar);
router.delete('/:id', animalesController.eliminar);
router.get('/buscar/:nombre', animalesController.buscar);

module.exports = router;
