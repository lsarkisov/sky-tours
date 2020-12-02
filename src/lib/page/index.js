import React from 'react'
import { Container } from 'react-bootstrap'

export default function SkyPage(props) {
  return (
    <Container fluid className="p-0 page">
      {props.children}
    </Container>
  )
}
