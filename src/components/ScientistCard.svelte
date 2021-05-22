<script>
  import Icon from "./Icon.svelte";

  export let scientist;
</script>

<div class="card-scientist zoom">
  <div
    class="card__map"
    style="background-image: url({scientist.location_building})"
  >
    <a
      class="btn-map has-text-weight-medium"
      href={scientist.location_link}
      target="_blank"
    >
      Map
    </a>
  </div>

  <div class="card__bio">
    <p class="scientist__department {scientist.employee_of}-department">
      {scientist.department}
    </p>
    <div class="scientist__address">
      <div
        class="scientist__avatar"
        style="background-image: url({scientist.avatar})"
      />
      <div class="scientist__contact">
        <p class="has-text-weight-semibold">{scientist.name}</p>
        <p>
          <Icon i={"phone"} />
          <span class="pl-1">{scientist.phone}</span>
        </p>
        <p>
          <Icon i={"envelope"} />
          <span class="pl-1">{scientist.email}</span>
        </p>
      </div>
    </div>
  </div>

  <div class="card__links">
    <a class="orcid-link" target="_blank" href={scientist.orcid_link}>
      <img
        src={"/logos/orcid.svg"}
        class="logo--size"
        alt="Orcid logo"
        loading="lazy"
      />
    </a>
    <a class="gate-link" target="_blank" href={scientist.researchgate_link}>
      <img
        src={"/logos/ResearchGate.svg"}
        class="logo--size"
        alt="Researchgate logo"
        loading="lazy"
      /></a
    >
  </div>
</div>

<style>
  .card-scientist {
    display: flex;
    flex-direction: column;
    width: 21.5rem;
    height: 26rem;
    border: 1px solid lightgray;
    border-radius: 6px;
    background-color: #fff;
  }

  .card__map {
    position: relative;
    width: 100%;
    height: 44%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .card__bio {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 46%;
  }

  .card__links {
    position: relative;
    width: 100%;
    height: 10.5%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .scientist__address {
    display: flex;
    /* justify-content: center; */
    width: 100%;
    padding: 0.75rem;
  }

  .scientist__department {
    font-size: var(--fs-5);
    padding: 0.75rem 2rem 0.5rem 2rem;
    text-align: center;
  }

  .ntc-department {
    color: var(--clr-ntc);
  }

  .ukr-department {
    color: var(--clr-ukr);
  }

  .scientist__avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 6px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .scientist__contact {
    font-size: var(--fs-6);
    padding-left: 0.65rem;
    margin-top: -0.25rem;
    line-height: 1.8;
  }

  .orcid-link {
    width: 50%;
    padding: 0.5rem;
    text-align: center;
    float: left;
    border-top: 1px solid lightgray;
  }

  .gate-link {
    width: 50%;
    padding: 0.5rem;
    float: right;
    text-align: center;
    border-left: 1px solid lightgray;
    border-top: 1px solid lightgray;
  }

  .orcid-link:hover,
  .gate-link:hover {
    background-color: rgba(211, 211, 211, 0.4);
    color: white;
  }

  .btn-map {
    position: absolute;
    bottom: 5%;
    left: 0.75rem;
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    padding: 0.25em 0.75rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: var(--fs-6);
  }

  .btn-map:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .logo--size {
    height: 1.25rem;
  }

  .logo-uni {
    padding: 0.75rem;
    bottom: 5%;
    right: 5%;
    float: right;
    text-align: center;
    position: absolute;
  }

  .logo-uni > img {
    height: 5rem;
  }
</style>
