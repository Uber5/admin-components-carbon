import React from 'react'
import HelloWorld from '../components/hello-world'

export default () => {
  const samples = []
  for (let i = 0; i < 10; i++) {
    samples.push(<HelloWorld name={`Sample ${i}`} />)
  }
  return samples
}
