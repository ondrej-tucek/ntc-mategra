<script>
  import "../css/reset.css";
  import "../css/global.css";
  import Navbar from "../components/Navbar.svelte";
  import Events from "../components/EventsList.svelte";
  import Logos from "../pages/Logos.svelte";
  import { routeStore as route_to } from "../store/route.js";
</script>

<svelte:head>
  <title>Mategra</title>
</svelte:head>
<section class="grid-wrap">
  <div class="grid">
    <div class="main box">
      <Navbar />
      <div class={$route_to === "/" ? "mategra-home" : "content scroll"}>
        <slot />
      </div>
    </div>
    <Events />
    <Logos />
  </div>
</section>

<style>
  .grid-wrap {
    padding: 4vh 10vw;
    display: grid;
    background: #f5f5f5;
  }

  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-template-rows: 3fr 1.5fr;
    grid-template-areas:
      "main events"
      "main logos";
    grid-gap: 2rem;
  }

  .main {
    grid-area: main;
    padding: 2rem;
    width: 100%;
    height: calc(100vh - 8vh);
    /* background: lightpink; */
  }

  .mategra-home {
    position: relative;
    height: calc(100vh - 8vh - 8.6rem);
  }

  .content {
    scroll-behavior: smooth;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding: 0 1rem 1rem 1rem;
    height: calc(100vh - 8vh - 8.6rem);
    /* background: paleturquoise; */
  }

  @media only screen and (max-width: 600px) {
    .grid-wrap {
      padding: 0;
    }

    .grid {
      grid-template-columns: 5fr;
      grid-template-rows: 3fr 1.5fr;
      grid-template-areas:
        "main"
        "logos";
      grid-gap: 1rem;
    }

    .main {
      padding: 0;
      height: 100%;
    }

    .content {
      height: 100%;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    .grid-wrap {
      padding: 4vh 4vw;
    }

    .grid {
      grid-template-columns: 5fr;
      grid-template-rows: 3fr 1.5fr;
      grid-template-areas:
        "main"
        "logos";
      grid-gap: 1rem;
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    .grid-wrap {
      /* padding: 4vh 4vw; */
      /* padding: 4vh clamp(28px, -32px + 6.667vw, 48px); */
      /* padding: 4vh clamp(18px, -312px + 36.667vw, 128px); */
      /* padding: 4vh clamp(18px, -288px + 34vw, 120px); */
      padding: 4vh clamp(1.12rem, -18rem + 34vw, 7.5rem);

      /* padding: 4vh clamp(1vh, -8rem + 16vw, 4vh); */
    }

    .grid {
      grid-gap: 1rem;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1800px) {
    .grid-wrap {
      /* padding: 4vh clamp(120px, 0px + 10vw, 180px); */
      /* padding: 4vh clamp(120px, -40px + 13.333vw, 200px); */
      /* padding: 4vh clamp(120px, -360px + 40vw, 360px); */
      /* padding: 4vh clamp(7.5rem, -22.5rem + 20vw, 22.5rem); */
      padding: 4vh clamp(7.5rem, 0rem + 10vw, 11.25rem);
    }

    .grid {
      grid-gap: 2rem;
    }
  }
</style>
