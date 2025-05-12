import clsx from "clsx";
import s from "./Atom.module.css";
import { baseSkills } from "../../assets/techSkills.ts";

const Atom: React.FC = () => {
  return (
    <div className={s.atom}>
      <div className={s.center}></div>
      <div className={clsx(s.orbit, s.orbit1)}>
        <div className={clsx(s.electron, s.electron1)}>
          <img src={baseSkills[2].img} alt={baseSkills[2].title} width="80" />
        </div>
      </div>
      <div className={clsx(s.orbit, s.orbit2)}>
        <div className={clsx(s.electron, s.electron2)}>
          <img src={baseSkills[3].img} alt={baseSkills[3].title} width="80" />
        </div>
      </div>
      <div className={clsx(s.orbit, s.orbit3)}>
        <div className={clsx(s.electron, s.electron3)}>
          <img src={baseSkills[5].img} alt={baseSkills[5].title} width="80" />
        </div>
      </div>
    </div>
  );
};
export default Atom;
