import React from 'react'
import { Container } from 'react-bootstrap'
import { SkyHeader } from 'lib'

export default function SkyPage(props) {
  return (
    <Container fluid className="p-0 page">
      <SkyHeader />
      {props.children}
    </Container>
  )
}
