import { FC } from "react";
import { Oval } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <div className="loader">
          <Oval
        height={200}
        width={200}
        color="#fff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#fff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
