import Image from "next/image";
import styles from "./page.module.css";
import Home from "./Home/page";

export default function Page() {
  return (
    <main className={styles.main}>
      <Home/>    
    </main>
  );
}
