import { client, gql } from "./graph";

const getCode = () => {
  const code = localStorage.getItem("code") || null;
  if (code) {
    return JSON.parse(code).code;
  } else {
    const code_ = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("code", code_);

    const query = gql`
      mutation MyMutation {
        createClipboard(data: { code: "${code_}" }) {
          code
          id
        }
      }
    `;
    client
      .request(query)
      .then((data) => {
        localStorage.setItem(
          "code",
          JSON.stringify({
            code: data.createClipboard.code,
            id: data.createClipboard.id,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    return code_;
  }
};

const refreshCode = () => {
  const code = localStorage.getItem("code") || null;
  const code_ = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("code", code_);

  const query = gql`
    mutation MyMutation {
      updateClipboard(data: { code: "${code_}" }, where: { id: "${
    JSON.parse(code).id
  }" }) {
        code
        id
      }
    }
  `;
  client
    .request(query)
    .then((data) => {
      localStorage.setItem(
        "code",
        JSON.stringify({
          code: data.updateClipboard.code,
          id: data.updateClipboard.id,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
  return code_;
};

export { getCode, refreshCode };
