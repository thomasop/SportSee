import React from 'react'
import { DisplayKeyDataProptype } from '../Type/proptype/PropTypes'

const DisplayKeyData: React.FC<DisplayKeyDataProptype> = ({data, unit, image, type, name}) => {
  return (
    <div className='DisplayKeyData'>
      <img className='DisplayKeyData__img' src={`../assets/${image}`} alt="" />
      <div className='DisplayKeyData__div'>
        <p className='DisplayKeyData__p DisplayKeyData__p--font'>{data}{unit}</p>
        <p className='DisplayKeyData__p'>{name}</p>
      </div>
    </div>
  )
}

export default DisplayKeyData