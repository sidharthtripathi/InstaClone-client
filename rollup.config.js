// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  // ... other Rollup configuration options ...

  plugins: [
    // ... other Rollup plugins ...
    nodeResolve(), // This plugin helps Rollup resolve node modules.
  ],

  external: ['recoil'], // Add 'recoil' to the list of external dependencies.

  // ... other Rollup options ...
};
