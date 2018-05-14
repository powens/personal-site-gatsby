import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


const HelmetWrapper = ({ title, description }) => (
  <Helmet title={title} >
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta description={description} />
    {/* OpenGraph tags */}
    {/* <meta property="og:url" content={url} /> */}
    {/* <meta property="og:title" content={title} /> */}
    {/* <meta property="og:description" content={description} /> */}
    {/* <meta property="og:image" content={image} /> */}
    {/* <meta property="og:type" content="website" /> */}
    {/* <meta property="fb:app_id" content={facebook.appId} /> */}
    {/* /!* Twitter Card tags *!/ */}
    {/* <meta name="twitter:card" content="summary" /> */}
    {/* <meta */}
    {/* name="twitter:creator" */}
    {/* content={config.authorTwitterAccount ? config.authorTwitterAccount : ""} */}
    {/* /> */}
  </Helmet>
);

HelmetWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HelmetWrapper;
