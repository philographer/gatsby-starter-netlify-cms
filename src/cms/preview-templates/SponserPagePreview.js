import React from 'react'
import PropTypes from 'prop-types'
import { SponserPostTemplate } from '../../templates/sponser-post'

const SponserPostPreview = ({ entry, widgetFor }) => (
  <SponserPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

SponserPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SponserPostPreview
