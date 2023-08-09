<script>
  import "../css/reset.css";
  import "../css/global.css";
  import Navbar from "../components/Navbar.svelte";
  import Events from "../components/EventsList.svelte";
  import Logos from "../components/Logos.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Mategra & Osteomet</title>
</svelte:head>
<section class="grid-wrap">
  <div class="grid">
    <div class="main box">
      <Navbar />
      <div
        class={$page.url.pathname === "/" ? "mategra-home" : "content scroll"}
      >
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
    display: flex;
    flex-flow: column;
    gap: 2rem;
    position: relative;
    scroll-behavior: smooth;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding: 0 1rem 1rem 1rem;
    height: calc(100vh - 8vh - 8.6rem);
    /* background: paleturquoise; */
  }

  @media only screen and (max-width: 600px) {
    .content {
      height: 100%;
      padding: 1rem;
    }

    .grid-wrap {
      padding: 0;
      width: 100%;
      height: 100vh;
    }

    .grid {
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto 4fr;
      grid-template-areas:
        "main"
        "logos";
      grid-gap: 0;
    }

    .main {
      padding: 0;
      height: 100%;
    }

    .mategra-home {
      /* height: 100%; */
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto 2fr;
      grid-template-areas:
        "info"
        "slider";
      grid-gap: 0;
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
