import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from './index';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  right?: boolean;
  flip?: boolean;
  modifiers?: Popper.Modifiers;
  cssModule?: CSSModule;
  persist?: boolean;
  positionFixed?: boolean;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
}

declare class DropdownMenu extends React.Component<DropdownMenuProps> {}
export default DropdownMenu;
