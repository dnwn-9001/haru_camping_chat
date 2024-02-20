module.exports = {
  apps: [
    {
      name: "haru_camping_chat",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        NEXT_PUBLIC_DOMAIN_URL: "http://52.79.162.135",
        PORT: 80,
      },
    },
  ],
};
