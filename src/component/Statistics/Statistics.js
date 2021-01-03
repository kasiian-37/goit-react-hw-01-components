// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
import PropTypes from "prop-types";
import s from './Statistics.module.css';

function rundomColor() {
  return Math.floor(Math.random() * Math.floor(255));
}
function ColorRandom() {
  return `rgb(${rundomColor()}, ${rundomColor()}, ${rundomColor()})`;
}

function Statistics({title,stats}) {
 return(   
<section className={s.statistics}>
{title && <h2 className={s.title}>{title}</h2>}

  <ul className= {s.statList}>
    {stats.map(stat =>(
    <li className={s.item}
      key={stat.id}
      style={{ backgroundColor: ColorRandom() }}>
      <span className={s.label} >{stat.label}:</span>
      <span className={s.percentage} >{stat.percentage}%</span>
    </li>
    ))}
  </ul>
</section>);
}
Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    stats:PropTypes.number,
  })).isRequired,

}

export default Statistics;