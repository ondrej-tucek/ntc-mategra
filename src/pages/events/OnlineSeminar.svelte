<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 1).route_to));
</script>

<div class="pb-4">
  On April 27, 2021, a one-day student online seminar
  <h2 class="article-title">
    Porous glasses: a promising biomaterial
  </h2>
  <div class="article-subtitle">
    Chemical-physical properties and cells viability
  </div>
  took place at the  UWB / NTC, which was implemented within the project No. 201 MATEGRA:
  <div class="py-5 px-5 is-centered is-italic">
    Advanced porous biomaterials functionalized with stem cells to improve the
    osseointegration of implants.
  </div>
  This is a cross-border cooperation program Czech Republic - Free State of Bavaria
  - EWO goal 2014 - 2020. Our project develops cooperation between NTC (New Technologies
  - Research Center) and UKR (University Clinic in Regensburg).
</div>
<div class="pb-4">
  The lecture introduced students to the world of biomaterials, where living and non-living
  materials are interconnected.
</div>
<div class="pb-4">
  <img
    class="image image--resize"
    src={"/images/2021-online-seminar-1.jpg"}
    alt="Second Workshop"
    loading="lazy"
  />
</div>
<div class="pb-4">
  They were introduced to the basic types and properties of
  metallic, ceramic and polymeric biomaterials, their properties and their possible
  applications in implantology.
</div>
<div>
  <img
    class="image image--resize"
    src={"/images/2021-online-seminar-2.jpg"}
    alt="Second Workshop"
    loading="lazy"
  />
</div>

<style>
</style>
