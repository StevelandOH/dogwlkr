'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Routes',
            [
                {
                    title: 'Stair Climb',
                    mapImg:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routePhotos/route-photo-1.jpg',
                    photo:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routeImages/route-1-4-87.jpg',
                    description:
                        'Was a long one with a huge stair case up from a creek, Reg was worn out!',
                    distance: 4.87,

                    userId: 1,
                },
                {
                    title: 'Big Creek',
                    mapImg:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routeImages/route-2-0-74.jpg',
                    photo:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routePhotos/route-photo-2.jpg',
                    description: 'Lots of ducks to chase around!!',
                    distance: 0.74,

                    userId: 1,
                },
                {
                    title: "Squire's Castle",
                    mapImg:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routeImages/route-3-1-24.jpg',
                    photo:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routePhotos/route-photo-3.jpg',
                    description:
                        'Giant feilds to run around in and throw the frisbee, Reg was in heaven',
                    distance: 1.24,

                    userId: 1,
                },
                {
                    title: 'The Edge',
                    mapImg:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routeImages/route-4-0-41.jpg',
                    photo:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routePhotos/route-photo-4.jpg',
                    description: 'Beautiful views from this stunning cliffside',
                    distance: 0.41,

                    userId: 1,
                },
                {
                    title: 'Sandy Banks',
                    mapImg:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routeImages/route-5-2-68.jpg',
                    photo:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/routePhotos/route-photo-5.jpg',
                    description:
                        'Reg got all muddy loving life rolling in sand running through the river',
                    distance: 2.68,

                    userId: 1,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Routes', null, {});
    },
};
