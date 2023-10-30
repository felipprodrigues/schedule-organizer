/* eslint-disable prettier/prettier */
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

import { Container, Form, Header } from '../styles';
import { ConnectBox, ConnectItem } from './styles';
import { signIn, useSession } from 'next-auth/react';

export default function Register() {
  // async function handleRegister() {}
  const { data: session } = useSession();

  console.log(session, 'aqui o data');

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

          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
