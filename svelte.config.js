const sveltePreprocess = require('svelte-preprocess-postcss')

module.exports = {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
}
