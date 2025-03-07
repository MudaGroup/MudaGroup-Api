'use strict';

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/buildings',
            handler: 'building.find',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/buildings/:id',
            handler: 'building.findOne',
            config: {
                auth: false,
            },
        },
        {
            method: 'POST',
            path: '/buildings',
            handler: 'building.create',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/buildings/:id',
            handler: 'building.update',
            config: {
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/buildings/:id',
            handler: 'building.delete',
            config: {
                auth: false,
            },
        },
    ],
};