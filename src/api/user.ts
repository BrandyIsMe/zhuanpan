import request from "@/utils/request";

export function getCode(data: any) {
  return request({
    url: "/login/code",
    method: "post",
    data,
  });
}

export function login(data: any) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function getPolicy(data: any) {
  return request({
    url: "/policy_protocol/list",
    method: "get",
    params: data,
  });
}
