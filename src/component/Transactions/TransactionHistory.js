import s from './TransactionHistory.module.css';
import PropTypes from "prop-types";
function TransactionHistory({items}) {
  return(
  <table className={s.transactionHistory}>
  <thead >
    <tr className={s.head}>
      <th className={s.thHead}>Type</th>
      <th className={s.thHead}>Amount</th>
      <th className={s.thHead}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency})=>(
    <tr  key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))}
  </tbody>
</table>);
}
TransactionHistory.propTypes={
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}; 

export default TransactionHistory;
