import { useState } from "react";

/*Toggle function for the state employee line of the array*/
const useArray = () => {
    const [notHide, setNotHide] = useState(false);

    function switched() {
        setNotHide(!notHide);
    }

    return {
        notHide,
        switched
    };
};

export default useArray;