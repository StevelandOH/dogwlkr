const express = require('express');
const asyncHandler = require('express-async-handler');
const { Pet } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req);
        const { name, breed, birthday, userId } = req.body;
        const pet = await Pet.create({
            name: name,
            breed: breed,
            birthday: birthday,
            userId: userId,
        });
        return res.json({ pet });
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const pets = await Pet.findAll({ where: { userId: id } });
        return res.json(pets);
    })
);

module.exports = router;
