import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card, Spinner } from 'react-bootstrap'
import { getPeopleAction } from 'actions/people'
import Search from 'components/search'

export default function People(props) {
  const [filtered, setFiltered] = useState(null)
  const dispatch = useDispatch()
  const { all } = useSelector((state) => state.people)

  useEffect(() => {
    if (!all) {
      dispatch(getPeopleAction())
    }
  }, [all, dispatch])

  const onSearch = (data) => {
    setFiltered(data)
  }

  const onClear = () => setFiltered(null)

  return (
    <Container className="p-0 people">
      {!all && <Spinner />}
      {all && <Search data={all.results} onSearch={onSearch} onClear={onClear} />}
      {all &&
        (filtered ? filtered : all.results).map((person) => (
          <Card key={`${person.name}-${person.mass}-${person.height}`}>
            <dl>
              <dt>
                <b>name</b> {person.name}
              </dt>
              <dd>
                <b>height</b> {person.height}
              </dd>
              <dd>
                <b>mass</b> {person.mass}
              </dd>
              <dd>
                <b>hair_color</b> {person.hair_color}
              </dd>
              <dd>
                <b>skin_color</b> {person.skin_color}
              </dd>
              <dd>
                <b>eye_color</b> {person.eye_color}
              </dd>
              <dd>
                <b>birth_year</b> {person.birth_year}
              </dd>
              <dd>
                <b>gender</b> {person.gender}
              </dd>
            </dl>
          </Card>
        ))}
    </Container>
  )
}
