
const toImage = (file) => {
  return ["/images/gallery/osteomet", file].join("/");
};

export let osteomet_images = [
  {
    label: "New dawns of laser ablation: useful deposition onto porous/textured surfaces",
    images: [
      {
        id: 1,
        path: toImage("go_01.jpg")
      },
      {
        id: 2,
        path: toImage("go_02.jpg")
      }
    ]
  },
  {
    label: "Calcium discilicide (CaSi<sub>2</sub>)",
    images: [
      {
        id: 1,
        path: toImage("go_03.jpg")
      },
      {
        id: 2,
        path: toImage("go_04.jpg")
      }
    ]
  },
  {
    label: "Viability and proliferation of the cells on all surfaces",
    images: [
      {
        id: 1,
        path: toImage("go_05.jpg")
      },
      {
        id: 2,
        path: toImage("go_06.jpg")
      }
    ]
  },
];
