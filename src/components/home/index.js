import React from 'react'
import { Container } from 'react-bootstrap'
import People from 'components/people'

export default function Home(props) {

  return (
    <Container fluid className="home">
      <People />
    </Container>
  )
}
