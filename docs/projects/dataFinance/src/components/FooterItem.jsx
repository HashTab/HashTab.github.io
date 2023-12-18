const FooterItem = ({ title, items }) => {
  return (
    <div>
      <h6 className="font-medium text-gray-400">{title}</h6>
      <ul>
        {items.map((item) => {
          return (
            <li
              className="py-2 text-sm cursor-pointer hover:text-[#00df9a]"
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
