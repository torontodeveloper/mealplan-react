import Image from "next/image";
import style from "./header.module.css";
import Logo from "../../public/logo.jpeg";

const Header = () => {
  const { logo, header } = style;
  return (
    <header className={header}>
      <Image src={Logo} alt="logo" width={300} height={300} priority={true} />
      <h1>Meal Plan</h1>
      <p>UNBOX A FRESH TAKE ON DINNER</p>
    </header>
  );
};
export default Header;
