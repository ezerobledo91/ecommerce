import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

const Button = ({ prop }) => {
  const [numero, changeNumero] = useState(0)


  return (
    
    <Badge badgeContent={numero} color='primary'>
      <ShoppingCartOutlined onClick={()=>changeNumero(numero +1)}></ShoppingCartOutlined>
    </Badge>
  )
}
export default Button
