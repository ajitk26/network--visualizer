
export const defaultNetwork = {
  key: 0,
  graph: {
    nodes: [
      { id: 1, label: "" },
      { id: 2, label: "" },
      { id: 3, label: "" },
      { id: 4, label: "" },
      { id: 5, label: "" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 1, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 3 },
    ],
  },
};
