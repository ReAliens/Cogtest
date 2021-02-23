const customStyles = {
  clearIndicator: (base) => ({ ...base, cursor: "pointer" }),
  container: (base) => ({
    ...base,
    width: "100%",
  }),
  control: (base, { isDisabled }) => ({
    ...base,
    background: "none",
    backgroundColor: "none",
    borderRadius: "5px",
    borderColor: "rgba(0,0,0,0.01)",
    boxShadow: "0 3px 3px 0 rgba(0,0,0,0.08)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    padding: "0 5px",
    fontSize: "14px",
    color: "#777777",
    minHeight: "40px",
    direction: "rtl",
  }),
  menu: (base) => ({
    ...base,
    background: "#fff",
    backgroundColor: "none",
    zIndex: 3,
    direction: "rtl",
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    direction: "rtl",
  }),
  placeholder: (base) => ({
    ...base,
    color: "headline.800",
    fontSize: "14px",
    fontWeight: "normal",
    direction: "rtl",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "none",
    direction: "rtl",
  }),
};

export default customStyles;
