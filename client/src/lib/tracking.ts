export const TIER1_OFFER_URL =
  "https://afflat3d2.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=30617&c=918277&a=798445&k=768ACFA5903B7AC0B88F2476C065073E&l=35113";
export const VPN_OFFER_URL =
  "https://afflat3d2.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=24611&c=918277&a=798445&k=F4859346A6F515A3DC1DD17791DFD840&l=33159";

// Reads the slug a visitor arrived through (set by /go/<slug>), so we can pass
// it along to the affiliate offer as a sub-ID and see which source converts.
export function getTrafficSourceSlug(): string {
  const match = document.cookie.match(/(?:^|;\s*)tr_src=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "direct";
}

export function withSubid(url: string): string {
  const withParam = new URL(url);
  withParam.searchParams.set("s1", getTrafficSourceSlug());
  return withParam.toString();
}
