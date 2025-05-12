import s from "./Logo.module.css";
import logo from "/logo.png";

const Logo: React.FC = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="Tymchuk Developer Logo" />
    </div>
  );
};
export default Logo;
