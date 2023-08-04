import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap"
import Header from "./components/Header.tsx";

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Container className="my-2">
      <Outlet />
    </Container>
    </>
  )
}

export default App