import { call } from "services/base";

const CORE_API_ENDPOINT = process.env.NEXT_PUBLIC_CORE_API_ENDPOINT;

function update() {
  return call({
    url: `${CORE_API_ENDPOINT}/proxy/update`,
    method: "POST",
    body: {},
  });
}

export default Object.freeze({ update });
