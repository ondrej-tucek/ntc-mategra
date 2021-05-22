<script>
  import Icon from "../../components/Icon.svelte";
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../../store/route.js";
  import { events } from "../../data/events.js";
  import { get_id } from "../../js/utils.js";

  onMount(() => ($route_to = get_id(events, 2).route_to));
</script>

<div class="pb-4">
  On November 22, 2019, the 2<sup>nd</sup> MATEGRA workshop took place at the
  UKR in Regensburg, which was implemented within the project No. 201 MATEGRA:
  <div class="py-5 px-5 is-centered is-italic">
    Advanced porous biomaterials functionalized with stem cells to improve the
    osseointegration of implants.
  </div>
  This is a cross-border cooperation program Czech Republic - Free State of Bavaria
  - EWO goal 2014 - 2020. Our project develops cooperation between NTC (New Technologies
  - Research Center) and UKR (University Clinic in Regensburg).
</div>
<div class="pb-4">
  Lectures provided insight into the physiology and arthroplastic procedures and
  hip/knee endoprostheses and complications. The second part of the workshop was
  focused on cell types and the interaction of cells with materials. The
  biomaterial section of the lectures was presented by colleagues from the West
  Bohemia University. The guests also got acquainted with pre-clinical in-vivo
  models for bone implant testing and expert discussion on the issue of
  implants.
</div>
<div class="pb-4">
  The conclusion of the seminar consisted of practical demonstrations in
  laboratories (cell trypsinazation, counting, plating, staining of cells on
  structured titanium scaffolds, fluorescence imaging) and demonstration of the
  implantation process of a hip / knee joint prosthesis.
</div>
<div class="pb-4">Annual meeting group members at 2nd Mategra Workshop</div>

<div class="pb-4">
  <figure class="image image--resize">
    <img
      src={"/images/2020-MATEGRA-Workshop-group.jpg"}
      alt="Second Workshop"
      loading="lazy"
    />
  </figure>
</div>

<div class="pb-4">
  See also:
  <a href="/pdfs/MATEGRA_workshop_22.11.2019_flyer_en.pdf" target="_blank"
    >flyer <Icon i={"pdf"} /></a
  >
</div>
<div class="pb-4">
  For more information, see:
  <a href="/pdfs/EVALUATION RESULTS_22.11.2019_en.pdf" target="_blank"
    >Evaluation results <Icon i={"pdf"} /></a
  > of the MATEGRA project workshop.
</div>

<style>
</style>
