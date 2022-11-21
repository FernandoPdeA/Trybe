import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Footer() {
  const { value } = useContext(ThemeContext);
  const { color } = value;

  return (
    <footer className={color}>
      <p>© 2021</p>
    </footer>
  );
}