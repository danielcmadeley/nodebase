import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { TempLogout } from "@/components/temp-logout";

export default async function Home() {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div>
      Protected Page
      {JSON.stringify(data)}
      <TempLogout />
    </div>
  );
}
