<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 7).route_to));
</script>

The article
<h2 class="article-title">
  Implant bone interface: reviewing the impact of titanium surface modifications
  on osteogenic processes in vitro and in vivo
</h2>
represents the research concept of the joint project NTC and UKR:
<div class="py-5 px-5 is-centered is-italic">
  Advanced porous biomaterials functionalized with stem cells to improve the
  osseointegration of implants (MATEGRA).
</div>
<div class="pb-4 is-justify">
  This review starts with an introduction to the basics of cell-material interactions
  as well as common surface modification techniques. Afterwards, recent research on
  the impact of osteogenic processes in vitro and vivo provoked by various surface
  modifications is reviewed and discussed, in order to give an update on currently
  applied and developing implant modification techniques for enhancing osteointegration.
</div>
<div class="pb-4 is-justify">
  A key factor for a successful stable long-term integration is the initial cellular
  response to the implant material. Hence, cell-material interactions, which are
  dependent on the surface parameters, need to be considered in the implant design.
</div>
<div class="pb-4">
  <img
    class="image image--resize"
    src={"/images/2021-btm-implant-bone-interface.jpg"}
    alt="Abstract"
    loading="lazy"
  />
</div>
<div>
  For more information, see
  <a
    href="https://aiche.onlinelibrary.wiley.com/doi/10.1002/btm2.10239"
    target="_blank">article <Icon i={"ex_link"} />
  </a>
</div>

<style>
</style>
