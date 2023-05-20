import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-purple-gradient rounded-lg font-poppins font-medium text-[18px] text-white outline-none hover-button ${styles}`}>
      Get Started
    </button>
  )
}

export default Button