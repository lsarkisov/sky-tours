import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { getPeopleAction } from 'actions/people'
import { onPersonSelectedAction } from 'actions/person'
import Search from 'components/search'
import { SkySpinner, SkyPagination } from 'lib'

export default function People(props) {
  const [filtered, setFiltered] = useState(null)
  const [page, setPage] = useState(1)
  const history = useHistory()
  const dispatch = useDispatch()
  const { all } = useSelector((state) => state.people)
  const itemsOnPage = 5

  useEffect(() => {
    if (!all) {
      dispatch(getPeopleAction())
    }
  }, [all, dispatch])

  const onSearch = (data) => {
    setFiltered(data)
  }

  const onClear = () => setFiltered(null)

  const onSelected = (person) => {
    dispatch(onPersonSelectedAction(person))
    history.push('/person')
  }

  const onPaginate = (p) => setPage(p)

  return (
    <Container className="p-0 people">
      {!all && <SkySpinner />}
      {all && (
        <Search
          data={all.results}
          onSearch={onSearch}
          onClear={onClear}
          onSelected={onSelected}
        />
      )}
      {all &&
        (filtered
          ? filtered
          : all.results.filter(
              (item, index) => index >= page && index < page + itemsOnPage,
            )
        ).map((person) => (
          <Link
            to="/person"
            key={`${person.name}-${person.mass}-${person.height}`}
            onClick={() => onSelected(person)}
          >
            <Card>
              <dl>
                <dt>
                  <b>name</b> {person.name}
                </dt>
                <dd>
                  <b>gender</b> {person.gender}
                </dd>
              </dl>
            </Card>
          </Link>
        ))}
      {all && (
        <SkyPagination
          activePage={page}
          itemsCountPerPage={itemsOnPage}
          totalItemsCount={filtered ? filtered.length : all.results.length}
          onChange={onPaginate}
        />
      )}
    </Container>
  )
}
