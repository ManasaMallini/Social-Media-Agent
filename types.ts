export enum Platform {
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn',
  Instagram = 'Instagram',
  TikTok = 'TikTok'
}

export enum Tone {
  Professional = 'Professional',
  Viral = 'Viral',
  Casual = 'Casual',
  Witty = 'Witty',
  Controversial = 'Controversial'
}

export interface GeneratedPost {
  content: string;
  hashtags: string[];
  platform: Platform;
  tone: Tone;
  timestamp: number;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}

export interface TrendResult {
  title: string;
  summary: string;
  sources: { title: string; uri: string }[];
}

export enum View {
  Dashboard = 'Dashboard',
  Creator = 'Creator',
  Studio = 'Studio',
  Trends = 'Trends'
}