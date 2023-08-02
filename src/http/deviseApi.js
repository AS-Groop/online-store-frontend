import {$host, $authHost} from "./index.js";

export const createType = async (type)=>{
  const {data} = await $authHost.post('/api/type', type);
  return data
}

export const fetchTypes = async ()=>{
  const {data} = await $host.get('/api/type');
  return data
}

export const createBrand = async (brand)=>{
  const {data} = await $authHost.post('/api/brand', brand);
  return data
}

export const fetchBrands = async ()=>{
  const {data} = await $host.get('/api/brand');
  return data
}

export const createDevise = async (devise)=>{
  const {data} = await $authHost.post('/api/devise', devise);
  return data
}

export const fetchDevises = async (typeId, brandId, page, limit)=>{
  const {data} = await $host.get('/api/devise',{params:{
      typeId, brandId, page, limit
    }});
  return data
}

export const fetchOneDevise = async (id)=>{
  const {data} = await $host.get('/api/devise/'+id);
  return data
}

