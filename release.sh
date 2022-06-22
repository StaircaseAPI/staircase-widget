yarn run tsup src/index.tsx --format esm,cjs,iife --minify --dts --target es5 --legacy-output --inject ./react-import.js

