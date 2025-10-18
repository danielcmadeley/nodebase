import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

const CredentialIDPage = async ({ params }: PageProps) => {
  await requireAuth();

  const { credentialId } = await params;

  return <div>Credential ID: {credentialId}</div>;
};

export default CredentialIDPage;
