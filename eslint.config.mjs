import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import tailwind from "eslint-plugin-tailwindcss";
import { defineConfig, globalIgnores } from 'eslint/config';
 
const eslintConfig = defineConfig([
  ...nextVitals,
  prettier,
  {
    plugins: {
      tailwindcss: tailwind,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./styles/global.css",
      },
    },
    rules: {
      ...tailwind.configs.recommended.rules,
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])
 
export default eslintConfig