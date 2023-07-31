import React, { useState } from 'react';
import FilterSelect from './FilterSelect';
import MyInput from './MyInput';

const PostFilter = ({setFilter, options, filter}) => {
	return (
		<div className='post-filter'>
			<FilterSelect options={options} onChange={selected=>setFilter({...filter, sort: selected})} value={filter.sort} defaultValue='Сортировка'/>
			<MyInput style={{width: '220px'}} value={filter.search} onChange={(e)=>setFilter({...filter, search: e.target.value}) } placeholder="Search..."/>
		</div>
	);
}

export default PostFilter;
