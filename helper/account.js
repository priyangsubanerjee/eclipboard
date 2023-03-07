import { decrypt } from "@/helper/crypto";
import { client, gql } from "./graph";

const createAccount = async (name, email, password) => {
  const query = gql`
      mutation MyMutation {
        createAccount(data: { email: "${email}", name: "${name}", password: "${password}" }) {
          id
          name
          email
        }
      }
    `;

  try {
    const { createAccount } = await client.request(query);
    if (createAccount.id) {
      return {
        success: true,
        message: "Account created successfully",
        data: createAccount,
      };
    } else {
      return {
        success: false,
        message: "Account creation failed",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};

const checkIfLoggedIn = async () => {
  const account = JSON.parse(localStorage.getItem("account"));
  if (account) {
    const dec = JSON.parse(decrypt(account));
    if (dec.id) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export { createAccount, checkIfLoggedIn };
