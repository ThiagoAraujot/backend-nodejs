import z from "zod";
import { FastifyTypedInstance } from "./types";
import { randomUUID } from "node:crypto";

interface User {
  id: string;
  name: string;
  email: string;
}

// Apenas para simular um banco de dados
const users: User[] = [];

export async function routes(app: FastifyTypedInstance) {
  app.get(
    "/users",
    {
      schema: {
        tags: ["users"],
        description: "List users",
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              email: z.string(),
            })
          ),
        },
      },
    },
    () => {
      return users;
    }
  );

  app.post(
    "/users",
    {
      schema: {
        tags: ["users"],
        description: "Create a new user",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.null().describe("User created"),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body;

      const id = randomUUID();
      users.push({
        id,
        name,
        email,
      });

      return reply.status(201).send();
    }
  );

  app.put(
    "/users/:id",
    {
      schema: {
        tags: ["users"],
        description: "Update a user",
        params: z.object({
          id: z.string(),
        }),
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          200: z.null().describe("User updated"),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const { name, email } = request.body;

      const user = users.find((u) => u.id === id);

      if (!user) {
        return reply.status(404).send();
      }

      user.name = name;
      user.email = email;

      return reply.status(200).send();
    }
  );

  app.delete(
    "/users/:id",
    {
      schema: {
        tags: ["users"],
        description: "Delete a user",
        params: z.object({
          id: z.string(),
        }),
        response: {
          204: z.null().describe("User deleted"),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;

      const user = users.find((u) => u.id === id);

      if (!user) {
        return reply.status(404).send();
      }

      users.splice(users.indexOf(user), 1);

      return reply.status(204).send();
    }
  );
}
