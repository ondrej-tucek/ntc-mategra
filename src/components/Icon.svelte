<script>
  import i_pdf from "../static/icons/pdf.svg?raw";
  import i_ex_link from "../static/icons/external-link.svg?raw";
  import i_phone from "../static/icons/phone.svg?raw";
  import i_envelope from "../static/icons/envelope.svg?raw";

  export let i;
  let i_obj = new Object();

  const getIcon = (i) => {
    switch (i) {
      case "pdf":
        i_obj = { icon: i_pdf, class: "icon-pdf" };
        break;
      case "ex_link":
        i_obj = { icon: i_ex_link, class: "icon-ex-link" };
        break;
      case "phone":
        i_obj = { icon: i_phone, class: "icon-phone" };
        break;
      case "envelope":
        i_obj = { icon: i_envelope, class: "icon-envelope" };
        break;
      default:
        i_obj = { icon: "", class: "" };
    }

    return i_obj;
  };

  i_obj = getIcon(i);
</script>

<div class={"icon " + i_obj.class}>{@html i_obj.icon}</div>

<style>
  .icon {
    display: inline-block;
    font-weight: 900;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .icon-pdf {
    color: red;
    width: 18px;
    /* height: 24px; */
    vertical-align: -0.125em;
  }

  .icon-ex-link {
    width: 16px;
    /* height: 16px; */
    /* vertical-align: -0.125em; */
  }

  .icon-phone {
    width: 16px;
    /* height: 16px; */
    transform: rotate(90deg);
  }

  .icon-envelope {
    width: 16px;
    /* height: 16px; */
  }
</style>
