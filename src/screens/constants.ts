export interface DecodedToken {
  id: number;
  email: string;
  sessionId: string;
  username: string;
  iat: number; 
  exp: number;
}

export enum GameCategory {
  MainGame = 0,
  DlcAddon = 1,
  Expansion = 2,
  Bundle = 3,
  StandaloneExpansion = 4,
  Mod = 5,
  Episode = 6,
  Season = 7,
  Remake = 8,
  Remaster = 9,
  ExpandedGame = 10,
  Port = 11,
  Fork = 12,
  Pack = 13,
  Update = 14,
}

export const categoryStrings: Record<number, string> = {
  [GameCategory.MainGame]: 'Main Game',
  [GameCategory.DlcAddon]: 'DLC Addon',
  [GameCategory.Expansion]: 'Expansion',
  [GameCategory.Bundle]: 'Bundle',
  [GameCategory.StandaloneExpansion]: 'Standalone Expansion',
  [GameCategory.Mod]: 'Mod',
  [GameCategory.Episode]: 'Episode',
  [GameCategory.Season]: 'Season',
  [GameCategory.Remake]: 'Remake',
  [GameCategory.Remaster]: 'Remaster',
  [GameCategory.ExpandedGame]: 'Expanded Game',
  [GameCategory.Port]: 'Port',
  [GameCategory.Fork]: 'Fork',
  [GameCategory.Pack]: 'Pack',
  [GameCategory.Update]: 'Update',
};