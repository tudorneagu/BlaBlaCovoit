import request from "supertest";
import app from "../index";

describe("POST /api/users", () => {
  it("should create a new user", async () => {
    const response = await request(app).post("/api/users").send({
      lastname: "testuser1234",
      firstname: "toto",
      email: "test1234@oclock.io",
      password: "password123",
      image: "titi",
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("id");
  });
});

describe("GET /api/users", () => {
  it("should return a user", async () => {
    const response = await request(app).get("/api/users/1");
    expect(response.status).toBe(200);
  });
});

describe("GET /api/users/:id", () => {
  it("should return all the users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
  });
});
