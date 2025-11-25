const express = require('express');
const router = express.Router();
const animalesController = require('../controllers/animalesController');

router.get('/', animalesController.listar);
router.post('/', animalesController.agregar);
router.put('/:id', animalesController.editar);
router.delete('/:id', animalesController.eliminar);
router.get('/buscar', animalesController.buscar);

module.exports = router;
