export {};

declare global {
  interface ClerkAuthorization {
    permission:
      | "org:notification:manage"
      | "org:notification:read"
      | "org:sys_domains:manage"
      | "org:sys_domains:read"
      | "org:sys_memberships:manage"
      | "org:sys_memberships:read"
      | "org:sys_profile:delete"
      | "org:sys_profile:manage";
    role: "org:admin" | "org:local";
  }
}
