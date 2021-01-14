import React, {memo} from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';
import { Person } from '../../types';

export type Props = Pick<Person, 'name' | 'teamName' | 'imageUrl'>;

export const PeopleListItem = memo(function PeopleListItem({
  name,
  teamName,
  imageUrl
}: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingY={4}
    >
      <Avatar src={imageUrl} size="sm" name={name} />
      <Box marginLeft={2}>
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{teamName}</Text>
      </Box>
    </Box>
  );
});
