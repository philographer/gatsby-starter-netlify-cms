import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import PartnerPagePreview from './preview-templates/PartnerPagePreview'
import SponserPagePreview from './preview-templates/SponserPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('partner', PartnerPagePreview)
CMS.registerPreviewTemplate('sponser', SponserPagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)