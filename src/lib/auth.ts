import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {
  polar,
  checkout,
  portal,
  usage,
  webhooks,
} from "@polar-sh/better-auth";
import { polarClient } from "./polar";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "775c21ff-7409-4ce7-b200-dc34efc39b1e",
              slug: "nodebase-pro", // Custom slug for easy reference in Checkout URL, e.g. /checkout/nodebase-pro
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL,
          authenticatedUsersOnly: true,
        }),
      ],
    }),
  ],
});
