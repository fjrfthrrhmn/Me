import { ResMonkeyTypeProfile } from '@/services/types/monkeytype';

const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

// Utility function to format time (seconds to hours)
const formatTypingTime = (rawSeconds: number): string => {
  const seconds = Math.floor(rawSeconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};

// Utility function to format join date
const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

// Utility function to calculate XP progress
const calculateXPProgress = (currentXP: number): { level: number; percentage: number; nextLevelXP: number; currentLevelXP: number } => {
  const LEVEL_XP_THRESHOLDS = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000];

  let nextLevelIndex = LEVEL_XP_THRESHOLDS.findIndex(threshold => threshold > currentXP);
  if (nextLevelIndex === -1) nextLevelIndex = LEVEL_XP_THRESHOLDS.length;

  const level = nextLevelIndex; // since thresholds[0] = level 0
  const currentLevelXP = LEVEL_XP_THRESHOLDS[nextLevelIndex - 1] || 0;
  const nextLevelXP = LEVEL_XP_THRESHOLDS[nextLevelIndex] || LEVEL_XP_THRESHOLDS[LEVEL_XP_THRESHOLDS.length - 1] * 1.5;

  const percentage = ((currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return {
    level,
    percentage: Math.min(100, Math.max(0, percentage)),
    nextLevelXP,
    currentLevelXP,
  };
};


// Utility function to find best WPM and accuracy from personalBests
const getBestStats = (personalBests: ResMonkeyTypeProfile['data']['personalBests']) => {
  let bestWPM = 0;
  let bestAccuracy = 0;

  // Check all time and words categories for best stats
  Object.values(personalBests.time).forEach(category => {
    category.forEach(item => {
      if (item.wpm > bestWPM) bestWPM = item.wpm;
      if (item.acc > bestAccuracy) bestAccuracy = item.acc;
    });
  });

  Object.values(personalBests.words).forEach(category => {
    category.forEach(item => {
      if (item.wpm > bestWPM) bestWPM = item.wpm;
      if (item.acc > bestAccuracy) bestAccuracy = item.acc;
    });
  });

  return {
    bestWPM: Math.round(bestWPM),
    bestAccuracy: Math.round(bestAccuracy),
  };
};

export { formatDate, formatTypingTime, formatNumber, getBestStats, calculateXPProgress };
