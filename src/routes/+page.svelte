<script>
  import { images } from "../data/home_images.js";
</script>

<div class="project-info is-centered py-4">
  Welcome to RESEARCH PROJECT website
  <div class="mategra-title is-italic">
    Augmented treatment of osteoporotic bone with innovative organic-inorganic
    nanoparticle functionalized metal surfaces
  </div>
  Project 349: OSTEOMET<br />
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
    -webkit-animation: fadeInOutImage 30s infinite;
    -moz-animation: fadeInOutImage 30s infinite;
    -o-animation: fadeInOutImage 30s infinite;
    animation: fadeInOutImage 35s infinite;
    opacity: 0;
  }

  .slider > div:nth-child(1) {
    animation-delay: 0s;
  }

  .slider > div:nth-child(2) {
    animation-delay: 6s;
  }

  .slider > div:nth-child(3) {
    animation-delay: 12s;
  }

  .slider > div:nth-child(4) {
    animation-delay: 18s;
  }

  .slider > div:nth-child(5) {
    animation-delay: 24s;
  }

  .slider > div:nth-child(6) {
    animation-delay: 30s;
  }

  @keyframes fadeInOutImage {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      transform: scale(1.2);
      opacity: 0;
    }
    75% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @-o-keyframes fadeInOutImage {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      transform: scale(1.2);
      opacity: 0;
    }
    75% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @-moz-keyframes fadeInOutImage {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      transform: scale(1.2);
      opacity: 0;
    }
    75% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeInOutImage {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      transform: scale(1.2);
      opacity: 0;
    }
    75% {
      transform: scale(1);
      opacity: 0;
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
    -webkit-animation: fadeInOutText 30s infinite;
    -moz-animation: fadeInOutText 30s infinite;
    -o-animation: fadeInOutText 30s infinite;
    animation: fadeInOutText 35s infinite;
    opacity: 0;
    right: 1rem;
    bottom: 5vh;
  }

  .slider-text > p:nth-child(1) {
    animation-delay: 0s;
  }

  .slider-text > p:nth-child(2) {
    animation-delay: 6s;
  }

  .slider-text > p:nth-child(3) {
    animation-delay: 12s;
  }

  .slider-text > p:nth-child(4) {
    animation-delay: 18s;
  }

  .slider-text > p:nth-child(5) {
    animation-delay: 24s;
  }

  .slider-text > p:nth-child(6) {
    animation-delay: 30s;
  }

  @keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
  }

  @-o-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeInOutText {
    10% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    28% {
      opacity: 0;
    }
    45% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .project-info {
      grid-area: info;
      position: relative;
      border-radius: 0;
      width: 100%;
    }

    .slider {
      grid-area: slider;
      border-radius: 0;
    }

    .slider-text > p {
      bottom: 2rem;
    }
  }

  @media only screen and (min-width: 900px) {
    .project-info {
      width: calc(100% - 2rem);
    }
  }
</style>
