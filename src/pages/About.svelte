<script>
  import { onMount } from "svelte";
  import { routeStore as route_to } from "../store/route.js";
  import Icon from "../components/Icon.svelte";

  onMount(() => ($route_to = "/group"));
</script>

<div class="is-justify pb-4">
  The MATEGRA project focuses on the development, optimization and testing of
  new types of biocompatible surfaces of titanium implants for improved
  osteointegration and bone tissue adhesion.
</div>
<div class="is-justify pb-4">
  The intention is to gain the know-how for the production of new biomaterials
  and porous surfaces for the production of samples and for studying their
  biocompatibility.
</div>
<div class="is-justify pb-4">
  The main objectives of the project are also the cross-border cooperation of
  research institutions and professional groups, as well as the transfer of
  knowledge about the development and testing of new porous biomaterials. The <a
    class="link ukr_link"
    href="https://www.ukr.de/e/departments/trauma-surgery/Laboratory_for_Experimental_Trauma_Surgery/index.php"
    target="_blank">Trauma Surgery of the University Hospital Regensburg</a
  >
  (UKR) and the
  <a class="link ntc_link" href="https://ntc.zcu.cz/en/" target="_blank"
    >Research Center - New Technologies</a
  > (NTC) as part of the West Bohemian University (UWB) form a joint scientific research
  platform for the development of new porous biomaterials and the associated biological
  activity and compatibility testing.
</div>
<div class="is-justify pb-4">
  See more information about methodology and experimental program here:
  <a href="/pdfs/poster_mategra_2020.pdf" target="_blank"
    >poster <Icon i={"pdf"} />
  </a>
</div>

<style>
  .link {
    color: black;
    text-decoration: none;
    /* padding: 0.25rem 0.25rem; */
    transition: background 500ms ease;
    background-size: auto 175%;
    background-position-y: 0%;
  }

  .ntc_link {
    background-image: linear-gradient(white 50%, var(--clr-ntc) 50%);
  }

  .ukr_link {
    background-image: linear-gradient(white 50%, var(--clr-ukr) 50%);
  }

  .ntc_link:hover,
  .ukr_link:hover {
    background-size: auto 175%;
    background-position-y: 100%;
    color: #fff;
  }
</style>
