import service from "@/utils/request";

export function Login(data) {
//   console.log("suc");
  service.request({
    method: "get",
    url: "/login",
    data
  });
}
