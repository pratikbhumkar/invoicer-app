import styled from 'styled-components'

export const StyledTable = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  border-radius: 5px;
  border: 0.5px solid black;
  border-bottom: none;
`

export const StyledTableHead = styled.th`
  background-color: #7687fc;
  color: #ffffff;
  height: 20px;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
`

export const StyledTableData = styled.td`
  padding: 12px 15px;
  border-right: 0.5px black solid;
  border-bottom: 0.5px black solid;
  width: 100px;
  color: #001052;
  border-radius: 4px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const StyledButton = styled.button`
  background-color: #7687fc;
  color: #ffffff;
  border-radius: 3px;
  box-shadow: none;
  width: 80px;
  height: 30px;
`

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`
