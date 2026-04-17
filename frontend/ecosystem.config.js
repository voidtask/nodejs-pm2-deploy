require("dotenv").config({ path: ".env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_REF = "origin/master",
  DEPLOY_NGINX_SERVE_DIR,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      "post-deploy": `cd frontend && npm ci && NODE_OPTIONS=--openssl-legacy-provider npm run build && rm -rf ${DEPLOY_NGINX_SERVE_DIR}/* && cp -r build/* ${DEPLOY_NGINX_SERVE_DIR}/`,
    },
  },
};
