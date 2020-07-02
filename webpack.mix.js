const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

if (mix.inProduction()) {
    mix.webpackConfig({
        output: {
            chunkFilename: "js/[name].[chunkhash].js"
        }
    });
    mix.version();
}
