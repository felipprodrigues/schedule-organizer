import { Box, styled } from '@ignite-ui/react';

export const Container = styled(Box, {
  padding: 0,
  margin: '$6 auto 0',
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',

  gridTemplateColumns: '1fr',
  width: 540,
});
