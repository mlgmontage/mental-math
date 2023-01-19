import Sidebar from "features/Sidebar";
import Routing from "pages";
import { withProvider } from "./providers/with-providers";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Routing />
    </div>
  );
};

export default withProvider(App);
