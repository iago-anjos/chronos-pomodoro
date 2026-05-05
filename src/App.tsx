import { PlayCircleIcon } from "lucide-react";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultInput } from "./components/DefaultInput";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              id="inputForm"
              type="text"
              labelText="Task"
              placeholder="Digite algo"
            />
          </div>
        </form>
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Cycles />
          </div>
        </form>
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="red" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer>
          <a href="">Entenda a tecnica Pomodoro 🍅</a>
          <a href="">
            Chornos Pomodoro &copy; {new Date().getFullYear()} feito com ❤️
          </a>
        </Footer>
      </Container>
    </>
  );
}
