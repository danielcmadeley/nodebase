import { requireAuth } from "@/lib/auth-utils";

const ExcecutionsPage = async () => {
  await requireAuth();

  return <div>Executions</div>;
};

export default ExcecutionsPage;
