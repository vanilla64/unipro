import React, {useState} from 'react';
import './Card.sass'
import img from '../../images/card-img.png'

function Card({ title, type, isOpened }) {
  const [isOpen, setIsOpen] = useState(isOpened)

  const styles = {
    li: type
    ? `card card_type_${type}`
    : 'card',
    img: isOpen
      ? 'card__img card__img_opened'
      : 'card__img',
    textContainer: 'card__text-container',
    title: type
      ? `card__title card__title_type_${type}`
      : 'card__title',
    text: isOpen
      ? 'card__text card__text_opened'
      : 'card__text'
  }

  const stylesOpened = {
    li: isOpen
      ? 'card_opened'
      : '',
    title: isOpen
      ? 'card__title_opened'
      : ''
  }

  const onTitleClick = () => {
    if (isOpen) return setIsOpen(false)
    setIsOpen(true)
  }

  return (
    <li className={`${styles.li} ${stylesOpened.li}`}>
      <img className={styles.img} src={img} alt={title}/>
      <div className={styles.textContainer}>
        <h2 onClick={onTitleClick} className={`${styles.title} ${stylesOpened.title}`}>{ title }</h2>
        <p className={styles.text}>
          Размещен Ежеквартальный отчет эмитента за 1 квартал 2019 года
        </p>
        <p className={styles.text}>
          Размещен Ежеквартальный отчет эмитента за 1 квартал 2019 года
        </p>
      </div>
    </li>
  );
}

export default Card;
