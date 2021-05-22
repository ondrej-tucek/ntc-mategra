const toImage = (file) => {
  return ["/images/gallery", file].join("/");
};

export let images = [
  {
    id: 1,
    path: toImage("g_01.jpg"),
    label: "Laser textured titanium substrate",
  },
  {
    id: 2,
    path: toImage("g_03.jpg"),
    label: "Silica-titania porous bioglass",
  },
  {
    id: 3,
    path: toImage("g_02.jpg"),
    label: "CaTiO<sub>3</sub> porous coating",
  },
  {
    id: 4,
    path: toImage("g_04.jpg"),
    label: "MC-3T3 cell activity assay",
  },
];
