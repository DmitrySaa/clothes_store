import { makeAutoObservable } from "mobx"

export default class ClothesStore {
    constructor() {
        this._types = [  
        ]
        this._brands = [
        ]
        this._clothes = [
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
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
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }
    setTotalCount(count){
        this._totalCount = count
    }
    setPage(page){
        this._page = page
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}