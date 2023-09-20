const api = {
  protocol: process.env.REACT_APP_API_PROTOCOL || "http",
  host: process.env.REACT_APP_API_HOST || "localhost",
  port: process.env.REACT_APP_API_PORT || "",
  prefix: process.env.REACT_APP_API_PREFIX || "",
};

export default {
  api: `${api.protocol}://${api.host}${api.port ? `:${api.port}` : ""}${api.prefix}`,
};

