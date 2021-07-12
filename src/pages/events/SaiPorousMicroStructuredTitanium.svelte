<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 8).route_to));
</script>

The article
<div class="py-5 px-5 is-centered is-italic has-text-weight-semibold">
  Porous micro/nano structured oxidic titanium surface decorated with
  silicon monoxide
</div>
represents the research concept of the joint project NTC and UKR:
<div class="py-5 px-5 is-centered is-italic">
  Advanced porous biomaterials functionalized with stem cells to improve the
  osseointegration of implants (MATEGRA).
</div>
<div class="pb-4 is-justify">
  Novel types of titanium oxidic surfaces were fabricated by a shifted Laser Surface
  Texturing of titanium in air, producing porous micro/nanostructured topography, and
  by a subsequent Nd:YAG laser-induced reactive deposition of Ti5Si3 titanium silicide
  in vacuum, coating this topography with scattered sub-micron particles of silicon
  monoxide.
</div>
<div class="pb-4 is-justify">
  Both pristine and SiO-modified laser-structured surfaces were examined for the response
  of human SCP-1 and murine MC3T3 cells and found biocompatible in terms of cell survival,
  proliferation and cell morphology.
</div>
<div class="pb-4">
  <img
    class="image image--resize"
    src={"/images/2021-sai-porous-micro-structured-titanuim.jpg"}
    alt="Abstract"
    loading="lazy"
  />
</div>
<div>
  For more information, see
  <a
    href="https://www.sciencedirect.com/science/article/pii/S2468023021003813?via%3Dihub"
    target="_blank">article <Icon i={"ex_link"} /></a
  >
</div>

<style>
</style>
