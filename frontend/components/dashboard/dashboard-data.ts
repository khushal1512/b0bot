export type TableColumn = {
  key: string;
  label: string;
  className?: string;
};

export type TableRow = Record<string, string>;

export const cveWatchlistColumns: TableColumn[] = [
  { key: "cveId", label: "CVE-ID", className: "w-28" },
  { key: "severity", label: "SEVERITY", className: "w-20" },
  { key: "system", label: "SYSTEM", className: "w-24" },
  { key: "date", label: "DATE", className: "w-24" },
];

export const topNewsColumns: TableColumn[] = [
  { key: "cveId", label: "CVE-ID", className: "w-28" },
  { key: "type", label: "TYPE", className: "w-20" },
  { key: "system", label: "SYSTEM", className: "w-24" },
  { key: "date", label: "DATE", className: "w-24" },
];

export const cveRows: TableRow[] = [
  {
    cveId: "CVE-2023-1234",
    severity: "CRITICAL",
    type: "CRITICAL",
    system: "Windows Server",
    date: "10-12-2025",
  },
  {
    cveId: "CVE-2023-1234",
    severity: "HIGH",
    type: "HIGH",
    system: "Apache",
    date: "10-12-2025",
  },
  {
    cveId: "CVE-2023-1234",
    severity: "CRITICAL",
    type: "CRITICAL",
    system: "Cisco IOS XE",
    date: "10-12-2025",
  },
  {
    cveId: "CVE-2023-1234",
    severity: "CRITICAL",
    type: "CRITICAL",
    system: "Open SSl",
    date: "10-12-2025",
  },
  {
    cveId: "CVE-2023-1234",
    severity: "CRITICAL",
    type: "CRITICAL",
    system: "WINDOWS",
    date: "10-12-2025",
  },
];

export type FeedItem = {
  time: string;
  source: string;
  title: string;
  subtitle: string;
};

export const feedItems: FeedItem[] = [
  {
    time: "10:42 UTC",
    source: "Cyware",
    title: "New Github repository detected matching 'CobalStrike'",
    subtitle:
      "User 'AnonDev' uploaded obscured payload to recent banking trojan campaign",
  },
  {
    time: "10:12 UTC",
    source: "Hacker News",
    title: "Snowflake Warns: Targeted Credential Theft Hits Cloud.",
    subtitle:
      "USnowflake releases a warning to global cloud customers to be ware of new wave of attacks.",
  },
  {
    time: "10:42 UTC",
    source: "Cyware",
    title: "New Github repository detected matching 'CobalStrike'",
    subtitle:
      "User 'AnonDev' uploaded obscured payload to recent banking trojan campaign",
  },
];

export const feedFilters = ["Newest", "Critical", "Frequent"] as const;
