<script>
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 5).route_to));
</script>

<div class="is-justify pb-4">
  It was an award for young scientists who were actively participating in the
  the <a href="https://www.eors2020.org/" target="_blank">EORS</a> annual meeting
  2020, which was held last September in Izmir.
</div>
<img
  class="image"
  src={"/images/2020_awards_for_TS.jpg"}
  alt="Awards"
  loading="lazy"
/>

<style></style>
