export interface AnalyticsData {
  /** Number of leads (users) */
  ua: number;
  /** Number of paying customers */
  buyers: number;
  /** Number of payments */
  payments: number;
  revenue: number;
  /** acquisition cost */
  ac: number;
}

export interface ChannelAnalyticsData extends AnalyticsData {
  channel: string;
  channelLabel: string;
}
