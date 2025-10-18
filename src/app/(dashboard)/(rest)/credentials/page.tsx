import { requireAuth } from "@/lib/auth-utils";

const CredentialsPage = async () => {

  await requireAuth()


  return <div>Crednetials</div>

}


export default CredentialsPage

