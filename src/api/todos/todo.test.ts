import request from "supertest";

import app from "../../app";
import { Todos } from "./todo.model";

beforeAll(async () => {
  try {
    await Todos.drop();
  } catch (error) {}
});

describe("GET /api/v1/todo", () => {
  it("responds with an array of todo", async () =>
    request(app)
      .get("/api/v1/todo")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("length");
        expect(response.body.length).toBe(0);
        // expect(response.body[0]).toHaveProperty("exercise");
        // expect(response.body[0]).toHaveProperty("done");
      }));
});
