<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 2).route_to));
</script>

<h2 class="article-title">
  <div>A virtual symposium is scheduled for November 11, 2021.</div>
  You are all warmly invited.
</h2>
<div class="pb-4">
  The symposium is established within the project No. 201 MATEGRA:
  <div class="py-5 px-5 is-centered is-italic">
    Advanced porous biomaterials functionalized with stem cells for enhanced implant osseointegrations.
  </div>
  This is a cross-border cooperation program Czech Republic - Free State of Bavaria
  - EWO goal 2014 - 2020. Our project develops cooperation between NTC (New Technologies
  - Research Center) and UKR (University Clinic in Regensburg).
</div>

<div class="pb-6">
  <img
    class="image image--resize"
    src={"/images/2021-virtual-symposium-poster.jpg"}
    alt="Virtual symposium poster"
    loading="lazy"
  />
</div>
<div class="pb-4">
  <img
    class="image image--resize"
    src={"/images/2021-virtual-symposium-poster-programme.jpg"}
    alt="Virtual symposium poster programme"
    loading="lazy"
  />
</div>

<div class="pb-4">
  See pdf
  <a href="/pdfs/MATEGRA_Virtual_Symposium_11.11.2021_poster.pdf" target="_blank"
    >poster <Icon i={"pdf"} />
  </a>
</div>

<style>
</style>
