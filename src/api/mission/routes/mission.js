module.exports = {
    type: "content-api",
    routes: [
      { method: "GET", path: "/missions", handler: "mission.find" },
      { method: "GET", path: "/missions/:id", handler: "mission.findOne" },
      { method: "POST", path: "/missions", handler: "mission.create" },
      { method: "PUT", path: "/missions/:id", handler: "mission.update" },
      { method: "DELETE", path: "/missions/:id", handler: "mission.delete" },
    ],
  };  