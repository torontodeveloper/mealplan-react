import style from "./display-plan.module.css";
import hello from "../../public/heateat.png";
import Image from "next/image";

const DisplayPlan = ({
  title,
  description,
  servings_per_week,
  price_per_serving,
}) => {
  const { card } = style;
  return (
    <li>
      <h3>{title}</h3>
      <Image src={hello} alt="logo" width={400} height={300} />
      <p>{description}</p>
      <p>{servings_per_week}</p>
      <p>{price_per_serving}</p>
    </li>
  );
};
export default DisplayPlan;
