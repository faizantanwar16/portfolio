// Explicit icon registry — keeps the bundle small instead of importing the
// entire react-icons/si set. Add a new import here any time you add a skill
// in src/data.js whose icon name isn't already listed below.
import {
  SiReact, SiTypescript, SiJavascript, SiRedux, SiReactquery, SiChartdotjs,
  SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiSwagger,
  SiSocketdotio, SiJsonwebtokens, SiPython, SiFlask, SiScikitlearn,
  SiAnthropic, SiOpenaigym, SiDocker, SiGithub, SiPostman, SiVercel, SiOpenjdk,
} from 'react-icons/si';

export const ICONS = {
  SiReact, SiTypescript, SiJavascript, SiRedux, SiReactquery, SiChartdotjs,
  SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiSwagger,
  SiSocketdotio, SiJsonwebtokens, SiPython, SiFlask, SiScikitlearn,
  SiAnthropic, SiOpenaigym, SiDocker, SiGithub, SiPostman, SiVercel, SiOpenjdk,
  // alias so seed data can keep using the friendlier "SiOpenai" key
  SiOpenai: SiOpenaigym,
};
