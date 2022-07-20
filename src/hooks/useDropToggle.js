import { useState } from "react";

export const useDropToggle = () => {
    const [toggle, setToggle] = useState(false);
    const toggleStatus = () => setToggle((prevToggle) => !prevToggle);

    return { toggle, toggleStatus};
}