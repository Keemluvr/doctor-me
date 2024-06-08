import authMiddleware from "./middleware/auth";

export default authMiddleware;

export const config = {
  matcher: ["/"]
};
