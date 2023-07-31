import React from 'react';

const FilterSelect = ({defaultValue, options, onChange, ...props}) => {
  return (
    <>
      <select {...props} onChange={(e)=>onChange(e.target.value)} className='my-select' >
        <option value="">{defaultValue}</option>
        {options.map(i=>{
          return <option key={i.id} value={i.value}>{i.name}</option>
        })}
      </select>
    </>
  );
}

export default FilterSelect;
