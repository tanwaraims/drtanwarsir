module.exports = {
  apps: [
    {
      name: "drtanwarsir",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
