import { SetMetadata } from '@nestjs/common';
import { Permission } from '../enum/permissions.enum';

export const PERMISSION_KEYS = 'permission';
export const Permissions = (...permission: Permission[]) =>
  SetMetadata(PERMISSION_KEYS, permission);
