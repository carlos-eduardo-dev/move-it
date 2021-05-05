import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  challengeComplete: () => void;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function levelUp() {
    setLevel(level + 1);
  }

  function challengeComplete() {
    setChallengesCompleted(challengesCompleted + 1);
    if (currentExperience + activeChallenge.amount >= experienceToNextLevel) {
      setCurrentExperience(
        currentExperience + activeChallenge.amount - experienceToNextLevel
      );
      resetChallenge();
      levelUp();
      return;
    }

    setCurrentExperience(currentExperience + activeChallenge.amount);
    resetChallenge();
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        challengeComplete,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
