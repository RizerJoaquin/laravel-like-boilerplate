let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/assets/js/app.js', 'dist/js')
   .sass('src/assets/sass/app.scss', 'dist/css')
   // .version()
   .sourceMaps()
   .browserSync({
    proxy: 'localhost/now/dist',
    files: ['./dist']
   });
