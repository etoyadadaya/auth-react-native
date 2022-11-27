import {AuthProvider} from "./app/providers/authProvider";
import Navigation from "./app/navigation/navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
