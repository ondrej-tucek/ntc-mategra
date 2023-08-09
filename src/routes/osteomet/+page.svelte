<script>
  import Icon from "../../components/Icon.svelte";
</script>

<svelte:head>
  <title>Osteomet</title>
</svelte:head>
<div class="is-justify pb-4">
  The OSTEOMET project addresses an important and highly translational topic:
  the clinically relevant disease field of osteoporosis. Osteoporosis is a
  disease of the skeleton, in affected patients it manifests itself as an
  impaired bone structure with deficient properties.
</div>
<div class="is-justify pb-4">
  The osteoporotic cell phenotype should be suppressed by functionalizing the
  metal implant with an/organic nanoparticle composition. By including vascular
  and immune cells, a more accurate and comprehensive evaluation of the
  responses at the cell-implant interface will be possible.
</div>
<div class="is-justify pb-4">
  The results of this research offer the potential for improved post-implant
  treatment that is suitable for previously damaged and osteoporotic bone and
  that enhances regeneration of surrounding bone tissue. The Department <a
    class="link ukr_link"
    href="https://www.ukr.de/en/trauma-surgery"
    target="_blank"
    >Trauma Surgery at the University Medical School in Regensburg</a
  >
  (UKR) and the
  <a class="link ntc_link" href="https://ntc.zcu.cz/en/" target="_blank"
    >New Technology Research Centre</a
  > (NTC) at the University of West Bohemia in Pilsen form a joint research platform.
</div>
<div class="is-justify pb-4">
  See more information about methodology and experimental program here:
  <a href="/pdfs/Prehled_projektu_OSTEOMET_cz.pdf" target="_blank"
    >poster <Icon i={"pdf"} />
  </a> [cz].
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
