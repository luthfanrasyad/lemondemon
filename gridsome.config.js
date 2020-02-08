// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Etnomark',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
          pug: { /* Options for `pug-plain-loader` */ },
          pugLoader: { /* Options for `pug-loader` */ }
      }
    },
    // {
    //   use: '@gridsome/source-wordpress',
    //   options: {
    //     baseUrl: 'http://192.168.64.2/wordpress/index.php', // required
    //     apiBase: 'wp-json',
    //     typeName: 'WordPress',
    //     perPage: 100,
    //     concurrent: 10,
    //     routes: {
    //       post: '/:year/:month/:day/:slug',
    //       post_tag: '/tag/:slug'
    //     }
    //   }
    // }
  ],
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
          },
        },
      ],
    },
  ],
}
