---
to: src/components/<%= path %>/index.tsx
---
import * as React from 'react'

interface <%= name %>Props {
  children?: React.ReactNode
}

const <%= name %>: React.FC<<%= name %>Props> = ({ children }) => (
  <div className="">
    {children}
  </div>
)

export default <%= name %>
