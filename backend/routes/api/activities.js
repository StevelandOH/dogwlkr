const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Pet } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req);
        const {
            type,
            date,
            time,
            actDistance,
            focus,
            duration,
            notes,
            dogName,
            userId,
        } = req.body;
        const pet = await Pet.findOne({ where: { name: dogName } });
        const activity = await Activity.create({
            type: type,
            date: date,
            time: time,
            actDistance: actDistance,
            focus: focus,
            duration: duration,
            notes: notes,
            petId: pet.id,
            userId: userId,
        });
        return res.json(activity);
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        console.log(req);
        const id = parseInt(req.params.id, 10);
        const activities = await Activity.findAll({ where: { userId: id } });
        return res.json(activities);
    })
);
module.exports = router;
