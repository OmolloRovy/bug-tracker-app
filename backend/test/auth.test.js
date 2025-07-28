 import request from "supertest";
import app from "../index.js"; // Adjust path based on where your Express app is exported

describe("Auth Routes", () => {
  const testUser = {
    firstName: "omollo",
    lastName: 'masime',
    username: "testuser",
    email: "testuser@example.com",
    password: "TestPassword123"
  };

  // Optional: clean up before/after if DB is connected

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toMatch(/registered/i);
  });

  it("should not register the same user again", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);

    expect(res.statusCode).toBe(400); // or whatever error code your backend returns
    expect(res.body).toHaveProperty("error");
  });

  it("should login with correct credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: testUser.password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token"); 
  });

  it("should fail login with incorrect password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: "WrongPassword"
      });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error");
  });
});
