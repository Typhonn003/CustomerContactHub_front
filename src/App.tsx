import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts";
import { RoutesMain } from "./routes";
import { globalStyles } from "./style/globalStyle";

export function App() {
  globalStyles();

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}
