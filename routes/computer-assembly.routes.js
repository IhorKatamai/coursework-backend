const Router = require('express');
const router = new Router();
const computerAssemblyController = require('../controller/computer-assembly.controller');

router.post('/computer-assemblies', computerAssemblyController.createComputerAssembly);

module.exports = router;
