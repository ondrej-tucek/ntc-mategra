<script>
  import { events } from "../data/events.js";

   export let links;
</script>

<nav class="navbar">
  <a
    class="navbar-item"
    href="/">Mategra</a
  >
  <a
    class="navbar-item"
    href="/about">About</a
  >
  <a
    class="navbar-item"
    href="/group">Group</a
  >
  <a
    class="navbar-item"
    data-sveltekit-prefetch
    href="/gallery">Gallery</a
  >
  <div class="navbar-item dropdown">
    Events
    <div class="dropdown-content">
      {#each events as event}
        <a
          class="dropdown-link"
          rel="prefetch"
          href={event.route_to}
          >{@html event.header}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.75rem;
    /* background: lightcoral; */
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

  .navbar-item:first-child {
    color: var(--clr-ntc);
  }

  .navbar-item:first-child:hover {
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

    .navbar-item:first-child {
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

    .navbar-item:first-child {
      border: 2px solid var(--clr-ntc);
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
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
    width: 60vw;
  }

  .dropdown:hover {
    background-color: var(--clr-ukr);
  }

  .dropdown-link {
    color: black;
    padding: 0.75rem 0.75rem 0.75rem 0;
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
</style>
