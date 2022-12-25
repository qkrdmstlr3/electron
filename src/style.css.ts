import { style } from '@vanilla-extract/css';
import { rem } from 'polished';

export const appStyle = style({
  margin: '0 auto',
  color: '#ffffff',
  borderRadius: rem(32),
  backgroundColor: '#000000',
  overflow: 'hidden',
});
