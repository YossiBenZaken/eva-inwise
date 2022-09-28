export interface Tag {
  tag: string;
  sent: number;
  hard_bounces: number;
  soft_bounces: number;
  rejects: number;
  complaints: number;
  unsubscribes: number;
  opens: number;
  clicks: number;
  apiKey: string;
}
