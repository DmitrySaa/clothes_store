import { makeAutoObservable } from "mobx"

export default class ClothesStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Верхняя одежда'},
            {id: 2, name: 'Нижняя одежда'},
            {id: 3, name: 'Обувь'}
        ]
        this._brands = [
            {id: 1, name: 'The North Face'},
            {id: 2, name: 'Nike'},
            {id: 3, name: 'Гоша Рубчинский'},
            {id: 4, name: 'Adidas'}
        ]
        this._clothes = [
            {id: 1, name: 'Футболка белая', price: 5990, raiting: 5},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setClothes(clothes) {
        this._clothes = clothes
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get clothes() {
        return this._clothes
    }
}