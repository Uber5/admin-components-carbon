import React from 'react'

const breakpoints = ['sm', 'md', 'lg', 'xlg', 'max']

export default ({ spec, ...props }) => {
  const specsArray = (spec || '').split(',').filter(s => s.length > 0)
  if (specsArray.length < 1) {
    throw new Error('no spec given, should be  "sm-4,lg-4" or similar.')
  }
  for (const s of specsArray) {
    const parts = s.split('-')
    if (parts.length !== 2) {
      throw new Error(`Invalid spec: ${spec}`)
    }
    if (!breakpoints.includes(parts[0])) {
      throw new Error(`Invalid breakpoint in ${spec}, allowed are: ${breakpoints.join(', ')}`)
    }
    const width = Number(parts[1])
    if (Number.isNaN(width) || width < 1 || width > 16) {
      throw new Error(`Invalid width in spec: ${spec}`)
    }
  }

  const className = specsArray
    .map(s => {
      return `bx--col-${s}`
    })
    .join(' ')
  return <div className={'bx--col-no-padding ' + className} {...props} />
}
