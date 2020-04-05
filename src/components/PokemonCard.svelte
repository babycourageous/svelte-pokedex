<script>
  export let name
  export let url

  const urlArray = url.split('/')
  const indexLocation = urlArray.length - 2

  const index = urlArray[indexLocation]

  const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
</script>

<article
  class="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg"
>
  <div class="px-6 py-4">
    <h2 class="font-bold text-xl mb-2">{name}</h2>
  </div>
  <img class="w-24 h-24" src={imgurl} alt="" />
</article>
