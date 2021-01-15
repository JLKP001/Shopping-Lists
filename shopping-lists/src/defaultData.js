const data = [
  {
    id: 1,
    name: "Chicken Rice",
    subList: [
      { id: 1, name: "rice", quantity: "250g", checked: true },
      { id: 2, name: "chicken", quantity: "1kg", checked: true },
      { id: 3, name: "salt", quantity: "30g", checked: true },
    ],
  },
  {
    id: 2,
    name: "Fried Pork Chop",
    subList: [
      { id: 1, name: "pork shoulder", quantity: "500g", checked: false },
      { id: 2, name: "corn flour", quantity: "120g", checked: true },
      { id: 3, name: "breadcrumbs", quantity: "200g", checked: false },
    ],
  },
  {
    id: 3,
    name: "Baked Miso Cod",
    subList: [
      { id: 1, name: "Cod fillet", quantity: "330g", checked: true },
      { id: 2, name: "miso", quantity: "80g", checked: false },
      { id: 3, name: "mirin", quantity: "150ml", checked: true },
    ],
  },
];

export default data;
