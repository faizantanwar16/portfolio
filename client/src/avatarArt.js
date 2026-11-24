// 24-wide pixel grids. '.' = transparent. Edit a letter to change a pixel.
export const PAL = {
  H: '#2b1b14', h: '#6b4630',            // hair, highlight
  S: '#c88d5e', s: '#a56c45',            // skin, shadow
  B: '#3b281d', M: '#8a4a3a',            // stubble, lips
  G: '#4a2c1e',                          // glasses
  F: '#f3f3ee', f: '#d4d4cc',            // shirt, shirt shade
};
const r = (l, s) => '.'.repeat(l) + s + '.'.repeat(24 - l - s.length);

export const HEAD = [
  r(8, 'hHHhHHhh'), r(6, 'hHHHHhHHHHHh'), r(5, 'HHHhHHHHHHHHhH'), r(5, 'HHHHHHHhHHHHHH'), r(5, 'HHHHhHHHHHHHhH'),
  r(5, 'HHHSSSSSSSSHHH'), r(5, 'HHSSHSSSSHSSHH'), r(5, 'hSSSSSSSSSSSSh'), r(5, 'SSHHHSSSSHHHSS'),
  r(5, 'SGGGGGSSGGGGGS'), r(5, 'SGSSSGGGGSSSGS'), r(5, 'SGSSSGSSGSSSGS'), r(5, 'SGSSSGSSGSSSGS'), r(5, 'SGGGGGSSGGGGGS'),
  r(5, 'SSSSSSssSSSSSS'), r(5, 'BSSBBBBBBBBSSB'), r(5, 'BBBBBMMMMBBBBB'), r(6, 'BBBBBBBBBBBB'), r(8, 'BBBBBBBB'),
];
// ears
for (const row of [10, 11]) {
  const a = HEAD[row].split('');
  a[4] = 'S'; a[19] = 'S';
  HEAD[row] = a.join('');
}

const torso = [
  r(6, 'FFFssssssFFF'), r(4, 'FFFFFSSSSSSFFFFF'), r(3, 'FFFFFFFSSSSFFFFFFF'), r(3, 'FFFFFFFFSSFFFFFFFF'),
  ...Array(7).fill(r(3, 'FFFFFFFFffFFFFFFFF')),
];
// subtle woven texture on the shirt
export const BODY = torso.map((row, y) => row.split('').map((ch, x) => (ch === 'F' && y > 2 && (y * 2 + x) % 5 === 0 ? 'f' : ch)).join(''));
export const BODY_Y = 19;

export const ARM_Y = 21;
export const ARM_L = [...Array(6).fill('FFF'), 'fff', 'SSS', 'SSS'].map((s) => r(0, s));
export const ARM_R = [...Array(6).fill('FFF'), 'fff', 'SSS', 'SSS'].map((s) => r(21, s));
