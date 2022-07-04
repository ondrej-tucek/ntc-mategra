const toImage = (file) => {
  return ["/images", file].join("/");
};

export let images = [
  {
    id: 1,
    path: toImage("i_01.jpg"),
    label: "Laser textured titanium substrate",
  },
  {
    id: 2,
    path: toImage("i_02.jpg"),
    label: "Silica-titania porous bioglass",
  },
  {
    id: 3,
    path: toImage("i_03.jpg"),
    label: "CaTiO<sub>3</sub> porous coating",
  },
  {
    id: 4,
    path: toImage("i_04.jpg"),
    label: "Human mesenchymal stem cells",
  },
  {
    id: 5,
    path: toImage("i_05.jpg"),
    label: "hMSCs from aged osteoporotic donors",
  },
  {
    id: 5,
    path: toImage("i_06.jpg"),
    label: "µ-CT scans of macroporous silica-phosphate bioglass",
  }
];
