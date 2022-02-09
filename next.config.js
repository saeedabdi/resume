/* eslint-disable @typescript-eslint/no-var-requires */
const withReactSvg = require('next-react-svg');
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = withReactSvg({
    include: path.resolve(__dirname, 'assets/svg'),
    webpack(config, options) {
        return config;
    },
    env: {
        API_BASE_URL: 'www.google.com',
    },
});
