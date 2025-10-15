import { SignupForm } from "@/features/auth/components/signup-form";
import { requireUnAuth } from "@/lib/auth-utils";

export const Signup = async () => {
  await requireUnAuth();
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup;
