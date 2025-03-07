module.exports = {
    async find(ctx) {
      return await strapi.entityService.findMany("api::mission.mission", ctx.query);
    },
    async findOne(ctx) {
      return await strapi.entityService.findOne("api::mission.mission", ctx.params.id, ctx.query);
    },
    async create(ctx) {
      return await strapi.entityService.create("api::mission.mission", { data: ctx.request.body });
    },
    async update(ctx) {
      return await strapi.entityService.update("api::mission.mission", ctx.params.id, { data: ctx.request.body });
    },
    async delete(ctx) {
      return await strapi.entityService.delete("api::mission.mission", ctx.params.id);
    },
  };
  