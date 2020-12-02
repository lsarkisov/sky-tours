import React from 'react'
import Pagination from 'react-js-pagination'

export default function SkyPagination(props) {
  const { activePage, itemsCountPerPage = 5, totalItemsCount, onChange } = props
  return (
    <div className="sky-pagination">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        onChange={onChange}
      />
    </div>
  )
}
