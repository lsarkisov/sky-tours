import React from 'react'
import Routes from 'routes'
import { SkyHeader, SkyPage } from 'lib'

export default function App(props) {
  return (
    <SkyPage>
      <SkyHeader />
      <Routes />
    </SkyPage>
  )
}
