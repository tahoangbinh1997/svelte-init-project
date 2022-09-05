let sveltePreprocess = require('svelte-preprocess');

let preprocessOptions = {
    sourceMap: true, // "you would always want sourcemaps for the IDE" – dummdidumm
    defaults: {
        script: "typescript",
        style: "scss",
    },
    scss: {},
    postcss: {
        plugins: [require('autoprefixer')()]
    }
}

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),
    ...preprocessOptions,
}