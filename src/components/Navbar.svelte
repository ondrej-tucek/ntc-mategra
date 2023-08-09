<script>
  import { events } from "../data/events.js";
  import Icon from "./Icon.svelte";
  let is_dropdown_open = false;

  const handle_dropdown = () => {
    is_dropdown_open = !is_dropdown_open;
  };
</script>

<nav class="navbar">
  <a class="navbar-item navbar-item-first" href="/">Home</a>
  <a class="navbar-item" href="/mategra">Mategra</a>
  <a class="navbar-item" href="/osteomet">Osteomet</a>
  <a class="navbar-item" href="/group">Group</a>
  <div class="dropdown-group">
    <div class="navbar-item flex">
      Gallery
      <svg
        class="icon-down-arrow"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
        ><path
          fill="currentColor"
          d="M 31.330632,7.8284201 C 30.771554,7.2693419 29.864926,7.2692464 29.305753,7.8285156 L 16.000339,21.134216 2.6942578,7.8284201 C 2.1351804,7.2693419 1.2285527,7.2692464 0.66937977,7.8285156 c -0.55917296,0.5591738 -0.55917296,1.4657048 0,2.0248788 L 14.987948,24.17158 c 0.268514,0.268514 0.632674,0.419332 1.012391,0.419332 0.379719,0 0.743974,-0.150913 1.012392,-0.419427 L 31.330537,9.8532984 c 0.559268,-0.559078 0.559268,-1.465705 9.5e-5,-2.0248783 z"
          style="stroke-width:1"
        /></svg
      >
    </div>
    <div class="dropdown-list">
      <a data-sveltekit-prefetch href="/gallery-mategra">Mategra</a>
      <a data-sveltekit-prefetch href="/gallery-osteomet">Osteomet</a>
    </div>
  </div>
  <div
    class="navbar-item dropdown"
    on:click={handle_dropdown}
    role="button"
    tabIndex="0"
  >
    Events
    <div
      class="dropdown-content"
      style:visibility={is_dropdown_open ? "visible" : "hidden"}
    >
      {#each events as event}
        <a class="dropdown-link" rel="prefetch" href={event.route_to}
          >{@html event.header}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .dropdown-group {
    position: relative;
    display: inline-block;
    color: var(--clr-ukr);
  }

  .dropdown-group:hover .navbar-item {
    color: white;
    background-color: var(--clr-ukr);
  }

  .dropdown-list {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: 160px; */
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-list a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-list a:hover {
    background-color: #f1f1f1;
  }

  .dropdown-group:hover .dropdown-list {
    display: block;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25em;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.75rem;
    background-color: white;
    /* padding: 0.5rem 0; */
    padding: 0 1rem;
    cursor: pointer;
  }

  .navbar-item {
    padding: 0.25rem 1rem;
    color: var(--clr-ukr);
    transition: 0.4s;
    text-align: center;
    /* font-size: clamp(2rem, 0.2222rem + 3.7037vw, 3rem); */
    font-size: var(--fs-3);
    font-weight: 400;
  }

  .navbar-item:hover {
    color: white;
    background-color: var(--clr-ukr);
  }

  .navbar-item-first {
    color: var(--clr-ntc);
  }

  .navbar-item-first:hover {
    color: white;
    background-color: var(--clr-ntc);
  }

  .navbar-item:last-child {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .navbar {
      margin-bottom: 0;
    }
    .navbar-item {
      font-size: var(--fs-4);
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 900px) {
    .navbar {
      padding: 0;
      gap: 0;
    }

    .navbar-item {
      font-size: var(--fs-4);
      padding: 0.75rem 1rem;
      color: #fff;
      background-color: var(--clr-ukr);
      width: 100%;
    }

    .navbar-item-first {
      color: #fff;
      background-color: var(--clr-ntc);
    }

    .navbar-item:last-child {
      display: inline;
    }
  }

  @media only screen and (min-width: 901px) {
    .navbar-item {
      padding: 0.25rem clamp(0.5rem, -1.75rem + 3vw, 2rem);
      font-size: var(--fs-3);
      border-radius: 6px;
      border: 2px solid var(--clr-ukr);
    }

    .navbar-item-first {
      border: 2px solid var(--clr-ntc);
    }

    .icon-down-arrow {
      position: relative;
      top: 0.2rem;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown:hover {
    display: block;
    background-color: var(--clr-ukr);
  }

  .dropdown-content {
    display: none;
    width: 100vw;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
    top: 48px;
    font-size: 1.2rem;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-link {
    color: black;
    padding: 0.75rem;
    text-decoration: none;
    display: block;
    font-size: var(--fs-5);
    text-align: right;
    border-bottom: 1px solid lightgray;
  }

  .dropdown-link:hover {
    background-color: #f1f1f1;
  }

  .dropdown-link:last-child {
    border-bottom: 0;
  }

  .icon-down-arrow {
    width: 1em;
  }
</style>
