import { useEffect, useState } from "react";
import tools from "../utils/tools";

export const useGetData = () => {
    const [inv, setInv] = useState([]);

    useEffect(() => {
        tools
          .getInv()
          .then((res) => {
            setInv(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(function () {});
      }, []);

      return [inv]; 
}