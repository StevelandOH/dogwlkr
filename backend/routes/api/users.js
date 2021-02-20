const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("They're telling us you made that email up, try again..."),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage(
            "It may sound petty, but we're going to ask that you're lovely username is longer than four characters ...would've been a cool name though."
        ),
    check('username')
        .not()
        .isEmail()
        .withMessage(
            "Robot Gods say, 'username cannot be an email', we're sorry about that..."
        ),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage(
            "Let's step up our password game a touch... like at least longer than six characters.."
        ),
    handleValidationErrors,
];

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });
        await setTokenCookie(res, user);
        return res.json({
            user,
        });
    })
);

module.exports = router;
