import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl;

  if (isProtectedRoute(pathname)) auth().protect();
});

// Define patterns to match protected routes
const protectedRoutes = [
  '/forum(.*)', 
  // Add more patterns if needed
];

// Check if the route matches any of the protected patterns
const isProtectedRoute = (pathname: string) => {
  return protectedRoutes.some(pattern => {
    const regex = new RegExp(`^${pattern}$`);
    return regex.test(pathname);
  });
};

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
