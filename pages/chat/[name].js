import { useRouter } from "next/router";
import Container from "./";

import appConfig from "../../config.json";

export default function NameChat() {
  const router = useRouter();

  const {
    query: { name },
  } = router;

  return (
    <Container primary={appConfig.theme.colors.primary[100]}>
      <div>{`Olá, seja muito bem vinde ${name}`}</div>
    </Container>
  );
}
