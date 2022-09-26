export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const layoutStyle = {
  width: "15rem",
  height: "20rem",
  backgroundColor: "gray",
  padding: "1rem"
};

export const rowStyle = {
  ...flex,
  justifyContent: "space-between",
  marginBottom: "10px",
  gap: "10px",
  height: "2rem"
};

export const btnStyle = {
  ...flex,
  width: "100%",
  height: "100%",
  cursor: "pointer",
  fontWeight: "bold"
};

export const displayStyle = {
  ...flex,
  justifyContent: "right",
  width: "100%",
  height: "4rem",
  backgroundColor: "white",
  marginBottom: "20px",
  border: "1px solid black",
  borderRadius: "10px",
  color: "black"
};
