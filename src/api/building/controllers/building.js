'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const fs = require('fs');
const path = require('path');

module.exports = createCoreController('api::building.building', ({ strapi }) => ({
    // Get All Buildings
    async find(ctx) {
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },

    // Get Building by ID
    async findOne(ctx) {
        return await super.findOne(ctx);
    },

    // Create New Building with Image Upload
    async create(ctx) {
        try {
            const { name, desc, project_status, project_location, address } = ctx.request.body;

            if (!ctx.request.files || !ctx.request.files.image) {
                return ctx.badRequest('Image is required');
            }

            const image = ctx.request.files.image;

            // Check file type and size
            const allowedExtensions = ['.png', '.jpg', '.jpeg'];
            const fileSizeLimit = 10 * 1024 * 1024; // 10 MB

            const fileExt = path.extname(image.name).toLowerCase();
            if (!allowedExtensions.includes(fileExt)) {
                return ctx.badRequest('Invalid image format');
            }
            if (image.size > fileSizeLimit) {
                return ctx.badRequest('Image size must be less than 10 MB');
            }

            // Upload Image
            const uploadedFile = await strapi.plugins['upload'].services.upload.upload({
                data: { ref: 'building', refId: null, field: 'image' },
                files: image,
            });

            // Save to DB
            const newBuilding = await strapi.entityService.create('api::building.building', {
                data: {
                    name,
                    desc,
                    project_status,
                    project_location,
                    address,
                    image: uploadedFile[0].id, // Relasikan image
                },
            });

            return newBuilding;
        } catch (error) {
            return ctx.internalServerError(error);
        }
    },

    // Update Building
    async update(ctx) {
        return await super.update(ctx);
    },

    // Delete Building
    async delete(ctx) {
        return await super.delete(ctx);
    },
}));