const baseUrl = "http://localhost:3000";

const get = (url: string): Promise<Response> =>
  fetch(`${baseUrl}/${url}`, {
    method: "get",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

const post = (url: string, data: any): Promise<Response> => {
  console.log(data);
  return fetch(`${baseUrl}/${url}`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export { get, post };
