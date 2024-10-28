const Rivewcard = ({ imgSrc, title, views }) => {
  return (
    <div className="flex flex-col justify-between items-center border border-gray-500 rounded-md w-60  h-44 py-3 ">
      <figure className="bg-gray-300 rounded-full p-2 size-20 hover:bg-gray-200 ">
        <img
          src={imgSrc}
          alt={title}
          className="bg-black rounded-full h-16 px-4 "
        />
      </figure>
      <article className="flex flex-col items-center justify-between gap-2">
        <h1 className=" text-2xl font-bold leading-7 ">{views}</h1>
        <p className="font-poppins text-base tracking-wide">{title}</p>
      </article> 
    </div>
  );
};

export default Rivewcard;
