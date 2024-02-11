import ChoiceProduct from "./pages/ChoiceProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RecoilRoot} from "recoil";


function App() {
	return (
		<RecoilRoot>
			<ChoiceProduct />
		</RecoilRoot>
	);
}

export default App;
