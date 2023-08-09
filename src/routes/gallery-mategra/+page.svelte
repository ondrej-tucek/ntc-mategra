<script>
  import { mategra_images as mat_imgs } from "../../data/mategra_images.js";
  let img_set1 = mat_imgs[0];
  let img_set2 = mat_imgs[1];
  let img_set3 = mat_imgs[2];
  let img_set4 = mat_imgs[3];
  let img_set5 = mat_imgs[4];
</script>

<svelte:head>
  <title>Mategra gallery</title>
</svelte:head>
<div class="flex">
  <p class="figure-caption">{@html img_set1.label}</p>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set1.images[0].path} alt="" loading="lazy" />
    </figure>
  </div>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set1.images[1].path} alt="" loading="lazy" />
    </figure>
  </div>
  <div class="flex-item" style="width: 75%;">
    <figure class="figure">
      <img class="image" src={img_set1.images[2].path} alt="" loading="lazy" />
    </figure>
  </div>
</div>

<div class="flex">
  <p class="figure-caption">{@html img_set2.label}</p>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set2.images[0].path} alt="" loading="lazy" />
    </figure>
  </div>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set2.images[1].path} alt="" loading="lazy" />
    </figure>
  </div>
  <div class="flex-item" style="width: 75%;">
    <figure class="figure">
      <img class="image" src={img_set2.images[2].path} alt="" loading="lazy" />
    </figure>
  </div>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set2.images[3].path} alt="" loading="lazy" />
    </figure>
  </div>
</div>

<div class="flex">
  <p class="figure-caption">{@html img_set3.label}</p>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set3.images[0].path} alt="" loading="lazy" />
    </figure>
  </div>
</div>

<div class="flex">
  <p class="figure-caption">{@html img_set4.label}</p>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set4.images[0].path} alt="" loading="lazy" />
    </figure>
  </div>
</div>

<div class="flex">
  <p class="figure-caption">{@html img_set5.label}</p>
  <div class="flex-item">
    <figure class="figure">
      <img class="image" src={img_set5.images[0].path} alt="" loading="lazy" />
    </figure>
  </div>
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    margin-block: 2rem;
    /* margin-top: -0.75rem; */
    border: 1px solid lightgray;
    border-radius: 6px;
  }

  .flex-item {
    flex: auto;
    display: block;
    width: 50%;
    padding: 0.75rem;
  }

  .figure {
    display: block;
    position: relative;
  }

  .image {
    height: 100%;
    width: 100%;
    inset: 0;
    position: relative;
    background-color: var(--clr-bg-image);
    border-radius: 6px;
  }

  .image::before {
    content: "Loading image... ";
    position: absolute;
    top: 45%;
    left: 35%;
  }

  .figure-caption {
    width: 100%;
    position: relative;
    color: white;
    padding: 0.75rem;
    margin: 0.75rem;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 6px;
    /* top: 16px; */
  }

  @media only screen and (max-width: 600px) {
    .flex {
      display: flex;
      flex-direction: column;
      margin-top: -0.75rem;
    }

    .flex-item {
      flex: none;
      display: block;
      width: 100%;
      padding: 0.75rem;
    }

    .figure-caption {
      width: auto;
    }
  }
</style>
