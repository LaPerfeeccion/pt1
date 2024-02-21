import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4} className='avatar'>
      <Avatar alt="Remy Sharp" src="src/imagenes/uno.png" />
      <Avatar alt="Travis Howard" src="src/imagenes/YeriMUA.png" />
      <Avatar alt="Cindy Baker" src="src/imagenes/nissaxter.png" />
      <Avatar alt="Agnes Walker" src="src/imagenes/cry.png" />
      <Avatar alt="Trevor Henderson" src="src/imagenes/YeriMUA.png" />
    </AvatarGroup>
  );
}