import { utils } from '../utils';

export const typography = {
  h1: `
    font-weight: 700;
    font-size: ${utils.isMoible(36)};
    line-height: ${utils.isMoible(48)};
  `,
  h2: `
    font-weight: 500;
    font-size: ${utils.isMoible(24)};
    line-height: ${utils.isMoible(32)};
  `,
  h3: `
    font-weight: 500;
    font-size: ${utils.isMoible(18)};
    line-height: ${utils.isMoible(24)};
  `,
  h4: `
    font-weight: 700;
    font-size: ${utils.isMoible(16)};
    line-height: ${utils.isMoible(24)};
  `,
  h5: `
    font-weight: 500;
    font-size: ${utils.isMoible(16)};
    line-height: ${utils.isMoible(24)};
  `,
  h6: `
    font-weight: 700;
    font-size: ${utils.isMoible(14)};
    line-height: ${utils.isMoible(20)};
  `,
  h7: `
    font-weight: 500;
    font-size: ${utils.isMoible(14)};
    line-height: ${utils.isMoible(20)};
  `,
  h8: `
    font-weight: 700;
    font-size: ${utils.isMoible(12)};
    line-height: ${utils.isMoible(20)};
  `,
  h9: `
    font-weight: 500;
    font-size: ${utils.isMoible(12)};
    line-height: ${utils.isMoible(20)};
  `,
  titleLarge: `
    font-weight: 700;
    font-size: ${utils.isMoible(28)};
    line-height: ${utils.isMoible(36)};
  `,
  titleNormal: `
    font-weight: 700;
    font-size: ${utils.isMoible(24)};
    line-height: ${utils.isMoible(32)};
  `,
  titleSmall: `
    font-weight: 700;
    font-size: ${utils.isMoible(20)};
    line-height: ${utils.isMoible(28)};
  `,
  bodyLarge: `
    font-weight: 500;
    font-size: ${utils.isMoible(20)};
    line-height: ${utils.isMoible(24)};
  `,
  bodyNormal: `
    font-weight: 400;
    font-size: ${utils.isMoible(16)};
    line-height: ${utils.isMoible(24)};
  `,
  bodySmall: `
    font-weight: 400;
    font-size: ${utils.isMoible(14)};
    line-height: ${utils.isMoible(24)};
  `,
  bodyXSmall: `
    font-weight: 400;
    font-size: ${utils.isMoible(12)};
    line-height: ${utils.isMoible(20)};
  `,
  bodyTiny: `
    font-weight: 400;
    font-size: ${utils.isMoible(10)};
    line-height: ${utils.isMoible(16)};
  `,
  other1: `
    font-weight: 800;
    font-size: ${utils.isMoible(10)};
    line-height: ${utils.isMoible(20)};
  `,
  other2: `
    font-weight: 500;
    font-size: ${utils.isMoible(10)};
    line-height: ${utils.isMoible(20)};
  `,
};
