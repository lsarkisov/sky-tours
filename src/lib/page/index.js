import React from 'react'
import { Container } from 'react-bootstrap'

export default function Page(props) {
  return (
    <Container fluid className="p-0 page">
      {props.children}
    </Container>
  )
}
