/* eslint-disable no-nested-ternary */
import React from 'react';

export default function (product) {
  return product === 'website'
    ? (<i className="fa pr-2 fa-laptop fa-lg" data-tip="Website" />)
    : product === 'social-media'
      ? <i className="fa pr-2 fa-hashtag fa-lg" data-tip="Social Media" />
      : product === 'branding'
        ? <i className="fa pr-2 fa-copyright fa-lg" data-tip="Branding" />
        : product === 'email'
          ? <i className="fa pr-2 fa-paper-plane fa-lg" data-tip="Email" />
          : product === 'promet'
            ? <i className="fa pr-2 fa-universal-access fa-lg" data-tip="Promet" />
            : product === 'live-chat'
              ? <i className="fa pr-2 fa-comments fa-lg" data-tip="Live Chat" />
              : product === 'form-stack'
                ? <i className="fa pr-2 fa-align-left fa-lg" data-tip="Form Stack" />
                : product === 'digital-signage'
                  ? <i className="fa pr-2 fa-sign fa-lg" data-tip="Digital Signage" />
                  : product === 'domain'
                    ? <i className="fa pr-2 fa-wifi fa-lg" data-tip="Domain" />
                    : '';
}
