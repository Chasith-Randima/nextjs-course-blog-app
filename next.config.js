const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "randima",
        mongodb_password: "ZzVxMxYGi42pTpQE",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-course-blog-app",
      },
    };
  }
  return {
    env: {
      reactStrictMode: true,
      mongodb_username: "randima",
      mongodb_password: "ZzVxMxYGi42pTpQE",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-course-blog-app",
    },
  };
};
