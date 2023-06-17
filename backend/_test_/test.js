const request = require("supertest");
const app = require("../app");
const { Product } = require("../models");

describe("POST /api/products", () => {
  it("should return response with status code 201", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "Kopi Kapal Api",
        description: "Kopi Kapal Api Nikmat",
        price: 10000,
        image_url: "https://www.google.com",
      })
      .expect(201);

    expect(res.body.message).toBe("Product created successfully");
  });

  it("should return response with status code 400", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "",
        description: "Kopi Kapal Api Nikmat",
        price: 10000,
        image_url: "https://www.google.com",
      })
      .expect(400);

    expect(res.body.message).toBe("Product name is required");
  });

  it("should return response with status code 400", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "Plastic Chair",
        description: "",
        price: 100000,
        image_url: "https://www.google.com",
      })
      .expect(400);

    expect(res.body.message).toBe("Product description is required");
  });

  it("should return response with status code 400", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "Plastic Chair",
        description: "Kursi Plastik",
        price: null,
        image_url: "https://www.google.com",
      })
      .expect(400);

    expect(res.body.message).toBe("Product price is required");
  });

  it("should return response with status code 400", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "Plastic Chair",
        description: "Kursi Plastik",
        price: 100000,
        image_url: "",
      })
      .expect(400);

    expect(res.body.message).toBe("Product image url is required");
  });
});
