<script>
  import ky from 'ky'

  import PokemonCard from '../components/PokemonCard.svelte'

  let pokemons = []
  let offset = 0
  let amountToLoad = 24

  $: {
    getPokemon(offset)
  }

  async function getPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${amountToLoad}`
    const data = await ky.get(url).json()

    pokemons = [...pokemons, ...data.results]
  }

  function handleMoreClick(event) {
    offset += amountToLoad
  }
</script>

<div class="container">
  <ul class="grid sm:grid-cols-2 md:grid-cols-3 sm:col-gap-6 row-gap-4">
    {#each pokemons as { name, url } (url)}
      <li>
        <PokemonCard {name} {url} />
      </li>
    {/each}
  </ul>

  {#if pokemons.length > 0}
    <button
      class="border border-red-700 font-bold hover:bg-red-700 hover:text-white
      px-4 py-2 rounded text-red-700"
      type="button"
      id="more-button"
      on:click={handleMoreClick}
    >
      Load More
    </button>
  {/if}
</div>
