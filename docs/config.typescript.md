# `config` Submodule <a name="`config` Submodule" id="@cdktf/provider-cloudinit.config"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Config <a name="Config" id="@cdktf/provider-cloudinit.config.Config"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudinit/r/config cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.Config.Initializer"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

new config.Config(scope: Construct, id: string, config?: ConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig">ConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigConfig">ConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.putPart">putPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetBase64Encode">resetBase64Encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetBoundary">resetBoundary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetGzip">resetGzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetPart">resetPart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudinit.config.Config.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudinit.config.Config.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudinit.config.Config.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudinit.config.Config.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudinit.config.Config.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudinit.config.Config.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudinit.config.Config.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudinit.config.Config.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudinit.config.Config.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudinit.config.Config.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudinit.config.Config.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPart` <a name="putPart" id="@cdktf/provider-cloudinit.config.Config.putPart"></a>

```typescript
public putPart(value: IResolvable | ConfigPart[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudinit.config.Config.putPart.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]

---

##### `resetBase64Encode` <a name="resetBase64Encode" id="@cdktf/provider-cloudinit.config.Config.resetBase64Encode"></a>

```typescript
public resetBase64Encode(): void
```

##### `resetBoundary` <a name="resetBoundary" id="@cdktf/provider-cloudinit.config.Config.resetBoundary"></a>

```typescript
public resetBoundary(): void
```

##### `resetGzip` <a name="resetGzip" id="@cdktf/provider-cloudinit.config.Config.resetGzip"></a>

```typescript
public resetGzip(): void
```

##### `resetPart` <a name="resetPart" id="@cdktf/provider-cloudinit.config.Config.resetPart"></a>

```typescript
public resetPart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudinit.config.Config.isConstruct"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

config.Config.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudinit.config.Config.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudinit.config.Config.isTerraformElement"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

config.Config.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudinit.config.Config.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudinit.config.Config.isTerraformResource"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

config.Config.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudinit.config.Config.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.part">part</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList">ConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.rendered">rendered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.base64EncodeInput">base64EncodeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.boundaryInput">boundaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.gzipInput">gzipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.partInput">partInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.base64Encode">base64Encode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.boundary">boundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.gzip">gzip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudinit.config.Config.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudinit.config.Config.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudinit.config.Config.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudinit.config.Config.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudinit.config.Config.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudinit.config.Config.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudinit.config.Config.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudinit.config.Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudinit.config.Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudinit.config.Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudinit.config.Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudinit.config.Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudinit.config.Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudinit.config.Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudinit.config.Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-cloudinit.config.Config.property.part"></a>

```typescript
public readonly part: ConfigPartList;
```

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigPartList">ConfigPartList</a>

---

##### `rendered`<sup>Required</sup> <a name="rendered" id="@cdktf/provider-cloudinit.config.Config.property.rendered"></a>

```typescript
public readonly rendered: string;
```

- *Type:* string

---

##### `base64EncodeInput`<sup>Optional</sup> <a name="base64EncodeInput" id="@cdktf/provider-cloudinit.config.Config.property.base64EncodeInput"></a>

```typescript
public readonly base64EncodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `boundaryInput`<sup>Optional</sup> <a name="boundaryInput" id="@cdktf/provider-cloudinit.config.Config.property.boundaryInput"></a>

```typescript
public readonly boundaryInput: string;
```

- *Type:* string

---

##### `gzipInput`<sup>Optional</sup> <a name="gzipInput" id="@cdktf/provider-cloudinit.config.Config.property.gzipInput"></a>

```typescript
public readonly gzipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-cloudinit.config.Config.property.partInput"></a>

```typescript
public readonly partInput: IResolvable | ConfigPart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]

---

##### `base64Encode`<sup>Required</sup> <a name="base64Encode" id="@cdktf/provider-cloudinit.config.Config.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `boundary`<sup>Required</sup> <a name="boundary" id="@cdktf/provider-cloudinit.config.Config.property.boundary"></a>

```typescript
public readonly boundary: string;
```

- *Type:* string

---

##### `gzip`<sup>Required</sup> <a name="gzip" id="@cdktf/provider-cloudinit.config.Config.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudinit.config.Config.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfig <a name="ConfigConfig" id="@cdktf/provider-cloudinit.config.ConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudinit.config.ConfigConfig.Initializer"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

const configConfig: config.ConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.base64Encode">base64Encode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether or not to base64 encode the `rendered` output. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.boundary">boundary</a></code> | <code>string</code> | Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.gzip">gzip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether or not to gzip the `rendered` output. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.part">part</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]</code> | part block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `base64Encode`<sup>Optional</sup> <a name="base64Encode" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether or not to base64 encode the `rendered` output.

Defaults to `true`, and cannot be disabled if gzip is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#base64_encode Config#base64_encode}

---

##### `boundary`<sup>Optional</sup> <a name="boundary" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.boundary"></a>

```typescript
public readonly boundary: string;
```

- *Type:* string

Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#boundary Config#boundary}

---

##### `gzip`<sup>Optional</sup> <a name="gzip" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether or not to gzip the `rendered` output. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#gzip Config#gzip}

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.part"></a>

```typescript
public readonly part: IResolvable | ConfigPart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#part Config#part}

---

### ConfigPart <a name="ConfigPart" id="@cdktf/provider-cloudinit.config.ConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudinit.config.ConfigPart.Initializer"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

const configPart: config.ConfigPart = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.content">content</a></code> | <code>string</code> | Body content for the part. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.contentType">contentType</a></code> | <code>string</code> | A MIME-style content type to report in the header for the part. Defaults to `text/plain`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.filename">filename</a></code> | <code>string</code> | A filename to report in the header for the part. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.mergeType">mergeType</a></code> | <code>string</code> | A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html). |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudinit.config.ConfigPart.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Body content for the part.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content Config#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudinit.config.ConfigPart.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

A MIME-style content type to report in the header for the part. Defaults to `text/plain`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content_type Config#content_type}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-cloudinit.config.ConfigPart.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

A filename to report in the header for the part.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#filename Config#filename}

---

##### `mergeType`<sup>Optional</sup> <a name="mergeType" id="@cdktf/provider-cloudinit.config.ConfigPart.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#merge_type Config#merge_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigPartList <a name="ConfigPartList" id="@cdktf/provider-cloudinit.config.ConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

new config.ConfigPartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudinit.config.ConfigPartList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudinit.config.ConfigPartList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudinit.config.ConfigPartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudinit.config.ConfigPartList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudinit.config.ConfigPartList.get"></a>

```typescript
public get(index: number): ConfigPartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudinit.config.ConfigPartList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigPart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a>[]

---


### ConfigPartOutputReference <a name="ConfigPartOutputReference" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer"></a>

```typescript
import { config } from '@cdktf/provider-cloudinit'

new config.ConfigPartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetMergeType">resetMergeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetMergeType` <a name="resetMergeType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetMergeType"></a>

```typescript
public resetMergeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeTypeInput">mergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeType">mergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="mergeTypeInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeTypeInput"></a>

```typescript
public readonly mergeTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `mergeType`<sup>Required</sup> <a name="mergeType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigPart | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigPart">ConfigPart</a> | cdktf.IResolvable

---



