import styles from './News.module.css';

const News = () =>{
    return (
        <div className={styles.wrapper}>
            <h1>News</h1>
            <ul>
                <li>
                Выберите <strong><em>подходящий</em></strong> подходящий вариант подписки. Никаких обязательств — отказаться от подписки вы можете в любой момент. Сервис Apple Music доступен в iTunes.
                </li>
                
            </ul>
        </div>
    )
}

export default News;