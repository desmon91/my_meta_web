const withTM = require("next-transpile-modules")(
  [
    "three",
    "three-stdlib",
    "three-mesh-bvh",
    "postprocessing",
    "@react-three/fiber",
    "@react-three/postprocessing",
    "@react-three/drei",
  ],
  { debug: true }
);
module.exports = withTM();
