<script>
  import { images } from "../../data/gallery_images.js";
</script>

<div class="flex">
  {#each images as image}
    <div class="flex-item">
      <figure class="figure">
        <img class="image" src={image.path} alt={image.label} loading="lazy" />
        <p class="figure-caption">{@html image.label}</p>
      </figure>
    </div>
  {/each}
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    margin-top: -0.75rem;
  }

  .flex-item {
    flex: none;
    display: block;
    width: 50%;
    padding: 0.75rem;
  }

  .figure {
    display: block;
    position: relative;
    padding-top: 100%;
  }

  .image {
    height: 100%;
    width: 100%;
    border-radius: 6px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--clr-bg-image);
  }

  .image::before {
    content: "Loading image... ";
    position: absolute;
    top: 45%;
    left: 35%;
  }

  .figure-caption {
    position: absolute;
    color: white;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    right: 0;
    bottom: 28px;
  }

  @media only screen and (max-width: 600px) {
    .flex {
      display: flex;
      flex-direction:column;
      margin-top: -0.75rem;
    }

    .flex-item {
      flex: none;
      display: block;
      width: 100%;
      padding: 0.75rem;
    }
  }
</style>
