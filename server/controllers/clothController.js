const uuid = require('uuid')
const path = require('path')
const { Clothes, ClothesInfo } = require('../models/models')
const ApiError = require('../error/ApiError')


class ClothController {
    // Создание Бренда
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files // запрос картинки
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const clothes = await Clothes.create({ name, price, brandId, typeId, img: fileName })

            if(info) { 
                info = JSON.parse(info);
                info.forEach(element => 
                    ClothesInfo.create({
                        title: element.title,
                        description: element.description,
                        clothId: clothes.id
                    })
                )
            }
            
            return res.json(clothes)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    // Запрос всех Брендов
    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit
        let clothes;
        if (!brandId && !typeId) {
            clothes = await Clothes.findAndCountAll({ limit, offset });
        }
        if (!brandId && typeId) {
            clothes = await Clothes.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandId && !typeId) {
            clothes = await Clothes.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (brandId && typeId) {
            clothes = await Clothes.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        }

        return res.json(clothes); // возвращаем массив одежды
    }
    // Запрос одного какого-бренда и его информации.
    async getOne(req, res) {
        const {id} = req.params;
        const clothes = await Clothes.findOne(
            {
                where: {id},
                include: [{model: ClothesInfo, as: 'info'}]
            },
        )
        return res.json(clothes);
    }
}

module.exports = new ClothController();