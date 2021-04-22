import { dirname } from 'path';

import { log } from '../log';

/**
 *
 * [[include:meta/properties.md]]
 *
 * [[include:meta.md]]
 *
 * [[include:meta/usage.md]]
 *
 * [[include:meta/demo.md]]
 *
 */
export class Meta {
  public static componentPath(component: any): string {
    const file: string = component.options.__file
      ? dirname(component.options.__file)
      : '';

    const name: string = this.componentName(component);

    const value: string = (file || name).replace('src/', '');

    log.log(`componentPath: ${value}`);

    return value;
  }

  public static componentName(component: any): string {
    const value: string = component.options.name;

    log.log(`componentPath: ${value}`);

    return value;
  }
}
