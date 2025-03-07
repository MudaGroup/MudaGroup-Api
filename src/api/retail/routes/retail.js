"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/retails",
      handler: "retail.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/retails/:id",
      handler: "retail.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/retails",
      handler: "retail.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/retails/:id",
      handler: "retail.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/retails/:id",
      handler: "retail.delete",
      config: {
        auth: false,
      },
    },
  ],
};
