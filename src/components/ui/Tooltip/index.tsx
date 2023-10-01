import * as React from 'react'

interface TooltipProps {
  children?: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => (
  <div className="">
    {children}
  </div>
)

export default Tooltip
