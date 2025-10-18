import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import {
  createTRPCRouter,
  protectedProcedure,
  premiumProcedure,
} from "../init";

export const appRouter = createTRPCRouter({
  testAI: premiumProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "AI executed" };
  }),

  getWorkflows: protectedProcedure.query(async ({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflows: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "testUser@example.com",
      },
    });
    return { suceess: true, message: "Workflow created" };
  }),
});

export type AppRouter = ReturnType<typeof createTRPCRouter>;
