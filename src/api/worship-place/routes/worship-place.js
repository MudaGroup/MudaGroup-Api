"use strict";

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/worship-places",
            handler: "worship-place.find",
            config: {
                auth: false,
            },
        },
        {
            method: "GET",
            path: "/worship-places/:id",
            handler: "worship-place.findOne",
            config: {
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/worship-places",
            handler: "worship-place.create",
            config: {
                auth: false,
            },
        },
        {
            method: "PUT",
            path: "/worship-places/:id",
            handler: "worship-place.update",
            config: {
                auth: false,
            },
        },
        {
            method: "DELETE",
            path: "/worship-places/:id",
            handler: "worship-place.delete",
            config: {
                auth: false,
            },
        },
    ],
};
