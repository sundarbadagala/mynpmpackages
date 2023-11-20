const defaultconfig = {
  mode: "cors",
  cache: "no-cache",
};
const defaultheaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function ApiHandler(
  {
    config = defaultconfig,
    headers = defaultheaders,
    customheaders = () => {},
    baseUrl,
  } = {
    config: defaultconfig,
    headers: defaultheaders,
    customheaders: () => {},
  }
) {
  function optionshandler(api, method, reqBody) {
    const options = {
      method,
      ...config,
      headers: {
        ...headers,
        ...customheaders(api, reqBody, method),
      },
    };
    return method === "GET"
      ? options
      : { ...options, body: JSON.stringify(reqBody) };
  }
  async function requesthandler(api, method, reqBody) {
    const options = optionshandler(api, method, reqBody);
    return await fetch(api, options);
  }
  async function errorhandler(res) {
    try {
      const data = await res.json();
      return {
        status: res.status,
        statusText: res.statusText,
        data: data,
      };
    } catch (error) {
      return {
        status: res.status,
        statusText: res.statusText,
      };
    }
  }

  return {
    async get(endpoint, params = {}, host) {
      try {
        const base = host || baseUrl || "";
        const api = `${base}${endpoint}?${new URLSearchParams(params)}`;
        const res = await requesthandler(api, "GET", {});
        return await errorhandler(res);
      } catch (error) {
        console.error("Get Error", error);
      }
    },
    async post(endpoint, reqBody, host) {
      try {
        const base = host || baseUrl || "";
        const api = `${base}${endpoint}`;
        const res = await requesthandler(api, "POST", reqBody);
        return await errorhandler(res);
      } catch (error) {
        console.error("Post Error", error.message);
      }
    },
    async put(endpoint, reqBody, host) {
      try {
        const base = host || baseUrl || "";
        const api = `${base}${endpoint}`;
        const res = await requesthandler(api, "PUT", reqBody);
        return await errorhandler(res);
      } catch (error) {
        console.error("Put Error", error);
      }
    },
    async patch(endpoint, reqBody, host) {
      try {
        const base = host || baseUrl || "";
        const api = `${base}${endpoint}`;
        const res = await requesthandler(api, "PATCH", reqBody);
        return await errorhandler(res);
      } catch (error) {
        console.log("Patch Error", error.message);
      }
    },
    async delete(endpoint, params = {}, host) {
      try {
        const base = host || baseUrl || "";
        const api = `${base}${endpoint}?${new URLSearchParams(params)}`;
        const res = await requesthandler(api, "DELETE", {});
        return await errorhandler(res);
      } catch (error) {
        console.error("Delete Error", error);
      }
    },
  };
}

export default ApiHandler;
