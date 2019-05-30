/* eslint-disable no-nested-ternary */
import React from 'react';

export default function (product) {
  return product === 'website'
    ? (<i className="fa pr-2 fa-laptop fa-lg mt-4" data-tip="Website" />)
    : product === 'social-media'
      ? <i className="fa pr-2 fa-hashtag fa-lg mt-4" data-tip="Social Media" />
      : product === 'branding'
        ? <i className="fa pr-2 fa-copyright fa-lg mt-4" data-tip="Branding" />
        : product === 'email'
          ? <i className="fa pr-2 fa-paper-plane fa-lg mt-4" data-tip="Email" />
          : product === 'promet'
            ? <i className="fa pr-2 fa-universal-access fa-lg mt-4" data-tip="Promet" />
            : product === 'live-chat'
              ? <i className="fa pr-2 fa-comments fa-lg mt-4" data-tip="Live Chat" />
              : product === 'form-stack'
                ? <i className="fa pr-2 fa-align-left fa-lg mt-4" data-tip="Form Stack" />
                : product === 'digital-signage'
                  ? <i className="fa pr-2 fa-sign fa-lg mt-4" data-tip="Digital Signage" />
                  : product === 'domain'
                    ? <i className="fa pr-2 fa-wifi fa-lg mt-4" data-tip="Domain" />
                    : '';
}
