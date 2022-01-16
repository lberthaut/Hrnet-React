import { useState } from "react";

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