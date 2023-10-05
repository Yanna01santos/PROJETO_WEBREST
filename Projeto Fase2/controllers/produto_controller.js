const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');


router.get('/', async (req, res) => { // LISTAR TODOS
  res.json(await Produto.find());
});

router.get('/:id', async (req, res) => { // LISTA 1 PELO ID
  res.json(await Produto.findById(req.params.id));
});

router.post('/', async (req, res) => { // CADASTRAR O PRODUTO
  res.json(await new Produto(req.body).save());
});

router.put('/:id', async (req, res) => { // ALTERAR UM PELO ID
  res.json(await Produto.findByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => { // APAGAR 1 PELO ID
  res.json(await Produto.findByIdAndRemove(req.params.id));
});

module.exports = router;