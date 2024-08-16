import { HistoryContianer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContianer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tareda</td>
              <td>20 minutos</td>
              <td>Há cercaa de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tareda</td>
              <td>20 minutos</td>
              <td>Há cercaa de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tareda</td>
              <td>20 minutos</td>
              <td>Há cercaa de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tareda</td>
              <td>20 minutos</td>
              <td>Há cercaa de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tareda</td>
              <td>20 minutos</td>
              <td>Há cercaa de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContianer>
  )
}
