// routes/jaulas.js - CÓDIGO CORREGIDO PARA CommonJS (require/module.exports)

const express = require('express'); // ⬅️ CORRECCIÓN 1: Usar require
const db = require('../db'); // Asumimos que db.js exporta el objeto de conexión
const router = express.Router();

// =======================
// GET todas las jaulas
// =======================
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM jaulas';
    db.query(sql, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

// =======================
// POST nueva jaula
// =======================
router.post('/', (req, res) => {
    const { codigo, ubicacion, capacidad } = req.body;
    const sql = 'INSERT INTO jaulas (codigo, ubicacion, capacidad) VALUES (?, ?, ?)';
    db.query(sql, [codigo, ubicacion, capacidad], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id_jaula: result.insertId, codigo, ubicacion, capacidad });
    });
});

// =======================
// PUT editar jaula
// =======================
router.put('/:id', (req, res) => {
    const { codigo, ubicacion, capacidad } = req.body;
    const sql = 'UPDATE jaulas SET codigo = ?, ubicacion = ?, capacidad = ? WHERE id_jaula = ?';
    db.query(sql, [codigo, ubicacion, capacidad, req.params.id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id_jaula: req.params.id, codigo, ubicacion, capacidad });
    });
});

// =======================
// DELETE eliminar jaula SOLO si está vacía
// =======================
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Verificar si la jaula tiene animales asignados
    const checkSql = 'SELECT COUNT(*) AS total FROM animales WHERE id_jaula = ?';
    db.query(checkSql, [id], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result[0].total > 0) {
            return res.status(400).json({
                message: 'No se puede eliminar la jaula porque tiene animales asignados.'
            });
        }

        // Si está vacía, eliminar
        const deleteSql = 'DELETE FROM jaulas WHERE id_jaula = ?';
        db.query(deleteSql, [id], (err2) => {
            if (err2) return res.status(500).send(err2);
            res.json({ message: 'Jaula eliminada correctamente.' });
        });
    });
});

// =======================
// Alimentación total por jaula (Rutas de Informe)
// =======================
router.get('/alimentacion', (req, res) => {
    const sql = `
        SELECT j.id_jaula, j.codigo, j.ubicacion, j.capacidad,
               SUM(a.alimentacion_diaria) AS total_alimentacion_diaria
        FROM jaulas j
        LEFT JOIN animales a ON j.id_jaula = a.id_jaula
        GROUP BY j.id_jaula, j.codigo, j.ubicacion, j.capacidad
    `;
    db.query(sql, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

// =======================
// Alimentación de una sola jaula
// =======================
router.get('/:id/alimentacion', (req, res) => {
    const sql = `
        SELECT j.id_jaula, j.codigo,
               SUM(a.alimentacion_diaria) AS total_alimentacion_diaria
        FROM jaulas j
        LEFT JOIN animales a ON j.id_jaula = a.id_jaula
        WHERE j.id_jaula = ?
        GROUP BY j.id_jaula, j.codigo
    `;
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result[0] || { id_jaula: req.params.id, codigo: null, total_alimentacion_diaria: 0 });
    });
});

// ⬅️ CORRECCIÓN 2: Usar module.exports
module.exports = router;