"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/profiles",
      handler: "profile.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/profiles/:id",
      handler: "profile.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/profiles",
      handler: "profile.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/profiles/:id",
      handler: "profile.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/profiles/:id",
      handler: "profile.delete",
      config: {
        auth: false,
      },
    },
  ],
};
