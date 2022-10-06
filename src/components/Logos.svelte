<script>
</script>

<div class="box logos">
  <a id="eu" class="link" href="https://europa.eu/" target="_blank" />
  <a
    id="etz"
    class="link"
    href="https://www.by-cz.eu/aktuelles/"
    target="_blank"
  />
  <a id="ntc" class="link" href="https://ntc.zcu.cz/" target="_blank" />
  <a id="ukr" class="link" href="https://www.ukr.de/" target="_blank" />
</div>

<style>
  .logos {
    grid-area: logos;
    padding: 1.3rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* justify-items: center;
  align-items: center; */
    grid-gap: 1rem;
    position: relative;
  }

  .link {
    display: block;
    height: 100%;
    width: 100%;
    padding: 0.75rem;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .link:hover {
    border-radius: 6px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1, 1.1);
    z-index: 999;
  }

  #eu {
    background: url(../static/logos/eu.svg) no-repeat center;
    background-size: cover;
    background-origin: content-box;
  }

  #etz {
    background: url(../static/logos/etz.svg) no-repeat center;
    background-size: cover;
    background-origin: content-box;
  }

  #ntc {
    background: url(../static/logos/zcu.png) no-repeat center;
    background-size: cover;
    background-origin: content-box;
  }

  #ukr {
    background: url(../static/logos/regensburg.svg) no-repeat center;
    background-size: cover;
    background-origin: content-box;
  }

  @media only screen and (max-width: 600px) {
    .logos {
      grid-area: logos;
      padding: 1.3rem;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      /* grid-gap: 1rem; */
      position: relative;
      height: 17rem;
    }

    .link {
      height: 100%;
      width: 100%;
      padding: 1.5rem;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .box {
      border-radius: 0;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    /* .logos {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    } */
  }
</style>
