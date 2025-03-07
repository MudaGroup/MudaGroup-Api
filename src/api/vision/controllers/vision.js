module.exports = {
    async find(ctx) {
      return await strapi.entityService.findMany("api::vision.vision", ctx.query);
    },
    async findOne(ctx) {
      return await strapi.entityService.findOne("api::vision.vision", ctx.params.id, ctx.query);
    },
    async create(ctx) {
      return await strapi.entityService.create("api::vision.vision", { data: ctx.request.body });
    },
    async update(ctx) {
      return await strapi.entityService.update("api::vision.vision", ctx.params.id, { data: ctx.request.body });
    },
    async delete(ctx) {
      return await strapi.entityService.delete("api::vision.vision", ctx.params.id);
    },
  };
  