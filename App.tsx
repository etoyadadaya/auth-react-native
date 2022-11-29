import Navigation from "./src/navigation/navigation";
import {Auth} from "@services/auth/auth";

export default function App() {
  return (
    <Auth>
      <Navigation />
    </Auth>
  );
}
