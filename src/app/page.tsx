"use client";

import { TempLogout } from "@/components/temp-logout";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(
    trpc.createWorkflows.mutationOptions({
      onSuccess: () => {
        toast.success("Workflow created");
      },
    }),
  );

  return (
    <div>
      {JSON.stringify(data)}
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <TempLogout />
    </div>
  );
}
