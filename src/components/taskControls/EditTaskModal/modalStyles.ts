import { mainBlueAccent } from "utils/globalVariables";

export const mainModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 240,
  "@media (min-width: 768px)": {
    width: 300,
  },
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  p: 4,
};

export const closeButtonStyle = {
  position: "absolute",
  top: 12,
  right: 20,
  color: `${mainBlueAccent}`,
} as React.CSSProperties;
