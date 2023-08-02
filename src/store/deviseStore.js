import {makeAutoObservable} from "mobx";

export class DeviseStore {
  constructor() {
    this._types = []
    this._brands = []
    this._devises = []
    this._selectedType = {}
    this._selectedBrand = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }

  setSelectedType(type) {
    this.setPage(1)
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this.setPage(1)
    this._selectedBrand = brand
  }

  setPage(page) {
    this._page = page
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount
  }

  setLimit(limit) {
    this._limit = limit
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevise(devises) {
    this._devises = devises
  }

  get page() {
    return this._page
  }

  get totalCount() {
    return this._totalCount
  }

  get limit() {
    return this._limit
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devises() {
    return this._devises
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }

}