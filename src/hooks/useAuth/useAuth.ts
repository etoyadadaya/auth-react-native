import {useContext} from "react";
import {AuthContext} from "@services/index";

export const useAuth = () => {
	return useContext(AuthContext);
}
