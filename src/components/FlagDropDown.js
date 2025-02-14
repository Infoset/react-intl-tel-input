/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/forbid-prop-types */
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CountryList from './CountryList'
import RootModal from './RootModal'

export default class FlagDropDown extends Component {
  genSelectedDialCode = () => {
    const { separateDialCode, dialCode } = this.props

    return separateDialCode ? (
      <div className="selected-dial-code">{dialCode}</div>
    ) : null
  }

  genArrow = () => {
    const { allowDropdown, showDropdown } = this.props
    const arrowClasses = classNames('arrow', showDropdown ? 'up' : 'down')

    return allowDropdown ? <div className={arrowClasses} /> : null
  }

  genFlagClassName = () =>
    classNames('iti-flag', {
      [this.props.countryCode]: !!this.props.countryCode,
    })

  genCountryList = () => {
    const {
      dropdownContainer,
      showDropdown,
      isMobile,
      allowDropdown,
      setFlag,
      countries,
      inputTop,
      inputOuterHeight,
      preferredCountries,
      highlightedCountry,
      changeHighlightCountry,
      window,
      document,
    } = this.props

    return (
      <CountryList
        ref={(countryList) => {
          this.countryList = countryList
        }}
        dropdownContainer={dropdownContainer}
        isMobile={isMobile}
        showDropdown={allowDropdown && showDropdown}
        setFlag={setFlag}
        countries={countries}
        inputTop={inputTop}
        inputOuterHeight={inputOuterHeight}
        preferredCountries={preferredCountries}
        highlightedCountry={highlightedCountry}
        changeHighlightCountry={changeHighlightCountry}
        window={window}
        document={document}
      />
    )
  }

  render() {
    const {
      refCallback,
      allowDropdown,
      clickSelectedFlag,
      handleSelectedFlagKeydown,
      titleTip,
      dropdownContainer,
      showDropdown,
      document,
    } = this.props

    return (
      <div ref={refCallback} className="flag-container">
        <div
          className="selected-flag"
          tabIndex={allowDropdown ? '0' : ''}
          onClick={clickSelectedFlag}
          onKeyDown={handleSelectedFlagKeydown}
          title={titleTip}
        >
          <div className={this.genFlagClassName()} />
          {this.genSelectedDialCode()}
          {this.genArrow()}
        </div>
        {dropdownContainer && showDropdown ? (
          <RootModal document={document}>{this.genCountryList()}</RootModal>
        ) : (
          this.genCountryList()
        )}
      </div>
    )
  }
}

FlagDropDown.propTypes = {
  allowDropdown: PropTypes.bool,
  dropdownContainer: PropTypes.string,
  separateDialCode: PropTypes.bool,
  dialCode: PropTypes.string,
  countryCode: PropTypes.string,
  showDropdown: PropTypes.bool,
  clickSelectedFlag: PropTypes.func,
  handleSelectedFlagKeydown: PropTypes.func,
  isMobile: PropTypes.bool,
  setFlag: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.object),
  inputTop: PropTypes.number,
  inputOuterHeight: PropTypes.number,
  preferredCountries: PropTypes.arrayOf(PropTypes.object),
  highlightedCountry: PropTypes.number,
  changeHighlightCountry: PropTypes.func,
  titleTip: PropTypes.string,
  refCallback: PropTypes.func.isRequired,
  window: PropTypes.object.isRequired,
  document: PropTypes.object.isRequired,
}
