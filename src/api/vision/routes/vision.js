module.exports = {
    type: "content-api",
    routes: [
      { method: "GET", path: "/visions", handler: "vision.find" },
      { method: "GET", path: "/visions/:id", handler: "vision.findOne" },
      { method: "POST", path: "/visions", handler: "vision.create" },
      { method: "PUT", path: "/visions/:id", handler: "vision.update" },
      { method: "DELETE", path: "/visions/:id", handler: "vision.delete" },
    ],
  };  