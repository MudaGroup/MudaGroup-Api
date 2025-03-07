"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/slide-images",
      handler: "slide-image.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/slide-images/:id",
      handler: "slide-image.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/slide-images",
      handler: "slide-image.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/slide-images/:id",
      handler: "slide-image.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/slide-images/:id",
      handler: "slide-image.delete",
      config: {
        auth: false,
      },
    },
  ],
};
