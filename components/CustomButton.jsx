import { Button } from '@chakra-ui/react'

const CustomButton = ({text, rightIcon, LeftIcon, size, color, variant, handleClick}) => {
  return (
    <Button 
      colorScheme={color}
      variant={variant}
      onClick={handleClick}
      size={size}
      >
        {LeftIcon && LeftIcon}
        {text}
        {rightIcon && rightIcon}
    </Button>
  )
}

export default CustomButton