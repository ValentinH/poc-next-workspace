const nextTranspileModules = require('next-transpile-modules')

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.app.json',
  },
}

const withTM = nextTranspileModules(['@hublo/common'])

module.exports = withTM(config)
