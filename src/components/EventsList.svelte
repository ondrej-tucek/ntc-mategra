<script>
  import EventCard from "../components/EventCard.svelte";
  import { events } from "../data/events.js";
</script>

<div class="events box">
  <div class="event-title">Events</div>
  <div class="event-items scroll">
    {#each events as event}
      <EventCard {event} />
    {/each}
  </div>
</div>

<style>
  .events {
    grid-area: events;
    width: 100%;
    padding: 2rem 1rem 1rem 1rem;
    /* background: lightskyblue; */
  }

  .event-items {
    scroll-behavior: smooth;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.75rem 1.25rem 0.75rem 1.25rem;
    width: 100%;
    height: calc(100vh - 8vh - 8rem - 35vh);
  }

  .event-title {
    padding: 0.25rem 1rem;
    width: 100%;
    margin-bottom: 1rem;
    font-size: var(--fs-3);
    font-weight: 400;
    border: 2px solid transparent;
  }

  @media only screen and (max-width: 900px) {
    .events {
      display: none;
    }
  }

  @media only screen and (min-width: 1200px) {
    .event-items {
      height: calc(100vh - 8vh - 9rem - 32vh);
    }

    /* .event-title {
      font-size: var(--fs-3);
      padding: 0.75rem 1rem;
    } */
  }
</style>
