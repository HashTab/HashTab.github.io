const Versions = ({ style }) => {
  return (
    <div className={`text-white text-2xl p-8 fixed ${style} z-40`}>
      <div className="flex gap-3 p-4">
        <a
          href="https://hashtab.github.io/v1/"
          className="hover:text-main-orange duration-300"
        >
          v1
        </a>
      </div>
    </div>
  );
};

export default Versions;
