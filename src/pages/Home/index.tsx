import { PlayCircleIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Cycles } from "../../components/Cycles";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export function Home(props: HomeProps) {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm>
            <DefaultInput
              id="inputForm"
              type="text"
              labelText="Task"
              placeholder="Digite algo"
            />
          </MainForm>
        </Container>

        <Container>
          <MainForm>
            <Cycles />
          </MainForm>
        </Container>

        <Container>
          <MainForm>
            <DefaultButton icon={<PlayCircleIcon />} />
          </MainForm>
        </Container>
      </MainTemplate>
    </>
  );
}
