import ServerUtils from "../src/utils/ServerUtils"

test("findServerById", () => {
    expect(ServerUtils.findServerById("NEZAKAN")).toEqual({id: 22, name: "네자칸", type: "NEZAKAN"})
});
test("findServerByName", () => {
    expect(ServerUtils.findServerByName("네자칸")).toEqual({id: 22, name: "네자칸", type: "NEZAKAN"})
})