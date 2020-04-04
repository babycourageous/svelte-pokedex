<script>
  import { onMount } from 'svelte'
  import ky from 'ky'

  let pokemons = []

  onMount(async () => {
    let url = 'https://pokeapi.co/api/v2/pokemon'
    const data = await ky.get(url).json()

    pokemons = data.results
  })
</script>

<div class="container mt-8">
  <div class="grid sm:grid-cols-2 md:grid-cols-3 sm:col-gap-6 row-gap-4">
    {#each pokemons as { name, url }, index (index)}
      <p class="font-bold text-xl mb-2">{name}</p>
    {/each}
  </div>
</div>
