const separator = '_$_';
const emptyEncodedChannel = encodeChannel({} as any);
export function encodeChannel({
  medium,
  source,
  campaign,
  content,
  referer,
}): string {
  const parts = [
    medium ?? '',
    source ?? '',
    campaign ?? '',
    content ?? '',
    referer ?? '',
    '',
    '',
  ]; // 2 extra places just in case...
  return parts.join(separator);
}

export function decodeChannel(channel: string) {
  if (typeof channel !== 'string') {
    channel = emptyEncodedChannel;
  }

  const parts = channel.split(separator);
  return {
    medium: parts[0],
    source: parts[1],
    campaign: parts[2],
    content: parts[3],
    referer: parts[4],
  };
}
