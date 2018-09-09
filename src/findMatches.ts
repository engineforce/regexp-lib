import uniq from 'lodash/uniq';

export function findMatches(regex: RegExp, text: string): RegExpExecArray[] {
  let matches: RegExpExecArray[] = [];
  let match: RegExpExecArray = undefined;
  regex = new RegExp(regex.source, uniq((regex.flags || '') + 'g').join(''));

  do {
    match = regex.exec(text);
    if (!match) {
      break;
    }

    matches.push(match);
  } while (true);

  return matches;
}
