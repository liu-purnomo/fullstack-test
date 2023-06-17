const request = require("supertest");
const app = require("../app");
const { Product } = require("../models");
const {
  destroyTableProduct,
  destroyTableProductOrder,
  destroyTableCustomer,
  destroyTableOrder,
} = require("../libs/destroy");
const { createProduct } = require("../libs/create");

afterAll(async () => {
  await destroyTableProduct();
  await destroyTableOrder();
  await destroyTableProductOrder();
  await destroyTableCustomer();
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

//test update product by id
describe("PUT /api/products/:id", () => {
  it("should return response with status code 200", async () => {
    await createProduct();
    const res = await request(app)
      .put("/api/products/1")
      .send({
        name: "Judul yang baru",
      })
      .expect(200);

    expect(res.body).toEqual({
      message: "Product updated successfully",
    });
  });

  //test update product by id not found
  it("should return response with status code 404", async () => {
    const res = await request(app)
      .put("/api/products/5")
      .send({
        name: "Judul yang baru",
      })
      .expect(404);

    expect(res.body.message).toBe("Data not found");
  });
});

//test create order
describe("POST /api/orders", () => {
  it("should return response with status code 201", async () => {
    await createProduct();
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer_name: "nama pengguna",
        product_order: [
          {
            product_id: 1,
            quantity: 5,
          },
        ],
      })
      .expect(201);
  });

  //test create order not found
  it("should return response with status code 404", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer_name: "nama pengguna",
        product_order: [
          {
            product_id: 10,
            quantity: 5,
          },
        ],
      })
      .expect(404);

    expect(res.body.message).toBe("Data not found");
  });

  //test create order customer name is required
  it("should return response with status code 400", async () => {
    await createProduct();
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer_name: "",
        product_order: [
          {
            product_id: 1,
            quantity: 5,
          },
        ],
      })
      .expect(400);

    expect(res.body.message).toBe("Customer name is required");
  });

  //test create order quantity is required
  it("should return response with status code 400", async () => {
    await createProduct();
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer_name: "nama pengguna",
        product_order: [
          {
            product_id: 1,
          },
        ],
      })
      .expect(400);

    expect(res.body.message).toBe("Quantity is required");
  });
  //test create order quantity is required
  it("should return response with status code 400", async () => {
    await createProduct();
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer_name: "nama pengguna",
        product_order: [
          {
            quantity: 5,
          },
        ],
      })
      .expect(400);

    expect(res.body.message).toBe("Product id is required");
  });
});
