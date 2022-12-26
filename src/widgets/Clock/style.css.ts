import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const clockWrapperStyle = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: rem(10),
});

export const leftStyle = style({
  fontFamily: 'Tossface',
  fontSize: rem(40),
});

export const rightStyle = style({
  paddingRight: rem(10),
  fontSize: rem(20),
});
