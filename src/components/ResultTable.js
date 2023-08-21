import React from 'react'
import "../styles/Result.css";
function ResultTable() {
  return (
    <div>

      <table>
        <thead className='table-header'>
            <tr className='table-row'>
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn points</td>
            <td>Result</td>
            </tr>
        </thead>
        <tbody>
            <tr className = 'table-body'>
                <td>quiz hub</td>
                <td>03</td>
                <td>20</td>
                <td>Passed</td>
            </tr>

        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
