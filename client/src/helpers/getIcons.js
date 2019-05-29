/* eslint-disable no-nested-ternary */
import React from 'react';

export default function (product) {
  return product === 'website'
    ? (<i className="fa pr-2 fa-laptop fa-lg mt-4" />)
    : product === 'social-media'
      ? <i className="fa pr-2 fa-hashtag fa-lg mt-4" />
      : product === 'branding'
        ? <i className="fa pr-2 fa-copyright fa-lg mt-4" />
        : product === 'email'
          ? <i className="fa pr-2 fa-paper-plane fa-lg mt-4" />
          : product === 'promet'
            ? <i className="fa pr-2 fa-universal-access fa-lg mt-4" />
            : product === 'live-chat'
              ? <i className="fa pr-2 fa-comment-o fa-lg mt-4" />
              : product === 'form-stack'
                ? <i className="fa pr-2 fa-align-left fa-lg mt-4" />
                : product === 'digital-signage'
                  ? <i className="fa pr-2 fa-sign fa-lg mt-4" />
                  : product === 'domain'
                    ? <i className="fa pr-2 fa-wifi fa-lg mt-4" />
                    : '';
}
