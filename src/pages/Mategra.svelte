<script>
  import { images } from "../data/mategra_images.js";
</script>

<div class="project-info is-centered py-4">
  Welcome to RESEARCH PROJECT website
  <div class="mategra-title is-italic">
    Extended treatment of osteoporotic bone tissue with innovative metal surfaces
    enriched with organic-inorganic nanoparticles
  </div>
    Project 349: OSTEMET<br>
    &
  <div class="mategra-title is-italic py-0">
    Advanced porous biomaterials functionalized with stem cells for enhanced
    implant osseointegration
  </div>
  Project 201: MATEGRA
</div>

<div class="slider">
  {#each images as image}
    <div style="background-image: url({image.path})" />
  {/each}
</div>
<div class="slider-text">
  {#each images as image}
    <p class="figcaption">{@html image.label}</p>
  {/each}
</div>

<style>
  .mategra-title {
    font-size: var(--fs-4);
    font-weight: 400;
    padding: 1rem 2rem;
  }

  .project-info {
    width: 100%;
    font-size: var(--fs-5);
    position: absolute;
    z-index: 100;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }

  .figcaption {
    color: white;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    right: 0;
    bottom: 1.75rem;
  }

  .slider {
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }

  .slider > div {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    /* -webkit-animation: fadeInOut 30s infinite;
    -moz-animation: fadeInOut 30s infinite;
    -o-animation: fadeInOut 30s infinite; */
    animation: fadeInOut 30s infinite;
    opacity: 0;
  }

  .slider > div:nth-child(1) {
    animation-delay: 0s;
  }

  .slider > div:nth-child(2) {
    animation-delay: 5s;
  }

  .slider > div:nth-child(3) {
    animation-delay: 10s;
  }

  .slider > div:nth-child(4) {
    animation-delay: 15s;
  }

  .slider > div:nth-child(5) {
    animation-delay: 20s;
  }

  .slider > div:nth-child(6) {
    animation-delay: 25s;
  }

  @keyframes fadeInOut {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    70% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @-o-keyframes fadeInOut {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    70% {
      transform: scale(1.2);
    }
  }

  @-moz-keyframes fadeInOut {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    70% {
      transform: scale(1.2);
    }
  }

  @-webkit-keyframes fadeInOut {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    70% {
      transform: scale(1.2);
    }
  }

  .slider-text > p {
    position: absolute;
    /* width: 300px; */
    color: white;
    font-size: var(--fs-5);
    padding: 1rem;
    /* background: rgba(179, 178, 178, 0.57); */
    background: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    /* -webkit-animation: fadeInOutText 30s infinite;
    -moz-animation: fadeInOutText 30s infinite;
    -o-animation: fadeInOutText 30s infinite; */
    animation: fadeInOutText 30s infinite;
    opacity: 0;
    right: 0;
    bottom: 5vh;
  }

  .slider-text > p:nth-child(1) {
    animation-delay: 0s;
  }

  .slider-text > p:nth-child(2) {
    animation-delay: 5s;
  }

  .slider-text > p:nth-child(3) {
    animation-delay: 10s;
  }

  .slider-text > p:nth-child(4) {
    animation-delay: 15s;
  }

  .slider-text > p:nth-child(5) {
    animation-delay: 20s;
  }

  .slider-text > p:nth-child(6) {
    animation-delay: 25s;
  }

  /* @keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }

  @-o-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  } */

  @keyframes fadeInOutText {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }

  @-o-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
  }
</style>
