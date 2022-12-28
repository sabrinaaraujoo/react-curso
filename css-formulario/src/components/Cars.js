import styles from "./Cars.module.css";

const Cars = ({ name, brand, color }) => {
  return (
    <div className={styles.box}>
      <h2>{name}</h2>
      <div className={styles.info}>Marca: {brand}</div>
      <div className={styles.info}>Cor: {color}</div>
    </div>
  );
};

export default Cars;
