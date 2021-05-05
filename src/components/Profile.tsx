import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/carlos-eduardo-dev.png"
        alt="Carlos Eduardo"
      />
      <div>
        <strong>Carlos Eduardo</strong>
        <p>
          <img src="icons/level.svg" alt="Profile Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
