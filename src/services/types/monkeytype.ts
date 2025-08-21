export type ResMonkeyTypeProfile = {
  message: string;
  data: {
    uid: string;
    name: string;
    banned: boolean;
    addedAt: number;
    discordId: string;
    discordAvatar: string;
    xp: number;
    lbOptOut: boolean;
    isPremium: boolean;
    inventory: {
      badges: {
        id: number;
        selected: boolean;
      }[];
    };
    allTimeLbs: {
      time: Record<
        string,
        Record<
          string,
          {
            rank: number;
            count: number;
          }
        >
      >;
    };
    testActivity: {
      testsByDays: number[];
      lastDay: number;
    };
    typingStats: {
      completedTests: number;
      startedTests: number;
      timeTyping: number;
    };
    personalBests: {
      time: Record<string, PersonalBestItem[]>;
      words: Record<string, PersonalBestItem[]>;
    };
    streak: number;
    maxStreak: number;
    details: {
      bio: string;
      keyboard: string;
      socialProfiles: {
        twitter: string;
        github: string;
        website: string;
      };
      showActivityOnPublicProfile: boolean;
    };
  };
}

export interface PersonalBestItem {
  acc: number;
  consistency: number;
  difficulty: string;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  numbers: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
}
