import s from "./Statistics.module.css"
import { getRandomHexColor } from "../../functions/randomColor";


export const Statistics = ({statistic}) => {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>

            <ul className={s.list}>
                {statistic.map(({ id, label, percentage }) => (
                    <li className={s.item} key={id}
                        style={{backgroundColor: getRandomHexColor()}}
                    >
                        <span className={s.label}>{ label }</span>
                        <span className={s.percentage}>{ percentage }%</span>
                    </li>
                ))}
           
            </ul>
        </section>
    )
}

// export default Statistics;