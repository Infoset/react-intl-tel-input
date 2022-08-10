/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/forbid-prop-types */
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import utils from './utils'

import FlagBox from './FlagBox'

export default class CountryList extends Component {
  shouldComponentUpdate(nextProps) {
    const shouldUpdate = !utils.shallowEquals(this.props, nextProps)

    if (shouldUpdate && nextProps.showDropdown) {
      this.listElement.classList.add('v-hide')
      this.setDropdownPosition()
    }

    return shouldUpdate
  }

  setDropdownPosition = () => {
    this.listElement.classList.remove('hide')
    const inputTop = this.props.inputTop
    const windowTop =
      this.props.window.pageYOffset !== undefined
        ? this.props.window.pageYOffset
        : (
            this.props.document.documentElement ||
            this.props.document.body.parentNode ||
            this.props.document.body
          ).scrollTop
    const windowHeight =
      this.props.window.innerHeight ||
      this.props.document.documentElement.clientHeight ||
      this.props.document.body.clientHeight
    const inputOuterHeight = this.props.inputOuterHeight
    const countryListOuterHeight = utils.getOuterHeight(this.listElement)
    const dropdownFitsBelow =
      inputTop + inputOuterHeight + countryListOuterHeight <
      windowTop + windowHeight
    const dropdownFitsAbove = inputTop - countryListOuterHeight > windowTop

    // dropdownHeight - 1 for border
    const cssTop =
      !dropdownFitsBelow && dropdownFitsAbove
        ? `-${countryListOuterHeight - 1}px`
        : ''

    this.listElement.style.top = cssTop
    this.listElement.classList.remove('v-hide')
  }

  appendListItem = (countries, isPreferred = false) => {
    const preferredCountriesCount = this.props.preferredCountries.length

    return countries.map((country, index) => {
      const actualIndex = isPreferred ? index : index + preferredCountriesCount
      const countryClassObj = {
        country: true,
        highlight: this.props.highlightedCountry === actualIndex,
        preferred: isPreferred,
      }
      const countryClass = classNames(countryClassObj)
      const onMouseOverOrFocus = this.props.isMobile
        ? () => {}
        : this.handleMouseOver
      const keyPrefix = isPreferred ? 'pref-' : ''

      return (
        <FlagBox
          key={`${keyPrefix}${country.iso2}`}
          dialCode={country.dialCode}
          isoCode={country.iso2}
          name={country.name}
          onMouseOver={onMouseOverOrFocus}
          onClick={() => this.props.setFlag(country.iso2)}
          onFocus={onMouseOverOrFocus}
          flagRef={(selectedFlag) => {
            this.selectedFlag = selectedFlag
          }}
          innerFlagRef={(selectedFlagInner) => {
            this.selectedFlagInner = selectedFlagInner
          }}
          countryClass={countryClass}
        />
      )
    })
  }

  handleMouseOver = (e) => {
    if (e.currentTarget.getAttribute('class').indexOf('country') > -1) {
      const selectedIndex = utils.retrieveLiIndex(e.currentTarget)

      this.props.changeHighlightCountry(true, selectedIndex)
    }
  }

  render() {
    const { preferredCountries, countries, showDropdown } = this.props
    const className = classNames('country-list', {
      hide: !showDropdown,
    })

    const preferredOptions = this.appendListItem(preferredCountries, true)
    const allOptions = this.appendListItem(countries)
    const divider = <div className="divider" />

    return (
      <ul
        ref={(listElement) => {
          this.listElement = listElement
        }}
        className={className}
      >
        {preferredOptions}
        {preferredCountries.length > 0 ? divider : null}
        {allOptions}
      </ul>
    )
  }
}

CountryList.propTypes = {
  setFlag: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.object),
  inputTop: PropTypes.number,
  inputOuterHeight: PropTypes.number,
  preferredCountries: PropTypes.arrayOf(PropTypes.object),
  highlightedCountry: PropTypes.number,
  changeHighlightCountry: PropTypes.func,
  showDropdown: PropTypes.bool,
  isMobile: PropTypes.bool,
  window: PropTypes.object.isRequired,
  document: PropTypes.object.isRequired,
}
