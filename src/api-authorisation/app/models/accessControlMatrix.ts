interface AccessRule {
  id?: string;
  role: number;
  method: string;
  path: string;
  allowed: boolean;
}

const accessControlMatrix: AccessRule[] = [
  { role: 1, path: "/users", method: "GET", allowed: true },
  { role: 1, path: "/users", method: "POST", allowed: true },
  { role: 1, path: "/users", method: "PUT", allowed: true },
  { role: 1, path: "/users", method: "DELETE", allowed: true },
  { role: 1, path: "/travel", method: "GET", allowed: true },
  { role: 1, path: "/travel", method: "POST", allowed: true },
  { role: 1, path: "/travel", method: "PUT", allowed: true },
  { role: 1, path: "/travel", method: "DELETE", allowed: true },
  { role: 1, path: "/booking", method: "GET", allowed: true },
  { role: 1, path: "/booking", method: "POST", allowed: true },
  { role: 1, path: "/booking", method: "PUT", allowed: true },
  { role: 1, path: "/booking", method: "DELETE", allowed: true },
  { role: 1, path: "/review", method: "GET", allowed: true },
  { role: 1, path: "/review", method: "POST", allowed: true },
  { role: 1, path: "/review", method: "PUT", allowed: true },
  { role: 1, path: "/review", method: "DELETE", allowed: true },

  { role: 2, path: "/users", method: "GET", allowed: true },
  { role: 2, path: "/users", method: "PUT", allowed: true },
  { role: 2, path: "/travel", method: "GET", allowed: true },
  { role: 2, path: "/travel", method: "POST", allowed: true },
  { role: 2, path: "/travel", method: "PUT", allowed: true },
  { role: 2, path: "/booking", method: "GET", allowed: true },
  { role: 2, path: "/booking", method: "POST", allowed: true },
  { role: 2, path: "/booking", method: "PUT", allowed: true },
  { role: 2, path: "/review", method: "GET", allowed: true },
  { role: 2, path: "/review", method: "POST", allowed: true },
  { role: 2, path: "/review", method: "PUT", allowed: true },
  { role: 2, path: "/review", method: "DELETE", allowed: true },

  { role: 3, path: "/users", method: "GET", allowed: true },
  { role: 3, path: "/users", method: "PUT", allowed: true },
  { role: 3, path: "/travel", method: "GET", allowed: true },
  { role: 3, path: "/travel", method: "POST", allowed: true },
  { role: 3, path: "/travel", method: "PUT", allowed: true },
  { role: 3, path: "/travel", method: "DELETE", allowed: true },
  { role: 3, path: "/booking", method: "GET", allowed: true },
  { role: 3, path: "/booking", method: "POST", allowed: true },
  { role: 3, path: "/booking", method: "PUT", allowed: true },
  { role: 3, path: "/booking", method: "DELETE", allowed: true },
  { role: 3, path: "/review", method: "GET", allowed: true },
  { role: 3, path: "/review", method: "POST", allowed: true },
  { role: 3, path: "/review", method: "PUT", allowed: true },
  { role: 3, path: "/review", method: "DELETE", allowed: true },
];

export default accessControlMatrix;
