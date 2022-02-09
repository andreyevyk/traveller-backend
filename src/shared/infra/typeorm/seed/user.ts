import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("user", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, created_at)
      values('${id}', 'user1','user@traveller.com.br', '${password}', 'now()')
    `
  );
}

create().then(() => console.log("User created"));
