const separator = '_$_';
export const emptyEncodedChannel = encodeChannel({} as any);
export function encodeChannel({ medium, source, campaign, content }): string {
  const parts = [
    medium ?? '',
    source ?? '',
    campaign ?? '',
    content ?? '',
    '',
    '',
    '',
  ]; // 3 extra places just in case...
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
  };
}
