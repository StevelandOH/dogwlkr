const express = require('express');
const asyncHandler = require('express-async-handler');
const { Route } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req);
        const { title, description, userId } = req.body;
        const route = await Route.create({
            title: title,
            description: description,
            userId: userId,
        });
        return res.json({ route });
    })
);

module.exports = router;
