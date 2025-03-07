'use strict';

module.exports = {
    kind: 'collectionType',
    collectionName: 'buildings',
    info: {
        singularName: 'building',
        pluralName: 'buildings',
        displayName: 'Building',
    },
    options: {
        draftAndPublish: true,
    },
    attributes: {
        name: {
            type: 'string',
            required: true,
        },
        address: {
            type: 'string',
        },
        description: {
            type: 'text',
        },
        image: {
            type: 'media',
            multiple: false,
            allowedTypes: ['images'],
        },
    },
};