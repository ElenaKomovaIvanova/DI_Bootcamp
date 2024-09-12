import chalk from 'chalk';

const modifiers = {
  1: 'reset',
  2: 'bold',
  3: 'dim',
  4: 'italic',
  5: 'underline',
  6: 'overline',
  7: 'inverse',
  8: 'hidden',
  9: 'strikethrough',
  10: 'visible'
};

const colors = {
  1: 'black',
  2: 'red',
  3: 'green',
  4: 'yellow',
  5: 'blue',
  6: 'magenta',
  7: 'cyan',
  8: 'white',
  9: 'blackBright',
  10: 'redBright',
  11: 'greenBright',
  12: 'yellowBright',
  13: 'blueBright',
  14: 'magentaBright',
  15: 'cyanBright',
  16: 'whiteBright'
};

const backgroundColors = {
  1: 'bgBlack',
  2: 'bgRed',
  3: 'bgGreen',
  4: 'bgYellow',
  5: 'bgBlue',
  6: 'bgMagenta',
  7: 'bgCyan',
  8: 'bgWhite',
  9: 'bgBlackBright',
  10: 'bgRedBright',
  11: 'bgGreenBright',
  12: 'bgYellowBright',
  13: 'bgBlueBright',
  14: 'bgMagentaBright',
  15: 'bgCyanBright',
  16: 'bgWhiteBright'
};

export const colorfulText = (text, bgColorKey, colorKey, modifierKey) => {
  const bgColor = backgroundColors[bgColorKey] ? chalk[backgroundColors[bgColorKey]] : chalk.bgBlack;
  const color = colors[colorKey] ? chalk[colors[colorKey]] : chalk.white;
  const modifier = modifiers[modifierKey] ? chalk[modifiers[modifierKey]] : chalk.reset;
  const output = modifier(bgColor(color(text)));
  return output;
}
