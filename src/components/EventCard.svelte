<script>
  import { routeStore } from "../store/route.js";

  export let event;
</script>

<a
  class="card-link"
  rel="prefetch"
  href={event.route_to}
  on:click={() => ($routeStore = event.route_to)}
>
  <div class="card zoom">
    <div class="card-header">
      <span class="card-header-text">{@html event.header}</span>
    </div>
    <div class="card-body">
      <p class={"card-body-text " + event.body_text}>{@html event.body}</p>
    </div>
    <div class="card-footer">
      <span class="card-footer-text">{@html event.footer}</span>
    </div>
  </div>
</a>

<style>
  .card {
    padding: 1rem;
    border-radius: 6px;
    background-color: #eef6fc;
    box-shadow: none;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .card:hover {
    border-radius: 6px;
    box-shadow: 0 0px 10px rgb(0 0 0 / 50%);
    transform: scale(1.05, 1.05);
    z-index: 999;
  }

  .card-link {
    width: 100%;
    display: inline-block;
    margin-bottom: 1.25rem;
  }

  .card-link:last-of-type {
    margin-bottom: 0;
  }

  .card-header {
    margin-bottom: 1rem;
    text-align: left;
  }

  .card-body {
    padding-bottom: 12px;
  }

  .card-footer {
    text-align: right;
  }

  .card-header-text {
    color: var(--clr-text);
    font-weight: 600;
    line-height: 1.125;
    font-size: var(--fs-6);
  }

  .card-body-text {
    color: var(--clr-text);
    font-size: var(--fs-6);
  }

  .card-footer-text {
    color: var(--clr-text);
    font-size: var(--fs-6);
  }
</style>
