// Card.jsx

import style from './Card.module.css';

const Card = (props) => {
	// name, github, englishName을 props로 변경
    const { name, github, englishName } = props;

    return (
        <div className={style.card}>
        <p>{name}</p>
        <p>깃허브: {github}</p>
        <p>영문이름: {englishName}</p>
        </div>
    );
    };

export default Card;