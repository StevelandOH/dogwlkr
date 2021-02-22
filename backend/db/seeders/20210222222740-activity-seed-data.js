'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Activities',
            [
                {
                    petId: 1,
                    type: 'Walk',
                    date: '2/22/21',
                    time: '5:31 p',
                    distance: '2.3 m',
                    focus: 'Worked on road boundries',
                    duration: '25:00',
                    notes:
                        'He did really well and is slowly starting to rightfully be afraid of cars',
                },
                {
                    petId: 1,
                    type: 'Training',
                    date: '2/22/21',
                    time: '4:31 p',
                    focus: 'Worked on hide and seek sniff training',
                    duration: '15:00',
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
