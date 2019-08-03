import * as React from 'react'
// import * as THREE from 'three'

export interface AppProps {
  hoge: string
}

const Thing = (props: AppProps) => {
  const {
    hoge
  } = props
  return(
    <div>{hoge}</div>
  )
}
export default Thing

