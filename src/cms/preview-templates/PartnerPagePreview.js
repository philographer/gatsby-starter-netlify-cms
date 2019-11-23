import React from 'react'
import PropTypes from 'prop-types'
import { PartnerPostTemplate } from '../../templates/partner-post'

const PartnerPostPreview = ({ entry, widgetFor }) => (
  <PartnerPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PartnerPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PartnerPostPreview
