<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [storybook-addon-meta](#storybook-addon-meta)
  - [Installation](#installation)
  - [Demo](#demo)
  - [Documentation](#documentation)
  - [Screenshot](#screenshot)
- [Classes](#classes)
  - [Class: Cosmos](#class-cosmos)
    - [Properties](#properties)
    - [Installation](#installation-1)
    - [Usage](#usage)
    - [Demo](#demo-1)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
    - [Properties](#properties-1)
    - [Accessors](#accessors)
    - [Methods](#methods)
  - [Class: Ledger](#class-ledger)
    - [Installation](#installation-2)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents-1)
    - [Constructors](#constructors-1)
    - [Properties](#properties-2)
    - [Accessors](#accessors-1)
    - [Methods](#methods-1)
- [Enums](#enums)
  - [Enumeration: EVENTS](#enumeration-events)
    - [Table of contents](#table-of-contents-2)
    - [Enumeration members](#enumeration-members)
- [storybook-addon-meta](#storybook-addon-meta-1)
  - [Table of contents](#table-of-contents-3)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: index](#module-index)
    - [Table of contents](#table-of-contents-4)
    - [References](#references)
  - [Module: lib/cosmos](#module-libcosmos)
    - [Table of contents](#table-of-contents-5)
  - [Module: lib/cosmos/constants](#module-libcosmosconstants)
    - [Table of contents](#table-of-contents-6)
    - [Variables](#variables)
  - [Module: lib/cosmos/cosmos1](#module-libcosmoscosmos1)
    - [Table of contents](#table-of-contents-7)
    - [Functions](#functions)
  - [Module: lib/cosmos/cosmos2](#module-libcosmoscosmos2)
    - [Table of contents](#table-of-contents-8)
    - [Functions](#functions-1)
  - [Module: lib/cosmos/types](#module-libcosmostypes)
    - [Table of contents](#table-of-contents-9)
    - [Type aliases](#type-aliases)
  - [Module: lib/cosmos/utils](#module-libcosmosutils)
    - [Table of contents](#table-of-contents-10)
    - [Functions](#functions-2)
  - [Module: lib/Ledger](#module-libledger)
    - [Table of contents](#table-of-contents-11)
    - [Type aliases](#type-aliases-1)
    - [Variables](#variables-1)
  - [Module: log](#module-log)
    - [Table of contents](#table-of-contents-12)
    - [Variables](#variables-2)
  - [Module: types/declaration](#module-typesdeclaration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

storybook-addon-meta / [Exports](#modulesmd)

## storybook-addon-meta

#### TypeScript/JavaScript client library to communicate with a Tendermint/Cosmos App running in a Ledger Nano S/X

## Installation

Install with [npm](https://www.npmjs.com):

```sh
$ npm install --save storybook-addon-meta
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add storybook-addon-meta
```

## [Demo](https://storybook-addon-meta.netlify.app/)

#### [Try online demo](https://storybook-addon-meta.netlify.app/)

## [Documentation](https://www.npmjs.com/package/storybook-addon-meta)

#### [Try online documentation](https://www.npmjs.com/package/storybook-addon-meta)

## Screenshot

![Example](./documentation/media/screenshot.png)

# Classes


<a name="classeslib_cosmoscosmosmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / [lib/cosmos](#moduleslib_cosmosmd) / Cosmos

## Class: Cosmos

[lib/cosmos](#moduleslib_cosmosmd).Cosmos

### Properties

```js
    readonly scrambleKey: string;
    private _transport;
    private _version;
    private _applicationInformation;
    private _deviceInformation;
    constructor(transport: Transport, scrambleKey?: string);
    get transport(): Transport;
    set transport(transport: Transport);
    serializeHRP(hrp: string): Buffer;
    getBech32FromPK(hrp: string, pk: Buffer): string;
    serializePath(path: readonly number[] | string): Promise<Buffer>;
    getVersion(): Promise<Version>;
    getApplicationInformation(): Promise<ApplicationInformation>;
    getDeviceInformation(): Promise<DeviceInformation>;
    getPublicKey(path: number[] | string): Promise<PK>;
    getAddressAndPublicKey(path: number[] | string, hrp: string, p1?: number, p2?: number): Promise<APK>;
    showAddressAndPubKey(path: number[] | string, hrp: string, p1?: number, p2?: number): Promise<APK>;
    sign(path: number[] | string, data: any, size?: number): Promise<Signature>;
    private send;
    private version;
    private signGetChunks;
    private signSendChunk;
```

### Installation

Install with [npm](https://www.npmjs.com):

```sh
$ npm install --save storybook-addon-meta
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add storybook-addon-meta
```

### Usage

#### es module
```js
import { Cosmos } from 'storybook-addon-meta'
```

#### commonjs
```js
var Cosmos = require('storybook-addon-meta').Cosmos;
```

### [Demo](https://storybook-addon-meta.netlify.app/)

#### [Try online demo](https://storybook-addon-meta.netlify.app/)

#### es module
```js
import { Cosmos } from 'storybook-addon-meta'

const path = [44, 118, 0, 0, 0];

const hrp = 'wallet';

const sign = {
    a: 1,
    account_number: 123,
    b: '2',
    c: true,
    chain_id: 123,
    fee: 123,
    memo: '',
    msgs: 'Message',
    number: 123,
    sequence: 123,
};

const transport = null; // NOTE here you must use one of @ledgerhq/hw-transport-* - https://github.com/LedgerHQ/ledgerjs

const cosmos = new Cosmos(transport);

const version = await cosmos.getVersion();
// => Version

const deviceInformation = await cosmos.getDeviceInformation();
// => DeviceInformation

const applicationInformation = await cosmos.getApplicationInformation();
// => ApplicationInformation

const pk = await cosmos.getPublicKey(path);
// => PK

const gapk = await cosmos.getAddressAndPublicKey(path, hrp);
// => APK

const sapk = await cosmos.showAddressAndPubKey(path, hrp);
// => APK

const sign = await cosmos.sign(path, JSON.stringify(sign));
// => Signature

```

#### commonjs
```js
var Cosmos = require('storybook-addon-meta').Cosmos;

var path = [44, 118, 0, 0, 0];

var hrp = 'wallet';

var sign = {
    a: 1,
    account_number: 123,
    b: '2',
    c: true,
    chain_id: 123,
    fee: 123,
    memo: '',
    msgs: 'Message',
    number: 123,
    sequence: 123,
}

var transport = null; // NOTE here you must use one of @ledgerhq/hw-transport-* - https://github.com/LedgerHQ/ledgerjs

var cosmos = new Cosmos(transport);

cosmos.getVersion().then(function(version) { console.log(version); }).catch(function(error) { console.error(error); })

cosmos.getDeviceInformation().then(function(deviceInformation) { console.log(deviceInformation); }).catch(function(error) { console.error(error); })

cosmos.getApplicationInformation().then(function(applicationInformation) { console.log(applicationInformation); }).catch(function(error) { console.error(error); })

cosmos.getPublicKey(path).then(function(pk) { console.log(pk); }).catch(function(error) { console.error(error); })

cosmos.getAddressAndPublicKey(path, hrp).then(function(gapk) { console.log(gapk); }).catch(function(error) { console.error(error); })

cosmos.showAddressAndPubKey(path, hrp).then(function(sapk) { console.log(sapk); }).catch(function(error) { console.error(error); })

cosmos.sign(path, sign).then(function(signed) { console.log(signed); }).catch(function(error) { console.error(error); })
```

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [scrambleKey](#scramblekey)

#### Accessors

- [transport](#transport)

#### Methods

- [debug](#debug)
- [getAddressAndPublicKey](#getaddressandpublickey)
- [getApplicationInformation](#getapplicationinformation)
- [getBech32FromPK](#getbech32frompk)
- [getDeviceInformation](#getdeviceinformation)
- [getPublicKey](#getpublickey)
- [getVersion](#getversion)
- [serializeHRP](#serializehrp)
- [serializePath](#serializepath)
- [showAddressAndPubKey](#showaddressandpubkey)
- [sign](#sign)

### Constructors

#### constructor

\+ **new Cosmos**(`transport`: *Transport*<string\>, `scrambleKey?`: *string*): [*Cosmos*](#classeslib_cosmoscosmosmd)

##### Parameters:

Name | Type |
:------ | :------ |
`transport` | *Transport*<string\> |
`scrambleKey` | *string* |

**Returns:** [*Cosmos*](#classeslib_cosmoscosmosmd)

Defined in: [src/lib/cosmos/index.ts:58](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L58)

### Properties

#### scrambleKey

• `Readonly` **scrambleKey**: *string*

### Accessors

#### transport

• get **transport**(): *Transport*<string\>

**Returns:** *Transport*<string\>

Defined in: [src/lib/cosmos/index.ts:93](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L93)

• set **transport**(`transport`: *Transport*<string\>): *void*

##### Parameters:

Name | Type |
:------ | :------ |
`transport` | *Transport*<string\> |

**Returns:** *void*

Defined in: [src/lib/cosmos/index.ts:97](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L97)

### Methods

#### debug

▸ **debug**(`debug`: *boolean*): *void*

##### Parameters:

Name | Type |
:------ | :------ |
`debug` | *boolean* |

**Returns:** *void*

Defined in: [src/lib/cosmos/index.ts:81](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L81)

___

#### getAddressAndPublicKey

▸ **getAddressAndPublicKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<[*APK*](#apk)\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`path` | *string* \| *number*[] | - |
`hrp` | *string* | - |
`p1` | *number* | - |
`p2` | *number* | 0 |

**Returns:** *Promise*<[*APK*](#apk)\>

Defined in: [src/lib/cosmos/index.ts:366](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L366)

___

#### getApplicationInformation

▸ **getApplicationInformation**(): *Promise*<[*ApplicationInformation*](#applicationinformation)\>

**Returns:** *Promise*<[*ApplicationInformation*](#applicationinformation)\>

Defined in: [src/lib/cosmos/index.ts:189](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L189)

___

#### getBech32FromPK

▸ **getBech32FromPK**(`hrp`: *string*, `pk`: *Buffer*): *string*

##### Parameters:

Name | Type |
:------ | :------ |
`hrp` | *string* |
`pk` | *Buffer* |

**Returns:** *string*

Defined in: [src/lib/cosmos/index.ts:142](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L142)

___

#### getDeviceInformation

▸ **getDeviceInformation**(): *Promise*<[*DeviceInformation*](#deviceinformation)\>

**Returns:** *Promise*<[*DeviceInformation*](#deviceinformation)\>

Defined in: [src/lib/cosmos/index.ts:256](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L256)

___

#### getPublicKey

▸ **getPublicKey**(`path`: *string* \| *number*[]): *Promise*<[*PK*](#pk)\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| *number*[] |

**Returns:** *Promise*<[*PK*](#pk)\>

Defined in: [src/lib/cosmos/index.ts:338](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L338)

___

#### getVersion

▸ **getVersion**(`force?`: *boolean*): *Promise*<[*Version*](#version)\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`force` | *boolean* | true |

**Returns:** *Promise*<[*Version*](#version)\>

Defined in: [src/lib/cosmos/index.ts:173](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L173)

___

#### serializeHRP

▸ **serializeHRP**(`hrp`: *string*): *Buffer*

##### Parameters:

Name | Type |
:------ | :------ |
`hrp` | *string* |

**Returns:** *Buffer*

Defined in: [src/lib/cosmos/index.ts:127](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L127)

___

#### serializePath

▸ **serializePath**(`path`: *string* \| readonly *number*[]): *Promise*<Buffer\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| readonly *number*[] |

**Returns:** *Promise*<Buffer\>

Defined in: [src/lib/cosmos/index.ts:156](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L156)

___

#### showAddressAndPubKey

▸ **showAddressAndPubKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<[*APK*](#apk)\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`path` | *string* \| *number*[] | - |
`hrp` | *string* | - |
`p1` | *number* | - |
`p2` | *number* | 0 |

**Returns:** *Promise*<[*APK*](#apk)\>

Defined in: [src/lib/cosmos/index.ts:404](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L404)

___

#### sign

▸ **sign**(`path`: *string* \| *number*[], `data`: *any*, `size?`: *number*): *Promise*<[*Signature*](#signature)\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| *number*[] |
`data` | *any* |
`size` | *number* |

**Returns:** *Promise*<[*Signature*](#signature)\>

Defined in: [src/lib/cosmos/index.ts:413](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/index.ts#L413)


<a name="classeslib_ledgerledgermd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / [lib/Ledger](#moduleslib_ledgermd) / Ledger

## Class: Ledger

[lib/Ledger](#moduleslib_ledgermd).Ledger

### Installation

Install with [npm](https://www.npmjs.com):

```sh
$ npm install --save storybook-addon-meta
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add storybook-addon-meta
```

### Hierarchy

* *EventEmitter*

  ↳ **Ledger**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [EVENTS](#events)
- [error](#error)
- [isConnecting](#isconnecting)
- [isDisconnecting](#isdisconnecting)
- [EVENTS](#events)
- [captureRejectionSymbol](#capturerejectionsymbol)
- [captureRejections](#capturerejections)
- [defaultMaxListeners](#defaultmaxlisteners)
- [errorMonitor](#errormonitor)

#### Accessors

- [cosmos](#cosmos)
- [device](#device)
- [model](#model)
- [transport](#transport)
- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [connect](#connect)
- [debug](#debug)
- [disconnect](#disconnect)
- [emit](#emit)
- [eventNames](#eventnames)
- [getAddressAndPublicKey](#getaddressandpublickey)
- [getApplicationInformation](#getapplicationinformation)
- [getBech32FromPK](#getbech32frompk)
- [getDeviceInformation](#getdeviceinformation)
- [getMaxListeners](#getmaxlisteners)
- [getPublicKey](#getpublickey)
- [getVersion](#getversion)
- [listenerCount](#listenercount)
- [listeners](#listeners)
- [off](#off)
- [on](#on)
- [once](#once)
- [prependListener](#prependlistener)
- [prependOnceListener](#prependoncelistener)
- [rawListeners](#rawlisteners)
- [reconnect](#reconnect)
- [removeAllListeners](#removealllisteners)
- [removeListener](#removelistener)
- [serializeHRP](#serializehrp)
- [serializePath](#serializepath)
- [setMaxListeners](#setmaxlisteners)
- [showAddressAndPubKey](#showaddressandpubkey)
- [sign](#sign)
- [transporter](#transporter)
- [u2f](#u2f)
- [webHID](#webhid)
- [webUSB](#webusb)
- [listenerCount](#listenercount)
- [on](#on)
- [once](#once)

### Constructors

#### constructor

\+ **new Ledger**(`options?`: [*LedgerOptions*](#ledgeroptions)): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`options` | [*LedgerOptions*](#ledgeroptions) | {} |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Overrides: events.EventEmitter.constructor

Defined in: [src/lib/Ledger.ts:116](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L116)

### Properties

#### EVENTS

• `Readonly` **EVENTS**: *typeof* [*EVENTS*](#enumslib_ledgereventsmd)

Defined in: [src/lib/Ledger.ts:89](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L89)

___

#### error

• **error**: *null* \| Error= null

Defined in: [src/lib/Ledger.ts:88](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L88)

___

#### isConnecting

• **isConnecting**: *boolean*= false

Defined in: [src/lib/Ledger.ts:91](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L91)

___

#### isDisconnecting

• **isDisconnecting**: *boolean*= false

Defined in: [src/lib/Ledger.ts:92](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L92)

___

#### EVENTS

▪ `Static` `Readonly` **EVENTS**: *typeof* [*EVENTS*](#enumslib_ledgereventsmd)

Defined in: [src/lib/Ledger.ts:81](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L81)

___

#### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](#capturerejectionsymbol)

Inherited from: events.EventEmitter.captureRejectionSymbol

Defined in: node_modules/@types/node/events.d.ts:43

___

#### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Inherited from: events.EventEmitter.captureRejections

Defined in: node_modules/@types/node/events.d.ts:49

___

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Inherited from: events.EventEmitter.defaultMaxListeners

Defined in: node_modules/@types/node/events.d.ts:50

___

#### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: *typeof* [*errorMonitor*](#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Inherited from: events.EventEmitter.errorMonitor

Defined in: node_modules/@types/node/events.d.ts:42

### Accessors

#### cosmos

• get **cosmos**(): *null* \| [*Cosmos*](#classeslib_cosmoscosmosmd)

**Returns:** *null* \| [*Cosmos*](#classeslib_cosmoscosmosmd)

Defined in: [src/lib/Ledger.ts:204](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L204)

___

#### device

• get **device**(): *null* \| [*Device*](#device)

**Returns:** *null* \| [*Device*](#device)

Defined in: [src/lib/Ledger.ts:211](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L211)

___

#### model

• get **model**(): *null* \| [*Model*](#model)

**Returns:** *null* \| [*Model*](#model)

Defined in: [src/lib/Ledger.ts:215](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L215)

___

#### transport

• get **transport**(): *null* \| *Transport*<string\>

**Returns:** *null* \| *Transport*<string\>

Defined in: [src/lib/Ledger.ts:200](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L200)

___

#### instance

• `Static`get **instance**(): [*Ledger*](#classeslib_ledgerledgermd)

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Defined in: [src/lib/Ledger.ts:114](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L114)

### Methods

#### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.addListener

Defined in: node_modules/@types/node/events.d.ts:62

___

#### connect

▸ **connect**(`request?`: *boolean*, `force?`: *boolean*, `emit?`: *boolean*): *Promise*<*null* \| Transport<string\>\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`request` | *boolean* | false |
`force` | *boolean* | false |
`emit` | *boolean* | true |

**Returns:** *Promise*<*null* \| Transport<string\>\>

Defined in: [src/lib/Ledger.ts:219](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L219)

___

#### debug

▸ **debug**(`debug`: *boolean*): *void*

##### Parameters:

Name | Type |
:------ | :------ |
`debug` | *boolean* |

**Returns:** *void*

Defined in: [src/lib/Ledger.ts:102](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L102)

___

#### disconnect

▸ **disconnect**(`force?`: *boolean*, `emit?`: *boolean*): *Promise*<boolean\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`force` | *boolean* | false |
`emit` | *boolean* | true |

**Returns:** *Promise*<boolean\>

Defined in: [src/lib/Ledger.ts:253](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L253)

___

#### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Inherited from: events.EventEmitter.emit

Defined in: node_modules/@types/node/events.d.ts:72

___

#### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: events.EventEmitter.eventNames

Defined in: node_modules/@types/node/events.d.ts:77

___

#### getAddressAndPublicKey

▸ **getAddressAndPublicKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<*null* \| [*APK*](#apk)\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| *number*[] |
`hrp` | *string* |
`p1?` | *number* |
`p2?` | *number* |

**Returns:** *Promise*<*null* \| [*APK*](#apk)\>

Defined in: [src/lib/Ledger.ts:334](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L334)

___

#### getApplicationInformation

▸ **getApplicationInformation**(): *Promise*<*null* \| [*ApplicationInformation*](#applicationinformation)\>

**Returns:** *Promise*<*null* \| [*ApplicationInformation*](#applicationinformation)\>

Defined in: [src/lib/Ledger.ts:316](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L316)

___

#### getBech32FromPK

▸ **getBech32FromPK**(`hrp`: *string*, `pk`: *Buffer*): *null* \| *string*

##### Parameters:

Name | Type |
:------ | :------ |
`hrp` | *string* |
`pk` | *Buffer* |

**Returns:** *null* \| *string*

Defined in: [src/lib/Ledger.ts:298](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L298)

___

#### getDeviceInformation

▸ **getDeviceInformation**(): *Promise*<*null* \| [*DeviceInformation*](#deviceinformation)\>

**Returns:** *Promise*<*null* \| [*DeviceInformation*](#deviceinformation)\>

Defined in: [src/lib/Ledger.ts:322](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L322)

___

#### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: events.EventEmitter.getMaxListeners

Defined in: node_modules/@types/node/events.d.ts:69

___

#### getPublicKey

▸ **getPublicKey**(`path`: *string* \| *number*[]): *Promise*<*null* \| [*PK*](#pk)\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| *number*[] |

**Returns:** *Promise*<*null* \| [*PK*](#pk)\>

Defined in: [src/lib/Ledger.ts:328](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L328)

___

#### getVersion

▸ **getVersion**(): *Promise*<*null* \| [*Version*](#version)\>

**Returns:** *Promise*<*null* \| [*Version*](#version)\>

Defined in: [src/lib/Ledger.ts:310](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L310)

___

#### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: events.EventEmitter.listenerCount

Defined in: node_modules/@types/node/events.d.ts:73

___

#### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: events.EventEmitter.listeners

Defined in: node_modules/@types/node/events.d.ts:70

___

#### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.off

Defined in: node_modules/@types/node/events.d.ts:66

___

#### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.on

Defined in: node_modules/@types/node/events.d.ts:63

___

#### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.once

Defined in: node_modules/@types/node/events.d.ts:64

___

#### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.prependListener

Defined in: node_modules/@types/node/events.d.ts:75

___

#### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.prependOnceListener

Defined in: node_modules/@types/node/events.d.ts:76

___

#### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: events.EventEmitter.rawListeners

Defined in: node_modules/@types/node/events.d.ts:71

___

#### reconnect

▸ **reconnect**(`request?`: *boolean*): *Promise*<*null* \| Transport<string\>\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| Transport<string\>\>

Defined in: [src/lib/Ledger.ts:249](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L249)

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.removeAllListeners

Defined in: node_modules/@types/node/events.d.ts:67

___

#### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.removeListener

Defined in: node_modules/@types/node/events.d.ts:65

___

#### serializeHRP

▸ **serializeHRP**(`hrp`: *string*): *null* \| *Buffer*

##### Parameters:

Name | Type |
:------ | :------ |
`hrp` | *string* |

**Returns:** *null* \| *Buffer*

Defined in: [src/lib/Ledger.ts:294](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L294)

___

#### serializePath

▸ **serializePath**(`path`: *string* \| readonly *number*[]): *Promise*<*null* \| Buffer\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| readonly *number*[] |

**Returns:** *Promise*<*null* \| Buffer\>

Defined in: [src/lib/Ledger.ts:302](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L302)

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Ledger*](#classeslib_ledgerledgermd)

##### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Ledger*](#classeslib_ledgerledgermd)

Inherited from: events.EventEmitter.setMaxListeners

Defined in: node_modules/@types/node/events.d.ts:68

___

#### showAddressAndPubKey

▸ **showAddressAndPubKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<*null* \| [*APK*](#apk)\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| *number*[] |
`hrp` | *string* |
`p1?` | *number* |
`p2?` | *number* |

**Returns:** *Promise*<*null* \| [*APK*](#apk)\>

Defined in: [src/lib/Ledger.ts:345](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L345)

___

#### sign

▸ **sign**(`path`: *string* \| *number*[], `data`: *any*, `size?`: *number*): *Promise*<*null* \| [*Signature*](#signature)\>

##### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* \| *number*[] |
`data` | *any* |
`size?` | *number* |

**Returns:** *Promise*<*null* \| [*Signature*](#signature)\>

Defined in: [src/lib/Ledger.ts:356](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L356)

___

#### transporter

▸ **transporter**(`request?`: *boolean*): *Promise*<*null* \| Transport<string\>\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| Transport<string\>\>

Defined in: [src/lib/Ledger.ts:368](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L368)

___

#### u2f

▸ **u2f**(): *Promise*<*null* \| Transport<string\>\>

**Returns:** *Promise*<*null* \| Transport<string\>\>

Defined in: [src/lib/Ledger.ts:128](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L128)

___

#### webHID

▸ **webHID**(`request?`: *boolean*): *Promise*<*null* \| Transport<string\>\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| Transport<string\>\>

Defined in: [src/lib/Ledger.ts:174](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L174)

___

#### webUSB

▸ **webUSB**(`request?`: *boolean*): *Promise*<*null* \| Transport<string\>\>

##### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| Transport<string\>\>

Defined in: [src/lib/Ledger.ts:150](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L150)

___

#### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

##### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: events.EventEmitter.listenerCount

Defined in: node_modules/@types/node/events.d.ts:31

___

#### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<any\>

##### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<any\>

Inherited from: events.EventEmitter.on

Defined in: node_modules/@types/node/events.d.ts:28

___

#### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<any[]\>

##### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<any[]\>

Inherited from: events.EventEmitter.once

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<any[]\>

##### Parameters:

Name | Type |
:------ | :------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<any[]\>

Inherited from: events.EventEmitter.once

Defined in: node_modules/@types/node/events.d.ts:27

# Enums


<a name="enumslib_ledgereventsmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / [lib/Ledger](#moduleslib_ledgermd) / EVENTS

## Enumeration: EVENTS

[lib/Ledger](#moduleslib_ledgermd).EVENTS

### Table of contents

#### Enumeration members

- [CONNECTED](#connected)
- [DISCONNECTED](#disconnected)

### Enumeration members

#### CONNECTED

• **CONNECTED**: = "CONNECTED"

Defined in: [src/lib/Ledger.ts:29](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L29)

___

#### DISCONNECTED

• **DISCONNECTED**: = "DISCONNECTED"

Defined in: [src/lib/Ledger.ts:30](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L30)


<a name="modulesmd"></a>

[storybook-addon-meta](#readmemd) / Exports

# storybook-addon-meta

## Table of contents

### Modules

- [index](#modulesindexmd)
- [lib/Ledger](#moduleslib_ledgermd)
- [lib/cosmos](#moduleslib_cosmosmd)
- [lib/cosmos/constants](#moduleslib_cosmos_constantsmd)
- [lib/cosmos/cosmos1](#moduleslib_cosmos_cosmos1md)
- [lib/cosmos/cosmos2](#moduleslib_cosmos_cosmos2md)
- [lib/cosmos/types](#moduleslib_cosmos_typesmd)
- [lib/cosmos/utils](#moduleslib_cosmos_utilsmd)
- [log](#moduleslogmd)
- [types/declaration](#modulestypes_declarationmd)

# Modules


<a name="modulesindexmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / index

## Module: index

### Table of contents

#### References

- [APK](#apk)
- [ApplicationInformation](#applicationinformation)
- [Cosmos](#cosmos)
- [Device](#device)
- [DeviceInformation](#deviceinformation)
- [Dictionary](#dictionary)
- [EVENTS](#events)
- [Exception](#exception)
- [IDictionary](#idictionary)
- [IKeyValuePair](#ikeyvaluepair)
- [IList](#ilist)
- [IPair](#ipair)
- [KeyValuePair](#keyvaluepair)
- [Ledger](#ledger)
- [LedgerOptions](#ledgeroptions)
- [Ledgerer](#ledgerer)
- [List](#list)
- [Model](#model)
- [PK](#pk)
- [Pair](#pair)
- [Signature](#signature)
- [Version](#version)

### References

#### APK

Re-exports: [APK](#apk)

___

#### ApplicationInformation

Re-exports: [ApplicationInformation](#applicationinformation)

___

#### Cosmos

Re-exports: [Cosmos](#classeslib_cosmoscosmosmd)

___

#### Device

Re-exports: [Device](#device)

___

#### DeviceInformation

Re-exports: [DeviceInformation](#deviceinformation)

___

#### Dictionary

Re-exports: [Dictionary](#dictionary)

___

#### EVENTS

Re-exports: [EVENTS](#enumslib_ledgereventsmd)

___

#### Exception

Re-exports: [Exception](#exception)

___

#### IDictionary

Re-exports: [IDictionary](#idictionary)

___

#### IKeyValuePair

Re-exports: [IKeyValuePair](#ikeyvaluepair)

___

#### IList

Re-exports: [IList](#ilist)

___

#### IPair

Re-exports: [IPair](#ipair)

___

#### KeyValuePair

Re-exports: [KeyValuePair](#keyvaluepair)

___

#### Ledger

Re-exports: [Ledger](#classeslib_ledgerledgermd)

___

#### LedgerOptions

Re-exports: [LedgerOptions](#ledgeroptions)

___

#### Ledgerer

Re-exports: [Ledgerer](#ledgerer)

___

#### List

Re-exports: [List](#list)

___

#### Model

Re-exports: [Model](#model)

___

#### PK

Re-exports: [PK](#pk)

___

#### Pair

Re-exports: [Pair](#pair)

___

#### Signature

Re-exports: [Signature](#signature)

___

#### Version

Re-exports: [Version](#version)


<a name="moduleslib_cosmosmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/cosmos

## Module: lib/cosmos

### Table of contents

#### Classes

- [Cosmos](#classeslib_cosmoscosmosmd)


<a name="moduleslib_cosmos_constantsmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/cosmos/constants

## Module: lib/cosmos/constants

### Table of contents

#### Variables

- [APPLICATION](#application)
- [CLA](#cla)
- [ERROR\_CODE](#error_code)
- [ERROR\_DESCRIPTION](#error_description)
- [INS](#ins)
- [P1\_VALUES](#p1_values)
- [PAYLOAD\_TYPE](#payload_type)
- [SIZE](#size)

### Variables

#### APPLICATION

• `Const` **APPLICATION**: *string*= 'COSMOS'

Defined in: [src/lib/cosmos/constants.ts:7](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L7)

___

#### CLA

• `Const` **CLA**: *number*= 0x55

Defined in: [src/lib/cosmos/constants.ts:5](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L5)

___

#### ERROR\_CODE

• `Const` **ERROR\_CODE**: [*IDictionary*](#idictionary)<number\>

Defined in: [src/lib/cosmos/constants.ts:28](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L28)

___

#### ERROR\_DESCRIPTION

• `Const` **ERROR\_DESCRIPTION**: [*IDictionary*](#idictionary)<string\>

Defined in: [src/lib/cosmos/constants.ts:32](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L32)

___

#### INS

• `Const` **INS**: [*IDictionary*](#idictionary)<number\>

Defined in: [src/lib/cosmos/constants.ts:9](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L9)

___

#### P1\_VALUES

• `Const` **P1\_VALUES**: [*IDictionary*](#idictionary)<number\>

Defined in: [src/lib/cosmos/constants.ts:23](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L23)

___

#### PAYLOAD\_TYPE

• `Const` **PAYLOAD\_TYPE**: [*IDictionary*](#idictionary)<number\>

Defined in: [src/lib/cosmos/constants.ts:17](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L17)

___

#### SIZE

• `Const` **SIZE**: *number*= 250

Defined in: [src/lib/cosmos/constants.ts:6](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/constants.ts#L6)


<a name="moduleslib_cosmos_cosmos1md"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/cosmos/cosmos1

## Module: lib/cosmos/cosmos1

### Table of contents

#### Functions

- [publicKeyv1](#publickeyv1)
- [serializePathv1](#serializepathv1)
- [signSendChunkv1](#signsendchunkv1)

### Functions

#### publicKeyv1

▸ **publicKeyv1**(`transport`: Transport, `data`: Buffer): *Promise*<[*PK*](#pk)\>

##### Parameters:

Name | Type |
:------ | :------ |
`transport` | Transport |
`data` | Buffer |

**Returns:** *Promise*<[*PK*](#pk)\>

Defined in: [src/lib/cosmos/cosmos1.ts:87](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/cosmos1.ts#L87)

___

#### serializePathv1

▸ **serializePathv1**(`path`: readonly *number*[] \| *string*): Buffer

##### Parameters:

Name | Type |
:------ | :------ |
`path` | readonly *number*[] \| *string* |

**Returns:** Buffer

Defined in: [src/lib/cosmos/cosmos1.ts:10](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/cosmos1.ts#L10)

___

#### signSendChunkv1

▸ **signSendChunkv1**(`transport`: Transport, `chunkIdx`: *number*, `chunkNum`: *number*, `chunk`: Buffer): *Promise*<[*Signature*](#signature)\>

##### Parameters:

Name | Type |
:------ | :------ |
`transport` | Transport |
`chunkIdx` | *number* |
`chunkNum` | *number* |
`chunk` | Buffer |

**Returns:** *Promise*<[*Signature*](#signature)\>

Defined in: [src/lib/cosmos/cosmos1.ts:32](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/cosmos1.ts#L32)


<a name="moduleslib_cosmos_cosmos2md"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/cosmos/cosmos2

## Module: lib/cosmos/cosmos2

### Table of contents

#### Functions

- [publicKeyv2](#publickeyv2)
- [serializePathv2](#serializepathv2)
- [signSendChunkv2](#signsendchunkv2)

### Functions

#### publicKeyv2

▸ **publicKeyv2**(`transport`: Transport, `data`: Buffer): *Promise*<[*PK*](#pk)\>

##### Parameters:

Name | Type |
:------ | :------ |
`transport` | Transport |
`data` | Buffer |

**Returns:** *Promise*<[*PK*](#pk)\>

Defined in: [src/lib/cosmos/cosmos2.ts:45](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/cosmos2.ts#L45)

___

#### serializePathv2

▸ **serializePathv2**(`path`: readonly *number*[] \| *string*): Buffer

##### Parameters:

Name | Type |
:------ | :------ |
`path` | readonly *number*[] \| *string* |

**Returns:** Buffer

Defined in: [src/lib/cosmos/cosmos2.ts:10](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/cosmos2.ts#L10)

___

#### signSendChunkv2

▸ **signSendChunkv2**(`transport`: Transport, `chunkIdx`: *number*, `chunkNum`: *number*, `chunk`: Buffer): *Promise*<[*Signature*](#signature)\>

##### Parameters:

Name | Type |
:------ | :------ |
`transport` | Transport |
`chunkIdx` | *number* |
`chunkNum` | *number* |
`chunk` | Buffer |

**Returns:** *Promise*<[*Signature*](#signature)\>

Defined in: [src/lib/cosmos/cosmos2.ts:27](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/cosmos2.ts#L27)


<a name="moduleslib_cosmos_typesmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/cosmos/types

## Module: lib/cosmos/types

### Table of contents

#### Type aliases

- [APK](#apk)
- [ApplicationInformation](#applicationinformation)
- [DeviceInformation](#deviceinformation)
- [Dictionary](#dictionary)
- [Exception](#exception)
- [IDictionary](#idictionary)
- [IKeyValuePair](#ikeyvaluepair)
- [IList](#ilist)
- [IPair](#ipair)
- [KeyValuePair](#keyvaluepair)
- [List](#list)
- [PK](#pk)
- [Pair](#pair)
- [Signature](#signature)
- [Version](#version)

### Type aliases

#### APK

Ƭ **APK**: *Partial*<{ `bech32_address`: *string* ; `compressed_pk`: Buffer  }\> & [*Exception*](#exception)

Defined in: [src/lib/cosmos/types/index.ts:36](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L36)

___

#### ApplicationInformation

Ƭ **ApplicationInformation**: *Partial*<{ `appName`: *string* ; `appVersion`: *string* ; `flagLen`: *number* ; `flag_onboarded`: *boolean* ; `flag_pin_validated`: *boolean* ; `flag_recovery`: *boolean* ; `flag_signed_mcu_code`: *boolean* ; `flagsValue`: *number*  }\> & [*Exception*](#exception)

Defined in: [src/lib/cosmos/types/index.ts:57](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L57)

___

#### DeviceInformation

Ƭ **DeviceInformation**: *Partial*<{ `flag`: *string* ; `mcuVersion`: *string* ; `seVersion`: *string* ; `targetId`: *string*  }\> & [*Exception*](#exception)

Defined in: [src/lib/cosmos/types/index.ts:69](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L69)

___

#### Dictionary

Ƭ **Dictionary**<Value\>: [*IDictionary*](#idictionary)<Value\>

##### Type parameters:

Name |
:------ |
`Value` |

Defined in: [src/lib/cosmos/types/index.ts:7](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L7)

___

#### Exception

Ƭ **Exception**: *object*

##### Type declaration:

Name | Type |
:------ | :------ |
`error_message` | *string* |
`return_code` | *number* |

Defined in: [src/lib/cosmos/types/index.ts:25](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L25)

___

#### IDictionary

Ƭ **IDictionary**<Value\>: *object*

##### Type parameters:

Name |
:------ |
`Value` |

##### Type declaration:

Defined in: [src/lib/cosmos/types/index.ts:4](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L4)

___

#### IKeyValuePair

Ƭ **IKeyValuePair**<K, V\>: *object*

##### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`K` | *string* \| *number* | - |
`V` | - | *unknown* |

##### Type declaration:

Name | Type |
:------ | :------ |
`key` | K |
`value` | V |

Defined in: [src/lib/cosmos/types/index.ts:15](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L15)

___

#### IList

Ƭ **IList**<T\>: *ReadonlyArray*<T\>

##### Type parameters:

Name |
:------ |
`T` |

Defined in: [src/lib/cosmos/types/index.ts:1](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L1)

___

#### IPair

Ƭ **IPair**<Value\>: *object*

##### Type parameters:

Name |
:------ |
`Value` |

##### Type declaration:

Defined in: [src/lib/cosmos/types/index.ts:9](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L9)

___

#### KeyValuePair

Ƭ **KeyValuePair**<K, V\>: [*IKeyValuePair*](#ikeyvaluepair)<K, V\>

##### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`K` | *string* \| *number* | - |
`V` | - | *unknown* |

Defined in: [src/lib/cosmos/types/index.ts:20](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L20)

___

#### List

Ƭ **List**<T\>: *ReadonlyArray*<T\>

##### Type parameters:

Name |
:------ |
`T` |

Defined in: [src/lib/cosmos/types/index.ts:2](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L2)

___

#### PK

Ƭ **PK**: *Partial*<{ `compressed_pk`: Buffer ; `pk`: Buffer \| *string*  }\> & [*Exception*](#exception)

Defined in: [src/lib/cosmos/types/index.ts:30](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L30)

___

#### Pair

Ƭ **Pair**<Value\>: [*IPair*](#ipair)<Value\>

##### Type parameters:

Name |
:------ |
`Value` |

Defined in: [src/lib/cosmos/types/index.ts:13](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L13)

___

#### Signature

Ƭ **Signature**: *Partial*<{ `signature`: Uint8Array \| *null*  }\> & [*Exception*](#exception)

Defined in: [src/lib/cosmos/types/index.ts:42](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L42)

___

#### Version

Ƭ **Version**: *Partial*<{ `device_locked`: *boolean* ; `major`: *number* ; `minor`: *number* ; `patch`: *number* ; `target_id`: *string* ; `test_mode`: *boolean*  }\> & [*Exception*](#exception)

Defined in: [src/lib/cosmos/types/index.ts:47](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/types/index.ts#L47)


<a name="moduleslib_cosmos_utilsmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/cosmos/utils

## Module: lib/cosmos/utils

### Table of contents

#### Functions

- [errorCodeToString](#errorcodetostring)
- [formatPath](#formatpath)
- [isObject](#isobject)
- [processErrorResponse](#processerrorresponse)
- [sortObject](#sortobject)

### Functions

#### errorCodeToString

▸ **errorCodeToString**(`code`: *number*): *string*

##### Parameters:

Name | Type |
:------ | :------ |
`code` | *number* |

**Returns:** *string*

Defined in: [src/lib/cosmos/utils.ts:31](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/utils.ts#L31)

___

#### formatPath

▸ **formatPath**(`path`: readonly *number*[] \| *string*): *number*[]

##### Parameters:

Name | Type |
:------ | :------ |
`path` | readonly *number*[] \| *string* |

**Returns:** *number*[]

Defined in: [src/lib/cosmos/utils.ts:60](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/utils.ts#L60)

___

#### isObject

▸ **isObject**(`obj`: *unknown*): *boolean*

##### Parameters:

Name | Type |
:------ | :------ |
`obj` | *unknown* |

**Returns:** *boolean*

Defined in: [src/lib/cosmos/utils.ts:4](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/utils.ts#L4)

___

#### processErrorResponse

▸ **processErrorResponse**(`response`: [*Exception*](#exception) \| *any*): [*Exception*](#exception)

##### Parameters:

Name | Type |
:------ | :------ |
`response` | [*Exception*](#exception) \| *any* |

**Returns:** [*Exception*](#exception)

Defined in: [src/lib/cosmos/utils.ts:37](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/utils.ts#L37)

___

#### sortObject

▸ **sortObject**(`data`: *any*): *any*

##### Parameters:

Name | Type |
:------ | :------ |
`data` | *any* |

**Returns:** *any*

Defined in: [src/lib/cosmos/utils.ts:13](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/cosmos/utils.ts#L13)


<a name="moduleslib_ledgermd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / lib/Ledger

## Module: lib/Ledger

### Table of contents

#### Enumerations

- [EVENTS](#enumslib_ledgereventsmd)

#### Classes

- [Ledger](#classeslib_ledgerledgermd)

#### Type aliases

- [Device](#device)
- [LedgerOptions](#ledgeroptions)
- [Model](#model)

#### Variables

- [Ledgerer](#ledgerer)

### Type aliases

#### Device

Ƭ **Device**: *object*

##### Type declaration:

Name | Type |
:------ | :------ |
`deviceClass` | *number* |
`deviceProtocol` | *number* |
`deviceSubclass` | *number* |
`deviceVersionMajor` | *number* |
`deviceVersionMinor` | *number* |
`deviceVersionSubminor` | *number* |
`manufacturerName` | *string* |
`opened` | *boolean* |
`productId` | *number* |
`productName` | *string* |
`serialNumber` | *string* |
`usbVersionMajor` | *number* |
`usbVersionMinor` | *number* |
`usbVersionSubminor` | *number* |
`vendorId` | *number* |

Defined in: [src/lib/Ledger.ts:43](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L43)

___

#### LedgerOptions

Ƭ **LedgerOptions**: *object*

##### Type declaration:

Name | Type |
:------ | :------ |
`useU2f`? | *boolean* |
`useWebHID`? | *boolean* |
`useWebUSB`? | *boolean* |

Defined in: [src/lib/Ledger.ts:61](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L61)

___

#### Model

Ƭ **Model**: *object*

##### Type declaration:

Name | Type |
:------ | :------ |
`blockSize` | *number* |
`id` | *string* |
`legacyUsbProductId` | *number* |
`memorySize` | *number* |
`productIdMM` | *number* |
`productName` | *string* |
`usbOnly` | *boolean* |

Defined in: [src/lib/Ledger.ts:33](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L33)

### Variables

#### Ledgerer

• `Const` **Ledgerer**: [*Ledger*](#classeslib_ledgerledgermd)

Defined in: [src/lib/Ledger.ts:383](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/lib/Ledger.ts#L383)


<a name="moduleslogmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / log

## Module: log

### Table of contents

#### Variables

- [cosmosLog](#cosmoslog)
- [ledgerLog](#ledgerlog)

### Variables

#### cosmosLog

• `Const` **cosmosLog**: Logger

Defined in: [src/log.ts:3](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/log.ts#L3)

___

#### ledgerLog

• `Const` **ledgerLog**: Logger

Defined in: [src/log.ts:4](https://github.com/idimetrix/storybook-addon-meta/blob/cfe5c68/src/log.ts#L4)


<a name="modulestypes_declarationmd"></a>

[storybook-addon-meta](#readmemd) / [Exports](#modulesmd) / types/declaration

## Module: types/declaration
