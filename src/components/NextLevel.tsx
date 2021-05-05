import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/NextLevel.module.css";

export function NextLevel() {
  const { level } = useContext(ChallengesContext);

  const [isNewLevel, setIsNewLevel] = useState(false);

  useEffect(() => {
    if (level > 1) {
      setIsNewLevel(true);
    }
  }, [level]);

  return (
    <div>
      {isNewLevel ? (
        <div className={styles.nextLevelContainer}>
          <div className={styles.popUp}>
            <button
              onClick={() => {
                setIsNewLevel(false);
              }}
            >
              <img src="icons/close.svg" alt="Close" />
            </button>
            <div>
              <div className={styles.nextLevel}>
                <div>
                  <img src="icons/levelup.svg" alt="Next Level" />
                  <span>{level}</span>
                </div>
                <h2>Parabéns</h2>
                <p>você alcançou um novo level.</p>
              </div>
              <button className={styles.twitterButton}>
                <span>Compartilhar no twitter</span>
                <img src="icons/twitter.svg" alt="Twitter" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
