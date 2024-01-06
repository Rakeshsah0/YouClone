import React, { useState } from 'react'
import { DefaultUserIcon } from '../utils/constants'

const User = () => {
    const [UserDetails, setUserDetails] = useState('')
  return (
    <div >
        <DefaultUserIcon sx={{ color: '#fff'}}/>
    </div>
  )
}

export default User