
const toImage = (file) => {
  return ["/images/gallery/mategra", file].join("/");
};

export let mategra_images = [
  {
    label: "Laser textured titanium substrates: Advanced bioactive nano/-micro topography",
    images: [
      {
        id: 1,
        path: toImage("gm_01.jpg")
      },
      {
        id: 2,
        path: toImage("gm_02.jpg")
      },
      {
        id: 3,
        path: toImage("gm_03.jpg")
      },
    ]
  },
  {
    label: "Novel perspectives of pulsed laser ablation: Bioactive nanoparticles",
    images: [
      {
        id: 1,
        path: toImage("gm_04.jpg")
      },
      {
        id: 2,
        path: toImage("gm_05.jpg")
      },
      {
        id: 3,
        path: toImage("gm_06.jpg")
      },
      {
        id: 4,
        path: toImage("gm_07.jpg")
      },
    ]
  },
  {
    label: "Filling the pores with multi-level porous bioglass in order to improve the long-term stimulation of bone-implant interface",
    images: [
      {
        id: 1,
        path: toImage("gm_08.jpg")
      }
    ]
  },
  {
    label: "Synthesis pathway: Multifunctional sol-gel glasses",
    images: [
      {
        id: 1,
        path: toImage("gm_09.jpg")
      }
    ]
  },
  {
    label: "μCT scans showing open interconnected pore structure driven by TiO2 incorporation",
    images: [
      {
        id: 1,
        path: toImage("gm_10.jpg")
      }
    ]
  },
];
