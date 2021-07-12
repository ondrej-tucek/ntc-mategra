<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 4).route_to));
</script>

The article
<h2 class="article-title">
  Recent advances and future perspectives of sol–gel derived porous bioactive
  glasses: a review
</h2>
represents the research concept of the joint project NTC and UKR:
<div class="py-5 px-5 is-centered is-italic">
  Advanced porous biomaterials functionalized with stem cells to improve the
  osseointegration of implants (MATEGRA).
</div>
<div class="pb-4 is-justify">
  In this review, the recent advances in sol–gel processed porous bioactive
  glasses in biomedical fields, especially for bone tissue regeneration
  applications have been comprehensively reviewed. In the later part of the
  review, different types of sol–gel derived bioactive glasses namely silica,
  phosphate and silica–titania based glasses along with organic–inorganic
  hybrids materials have been discussed.
</div>
<div class="pb-4 is-justify">
  The review also discusses the chemical, surface, mechanical and biological
  properties and further highlights the strategies to control the pore
  structure, shape, size and compositions of sol–gel derived bioactive glasses.
</div>
<div class="pb-4">
  <img
    class="image image--resize"
    src={"/images/2020-rsc-advances-abstract.jpg"}
    alt="Abstract"
    loading="lazy"
  />
</div>
<div>
  For more information, see
  <a
    href="https://pubs.rsc.org/en/content/articlehtml/2020/ra/d0ra04287k"
    target="_blank">article <Icon i={"ex_link"} /></a
  >
</div>

<style>
</style>
