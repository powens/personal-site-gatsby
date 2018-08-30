import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon32 from '../assets/favicon-32x32.png';
import favicon16 from '../assets/favicon-16x16.png';
import appleTouchIcon from '../assets/apple-touch-icon.png';
import safariPinnedTab from '../assets/safari-pinned-tab.svg';
import { defaultColors } from '../utils/colors';

const HelmetWrapper = ({ title, description }) => (
  <Helmet title={title} htmlAttributes={{ lang: 'en' }}>
    <meta charSet="utf-8" />
    <meta name="description" content={description} />

    {/* favicon stuff */}
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="mask-icon" href={safariPinnedTab} color={defaultColors.primary} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <meta name="theme-color" content={defaultColors.primary} />
    <meta name="msapplication-TileColor" content={defaultColors.primary} />

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
