'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Activities',
            [
                {
                    petId: 1,
                    userId: 1,
                    type: 'Walk',
                    date: '2/22/21',
                    time: '5:31 p',
                    distance: '2.3 m',
                    focus: 'Worked on road boundaries',
                    duration: '25 min',
                    notes:
                        'He did really well and is slowly starting to rightfully be afraid of cars',
                },
                {
                    petId: 1,
                    userId: 1,
                    type: 'Training',
                    date: '2/22/21',
                    time: '4:31 p',
                    focus: 'Hide and seek sniff training',
                    duration: '15 min',
                    notes:
                        "It's amazing how he can just find the toys based on their smell!!!",
                },
                {
                    petId: 1,
                    userId: 1,
                    type: 'Walk',
                    date: '2/21/21',
                    time: '4:57 p',
                    distance: '1.3 m',

                    duration: '18 min',
                    notes:
                        'Did really well with responding to commands even with other dogs around',
                },
                {
                    petId: 1,
                    userId: 1,
                    type: 'Training',
                    date: '2/20/21',
                    time: '6:15 p',
                    focus: 'Trim nails',
                    duration: '35 min',
                    notes: 'Went terribly, better luck next time',
                },
                {
                    petId: 1,
                    userId: 1,
                    type: 'Walk',
                    date: '2/18/21',
                    time: '3: p',
                    distance: '3.0 m',
                    duration: '55 min',
                    notes: 'It was a long one and he was a trooper',
                },
                {
                    petId: 2,
                    userId: 1,
                    type: 'Training',
                    date: '2/20/21',
                    time: '9:55 a',
                    focus: 'Rolling over and fetch',
                    duration: '15 min',
                    notes:
                        'Great at rolling over, not great at running after toys...',
                },
                {
                    petId: 2,
                    userId: 1,
                    type: 'Walk',
                    date: '2/17/21',
                    time: '10:11 a',
                    distance: '0.5 m',
                    duration: '18 min',
                    notes:
                        'Little guy was v tired today and really just wanted to chillll',
                },
                {
                    petId: 2,
                    userId: 1,
                    type: 'Training',
                    date: '2/21/21',
                    time: '12:46 p',
                    focus: 'Peeing in the house',
                    duration: '22 min',
                    notes: "...he's peeing in the house as I'm typing this...",
                },
                {
                    petId: 2,
                    userId: 1,
                    type: 'Walk',
                    date: '2/16/21',
                    time: '8:31 p',
                    distance: '..25 m',
                    duration: '10 min',
                    notes:
                        'Getting so goog at staying on one side and not pulling!',
                },
                {
                    petId: 2,
                    userId: 1,
                    type: 'Training',
                    date: '2/16/21',
                    time: '2:00 p',
                    focus: 'Peeing in the house ',
                    duration: '46 min',
                    notes:
                        "It's amazing how he can just find the toys based on their smell!!!",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Activities', {});
    },
};
