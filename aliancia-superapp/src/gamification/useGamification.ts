import { GamificationEngine } from "./GamificationEngine";

const engine = new GamificationEngine();

export function useGamification(userId: string) {
  const getAchievements = () => engine.getUserAchievements(userId);
  const addAchievement = (achievement: string) => engine.addAchievement(userId, achievement);
  return { getAchievements, addAchievement };
}
