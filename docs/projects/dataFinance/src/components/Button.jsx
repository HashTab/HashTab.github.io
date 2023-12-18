const Button = ({ text, style }) => {
  const styleMap = {
    primary: "bg-[#00df9a] text-black ",
    black: "bg-black text-[#00df9a] ",
    left: "md:mx-0 ",
  };
  const styleClasses = style
    .split(" ")
    .map((s) => styleMap[s] || "")
    .join(" ");

  const buttonStyle = `w-[200px] rounded-md font-medium my-6 mx-auto py-3 duration-300 hover:scale-105 ${styleClasses} || ""
  }`;
  return <button className={buttonStyle}>{text}</button>;
};

export default Button;
