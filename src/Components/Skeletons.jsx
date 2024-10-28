
const ProductDetailSkeleton = () => {
  return (
    <div className="flex  justify-between items-start *:space-y-4  px-20 my-20">
      <figure className="bg-slate-100 mx-auto">
        <div className="skeleton h-auto max-w-[500px] px-20 py-14 mix-blend-multiply m-auto"></div>
      </figure>
      <article className=" max-w-[500px] max-h-[336px]">
        <div className="skeleton h-4 w-28"></div>
        <div className="flex items-center  gap-2">
          <div className="skeleton h-4 w-28"></div>|
          <div className="skeleton h-4 w-20"></div>
        </div>
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-20"></div>
        <hr />
        <div className="space-y-8">
          <div className="flex justify-start gap-2 items-center">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-20"></div>
          </div>
          <article className="flex items-center">
          <div className="skeleton h-4 w-auto"></div>
          </article>
          <article className="flex items-center gap-3">
            <div className="skeleton h-full w-full"></div>
            <div>
            <div className="skeleton h-4 w-20"></div>
            </div>
           
          </article>
          <div>
          <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-20"></div>
            <div className="flex justify-start gap-3  items-center px-5 py-3 max-w-[450px]">
            
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductDetailSkeleton;
