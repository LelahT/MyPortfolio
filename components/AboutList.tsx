import { IoMdStar } from "react-icons/io";

type Props={
    title:string
}

const AboutList = ({  title }:Props) => {
  return (
    <h4 className="text-2xl font-semibold flex items-center gap-4">
      <span className="text-designColor"><IoMdStar /></span>
      {title}
    </h4>
  );
};

export default AboutList;
