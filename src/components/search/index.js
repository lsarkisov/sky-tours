import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'

export default function Search(props) {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const escapeRegexCharacters = (str) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim())

    if (escapedValue === '') {
      return []
    }

    const regex = new RegExp('^' + escapedValue, 'i')
    const result = props.data.filter((item) => regex.test(item.name))

    if (result.length === 0) {
      return [{ isAddNew: true }]
    }

    return result
  }

  const onChange = (event, { newValue, method }) => {
    setValue(newValue)
  }

  const getSuggestionValue = (suggestion) => {
    if (suggestion.isAddNew) {
      return value
    }

    return suggestion.name
  }

  const renderSuggestion = (suggestion) => {
    if (suggestion.isAddNew) {
      return (
        <span>
          [+] Add new: <strong>{value}</strong>
        </span>
      )
    }

    return suggestion.name
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    props.onSearch(getSuggestions(value))
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
    props.onClear()
  }

  const onSuggestionSelected = (event, { suggestion }) => {
    if (suggestion.isAddNew) {
      console.log('Add new:', value)
    }
    props.onSelected(suggestion)
  }

  const inputProps = {
    placeholder: 'your query here...',
    value,
    onChange,
  }

  return (
    <div className="sky-search">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps}
      />
    </div>
  )
}
