<script>
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../store/route.js";
  import ScientistCard from "../components/ScientistCard.svelte";
  import { scientists } from "../data/scientists.js";

  onMount(() => ($route_to = "/group"));
</script>

<div class="is-justify pb-4">
  The project requires the cooperation between the two institutions, as it
  creates an ideal combination of knowledge from the research fields of
  biomaterials and regenerative medicine.
</div>
<div class="is-justify pb-4">
  The added value of the project lies in the problem treatment via a close
  cooperation of the two research teams. Their know-how contributes to the
  development of new functional biomaterials and to the promotion of scientific
  activities in the fields of materials technology and regenerative medicine.
</div>

<div class="flex">
  {#each scientists as scientist}
    <div class="flex-item">
      <ScientistCard {scientist} />
    </div>
  {/each}
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    gap: 2rem;
  }

  /* .flex-item {
    flex-shrink: 3;
    flex: 1 100%;
  } */

  /* .flex-item + .flex-item {
    margin-top: 2rem;
  } */
</style>
