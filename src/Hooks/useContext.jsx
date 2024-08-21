import { useContext } from "react";
import { Context } from "../AuthProvider";

const useAuth = () => {
    const all = useContext(Context)
    return all;
};

export default useAuth;