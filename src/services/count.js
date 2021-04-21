import { call } from "services/base";

const CORE_API_ENDPOINT = process.env.NEXT_PUBLIC_CORE_API_ENDPOINT;

function countAll() {
  return call({
    url: `${CORE_API_ENDPOINT}/count`,
    method: "GET",
  });
}

export default Object.freeze({ countAll });
