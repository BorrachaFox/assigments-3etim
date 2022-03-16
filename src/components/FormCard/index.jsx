import { FormCardDiv } from "./style";

export const FormCard = () => {
  return (
    <FormCardDiv>
      <h2>Criar Tarefa</h2>
      <form>
        <label>Titulo</label>
        <input type="text" name="title" id="" />
        <label>Descrição</label>
        <textarea type="text" name="description" id="" />
        <label>Data de entrega</label>
        <input type="date" name="title" id="" />
      </form>
    </FormCardDiv>
  )
}
