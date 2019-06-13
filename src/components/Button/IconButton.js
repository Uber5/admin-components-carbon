import React from 'react'
import { Button, Icon } from 'carbon-components-react'

const IconInButton = ({ icon }) => <Icon
  className='bx--btn__icon'
  icon={icon}
  description='button icon'
/>

const IconButton = ({ icon, ...props }) => {
  if (!icon) {
    return <Button {...props} />
  } else {
    return <Button renderIcon={() => <IconInButton icon={icon} />} {...props} />
  }
}

export default IconButton