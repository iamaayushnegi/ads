import Config from "react-native-config";

interface PropType {
  endpoint: string;
  method: string;
  headers?: { [key: string]: string };
  body?: any;
}

export const commonApi = async ({
  endpoint,
  method,
  headers,
  body,
}: PropType) => {
  try {
    const resp = await fetch(Config.REACT_ENDPOINT + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!resp.ok) {
      throw new Error("Network response was not ok");
    }
    return resp.json();
  } catch (e) {
    console.info("Error:", e);
  }
};
