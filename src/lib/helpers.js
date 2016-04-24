import chat from './chat';
import {requestedRecently} from './store';

export async function leaveOldChannels() {
  const noHashChannels = chat.channels.map((c) => c.substring(1));
  const recent = await requestedRecently();
  const oldChannels = missingFromFirst(recent, noHashChannels);
  oldChannels.forEach((channel) => chat.part(channel));
}

export function daysToMs(days) {
  return minutesToMs(days * 24 * 60);
}

export function minutesToMs(minutes) {
  return minutes * 60 * 1000;
}

export function missingFromFirst(firstArr, secondArr) {
  return secondArr.filter((element) => !firstArr.includes(element));
}