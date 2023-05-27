import { AuthProvider } from "./contexts";
import { RoutesMain } from "./routes";
import { globalStyles } from "./style/globalStyle";

export function App() {
  globalStyles();

  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}
