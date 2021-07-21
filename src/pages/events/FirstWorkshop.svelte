<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 1).route_to));
</script>

<div class="pb-4">
  On March 21, 2019, a one-day student seminar "BIOMATERIALS" took place at the
  UWB / NTC, which was implemented within the project No. 201 MATEGRA:
  <div class="py-5 px-5 is-centered is-italic">
    Advanced porous biomaterials functionalized with stem cells for enhanced implant osseointegration.
  </div>
  This is a cross-border cooperation program Czech Republic - Free State of Bavaria
  - EWO goal 2014 - 2020. Our project develops cooperation between NTC (New Technologies
  - Research Center) and UKR (University Clinic in Regensburg).
</div>
<div class="pb-4">
  Lectures introduced students to the world of biomaterials, in which living and
  non-living materials are interconnected. They were acquainted with the basic
  types and properties of metal, ceramic and polymeric biomaterials, their
  properties and possibilities for implant applications. Attention was paid not
  only to basic information in the field of biomaterials, but also to the latest
  knowledge and state-of-art of still unsolved problems, especially in the field
  of orthopedic implants. The material section of the lectures was enriched by a
  contribution from colleagues from the University Clinic in Regensburg, which
  provided students with an insight into the issues of bone cell types and the
  interaction of cells with materials.
</div>
<div class="pb-4">
  The workshop presented the research concept of the joint project NTC and UKR:
  Advanced porous biomaterials functionalized with stem cells to improve the
  osseointegration of implants (MATEGRA).
</div>
<div class="pb-4">
  See also:
  <a href="/pdfs/MATEGRA_workshop_21.3.2019_flyer_en.pdf" target="_blank">
    flyer <Icon i={"pdf"} />
  </a>
</div>
<div class="pb-4">
  For more information, see:
  <a href="https://info.zcu.cz/clanek.jsp?id=2065" target="_blank"
    >Ohlédnutí za workshopem Biomateriály <Icon i={"ex_link"} />
  </a>
</div>

<style>
</style>
