/* eslint-disable prettier/prettier */
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react';
import { ArrowRight, Check } from 'phosphor-react';

import { Container, Form, Header } from '../styles';
import { AuthError, ConnectBox, ConnectItem } from './styles';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Register() {
  // async function handleRegister() {}
  const session = useSession();
  const router = useRouter();

  const hasAuthError = !!router.query.error;

  console.log(session.status, 'aqui');

  const isSignedIn = session.status === 'authenticated';

  async function handleConnectCalendar() {
    await signIn('google');
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call</Heading>
        <Text>
          Conecte o seu calendário paa verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          {isSignedIn ? (
            <Button variant="secondary" size="sm">
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {!isSignedIn && hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
