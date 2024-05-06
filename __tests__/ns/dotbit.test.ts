import { GET } from "@/app/api/ns/dotbit/[handle]/route";
import { generateRequestBody } from "@/utils/test-utils";

describe("Test For Dotbit NS API", () => {
  it("It should response 200 for jeffx.bit", async () => {
    const res = await GET(generateRequestBody("jeffx.bit"));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.platform).toBe("dotbit");
    expect(json.address).toBe("0x1d643fac9a463c9d544506006a6348c234da485f");
  });

  it("It should response 404 for suji.bit", async () => {
    const res = await GET(generateRequestBody("suji.bit"));
    expect(res.status).toBe(404);
  });
  it("It should response 200 for kingsgam.bit", async () => {
    const res = await GET(generateRequestBody("kingsgam.bit"));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.avatar).toBeTruthy();
  });
});
