import teamLogos from './teamLogos.json';

interface TeamLogo {
  name: string;
  logo: string;
}

const logoMap: Record<string, string> = {};
for (const entry of teamLogos as TeamLogo[]) {
  logoMap[entry.name.toLowerCase()] = entry.logo;
}

const aliasMap: Record<string, string> = {
  'wolves': 'wolverhampton wanderers',
  'tottenham': 'tottenham hotspur',
  'west ham': 'west ham united',
  'newcastle': 'newcastle united',
  'brighton': 'brighton',
  'ipswich': 'ipswich town',
  'nottm forest': 'nottingham forest',
  'leicester': 'leicester city',
  'bournemouth': 'bournemouth',
  'sunderland': 'sunderland',
  'leeds': 'leeds united',
  'burnley': 'burnley',
};

export function getTeamLogo(teamName: string): string | undefined {
  const lower = teamName.toLowerCase().trim();
  if (logoMap[lower]) return logoMap[lower];
  const alias = aliasMap[lower];
  if (alias && logoMap[alias]) return logoMap[alias];
  for (const [key, url] of Object.entries(logoMap)) {
    if (key.includes(lower) || lower.includes(key)) return url;
  }
  return undefined;
}
