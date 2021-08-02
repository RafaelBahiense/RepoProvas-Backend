import supertest from "supertest";

import "../../src/config/env";
import app, { init } from "../../src/app";
import seedDB, { Seed } from "../helpers/seeding";
import cleanDB from "../helpers/cleanDatabase";


let seed: Seed;
jest.setTimeout(11000)

beforeAll(async () => {
  await init();
  await cleanDB();
  seed = await seedDB();
});

afterAll(async () => {
  await cleanDB();
});

describe("GET /subjects", () => {
  const Route = "/api/subjects";
  const agent = supertest(app);

  it("returns status 200 for valid params",  async () => {
    const result = await agent.get(Route);
    expect(result.status).toEqual(200);
    expect(result.body.length).toEqual(50);
  });;
});

