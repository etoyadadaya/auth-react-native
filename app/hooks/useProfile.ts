import {useEffect, useMemo, useState} from "react";
import {collection, limit, onSnapshot, query, where} from "firebase/firestore";
import {useAuth} from "./useAuth";
import {db} from "../firebase";

interface IProfile {
	id: string;
	name: string;
	docId: string;
}

export const useProfile = () => {
	const {user} = useAuth();

	const [isLoading, setIsLoading] = useState(true);
	const [profile, setProfile] = useState<IProfile>({} as IProfile);
	const [name, setName] = useState("");

	useEffect(() =>
			onSnapshot(query(collection(db, "users"),
			where("uid", "==", user?.uid), limit(1)), snapshot => {
				const profile = snapshot.docs.map(d => ({
					...(d.data() as IProfile),
					docId: d.id
				}))[0]
				setProfile(profile);
				setName(profile.name);
				setIsLoading(false);
			}), []);

	return useMemo(() => ({
		profile, isLoading, name, setName
	}), [isLoading, name]);
}
