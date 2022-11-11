import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>

      <div class={styles.stepsNumbers}>
        {' '}
        <button
          class={`${styles.stepsNumber} ${styles.stepsNumber} ${styles.isActive}`}
          data-role="step-button"
          data-index="1"
        >
          <div class={`${styles.stepsNumberValue} ${styles.stepsNumberValue}`}>1</div>
          <div
            class={`${styles.stepsNumberTitle}`}
            // data-i18n={`${styles.widget.application.steps.first}`}
          >
            CV
          </div>
        </button>{' '}
        <button
          class={`${styles.stepsNumber} ${styles.stepsNumber}`}
          data-role="step-button"
          data-index="2"
        >
          <div class={`${styles.stepsNumberValue} ${styles.stepsNumberValue}`}>2</div>
          <div
            class={`${styles.stepsNumberTitle}`}
            // data-i18n="widget.application.steps.second"
          >
            Dane osobowe
          </div>
        </button>{' '}
        <button
          class={`${styles.stepsNumber} ${styles.stepsNumber}`}
          data-role="step-button"
          data-index="3"
        >
          <div class={`${styles.stepsNumberValue} ${styles.stepsNumberValue}`}>3</div>
          <div
            class={`${styles.stepsNumberTitle}`}
            // data-i18n="widget.application.steps.third"
          >
            Dodatkowe pytania
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
