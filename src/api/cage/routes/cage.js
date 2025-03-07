"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cages",
      handler: "cage.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/cages/:id",
      handler: "cage.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/cages",
      handler: "cage.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/cages/:id",
      handler: "cage.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/cages/:id",
      handler: "cage.delete",
      config: {
        auth: false,
      },
    },
  ],
};
