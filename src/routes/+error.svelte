<script context="module">
  import { page } from '$app/stores';
  import { dev } from "$app/environment";
</script>

<div class="center">
  <div>
    <h1>{$page.status}</h1>

    <p>{$page.error.message}</p>
  </div>
</div>

{#if dev}
  <div class="error-stack">
    HTTP status: <pre>{$page.status}</pre>
    Error message: <pre>{$page.error.message}</pre>
  </div>
{/if}


<style>
  .error-stack {
    position: absolute;
    width: 100%;
    padding: 1rem 1.5rem;
    left: 0;
    bottom: 0;
    background-color: hsl(0, 75%, 60%);
    z-index: 999;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    text-align: center;
    padding: 1.5rem 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
