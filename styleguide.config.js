const { readdirSync } = require('fs')
const path = require('path')

// make all (?) carbon components available in context
const carbonComponents = readdirSync(path.join(__dirname, 'node_modules/carbon-components-react/lib/components'))
const context = {}
for (const c of carbonComponents) {
  context[c] = path.resolve(__dirname, 'node_modules/carbon-components-react/lib/components', c)
}

module.exports = {
  styleguideDir: 'docs',
  sections: [
    {
      name: 'Introduction',
      content: 'docs/intro.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section'
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ],
  context: context,
  // TODO: moduleAliases not required for now, we add components we need to the context, see above
  moduleAliases: {
    'carbon-components-react': path.resolve(__dirname, 'node_modules/carbon-components-react')
  },
  require: [
    path.join(__dirname, 'node_modules/carbon-components/css/carbon-components.min.css')
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
