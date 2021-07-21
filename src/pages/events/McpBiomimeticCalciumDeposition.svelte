<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 8).route_to));
</script>

The article
<h2 class="article-title">
  Micro/nano-structured titanium surfaces modified by NaOH–CaCl<sub>2</sub> heat water treatment:
</h2>
<div class="article-subtitle">
  Biomimetic calcium phosphate deposition and hMSCs behavior
</div>
represents the research concept of the joint project NTC and UKR:
<div class="py-5 px-5 is-centered is-italic">
  Advanced porous biomaterials functionalized with stem cells for enhanced implant osseointegration.
</div>
<div class="pb-4 is-justify">
  In this study, NaOH–CaCl<sub>2</sub> heat water treatment of titanium is revisited and used to modify
  porous laser micro/nanostructured oxidic and flat titanium surfaces which are characterized
  by XRD, electron microscopy, zeta potential and FTIR and Raman spectroscopy.
</div>
<div class="pb-4 is-justify">
  These titanium surfaces are also assessed for their ability to induce biomimetic Ca phosphate
  deposition from a simulated body fluid (SBF) and to grow human Mesenchymal stem cells (hMSCs).
</div>
<div class="pb-4">
  <img
    class="image image--resize"
    src={"/images/2021-mcp-biomimetic-calcium-deposition.jpg"}
    alt="Abstract"
    loading="lazy"
  />
</div>
<div>
  For more information, see
  <a
    href="https://www.sciencedirect.com/science/article/pii/S0254058421006799?via%3Dihub"
    target="_blank">article <Icon i={"ex_link"} />
  </a>
</div>

<style>
</style>
