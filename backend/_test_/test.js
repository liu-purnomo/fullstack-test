const request = require("supertest");
const app = require("../app");
const { Product } = require("../models");
const { destroyTabelProduct } = require("../libs/destroy");
const { createProduct } = require("../libs/create");

afterAll(async () => {
  await destroyTabelProduct();
});

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

//test get all products
describe("GET /api/products", () => {
  it("should return response with status code 200", async () => {
    await createProduct();

    const res = await request(app).get("/api/products").expect(200);

    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Kopi Kapal Api",
          description: "Kopi Kapal Api Nikmat",
          price: 10000,
          image_url: "https://www.google.com",
        }),
      ])
    );
  });
});

//test get product by id
describe("GET /api/products/:id", () => {
  it("should return response with status code 200", async () => {
    await createProduct();

    const res = await request(app).get("/api/products/1").expect(200);

    expect(res.body).toEqual(
      expect.objectContaining({
        id: 1,
        name: "Kopi Kapal Api",
        description: "Kopi Kapal Api Nikmat",
        price: 10000,
        image_url: "https://www.google.com",
      })
    );
  });

  //test get product by id not found
  it("should return response with status code 404", async () => {
    const res = await request(app).get("/api/products/5").expect(404);
    expect(res.body.message).toBe("Data not found");
  });
});
