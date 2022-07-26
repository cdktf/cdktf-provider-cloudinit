# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudinitProvider <a name="@cdktf/provider-cloudinit.CloudinitProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudinit cloudinit}.

#### Initializers <a name="@cdktf/provider-cloudinit.CloudinitProvider.Initializer"></a>

```typescript
import { CloudinitProvider } from '@cdktf/provider-cloudinit'

new CloudinitProvider(scope: Construct, id: string, config?: CloudinitProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.CloudinitProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.CloudinitProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.CloudinitProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-cloudinit.CloudinitProviderConfig`](#@cdktf/provider-cloudinit.CloudinitProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-cloudinit.CloudinitProvider.resetAlias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.CloudinitProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.CloudinitProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-cloudinit.CloudinitProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### Config <a name="@cdktf/provider-cloudinit.Config"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudinit/r/config cloudinit_config}.

#### Initializers <a name="@cdktf/provider-cloudinit.Config.Initializer"></a>

```typescript
import { Config } from '@cdktf/provider-cloudinit'

new Config(scope: Construct, id: string, config: ConfigConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.parameter.config"></a>

- *Type:* [`@cdktf/provider-cloudinit.ConfigConfig`](#@cdktf/provider-cloudinit.ConfigConfig)

---

#### Methods <a name="Methods"></a>

##### `putPart` <a name="@cdktf/provider-cloudinit.Config.putPart"></a>

```typescript
public putPart(value: IResolvable | ConfigPart[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.ConfigPart`](#@cdktf/provider-cloudinit.ConfigPart)[]

---

##### `resetBase64Encode` <a name="@cdktf/provider-cloudinit.Config.resetBase64Encode"></a>

```typescript
public resetBase64Encode()
```

##### `resetBoundary` <a name="@cdktf/provider-cloudinit.Config.resetBoundary"></a>

```typescript
public resetBoundary()
```

##### `resetGzip` <a name="@cdktf/provider-cloudinit.Config.resetGzip"></a>

```typescript
public resetGzip()
```

##### `resetId` <a name="@cdktf/provider-cloudinit.Config.resetId"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties"></a>

##### `part`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.property.part"></a>

```typescript
public readonly part: ConfigPartList;
```

- *Type:* [`@cdktf/provider-cloudinit.ConfigPartList`](#@cdktf/provider-cloudinit.ConfigPartList)

---

##### `rendered`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.property.rendered"></a>

```typescript
public readonly rendered: string;
```

- *Type:* `string`

---

##### `base64EncodeInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.Config.property.base64EncodeInput"></a>

```typescript
public readonly base64EncodeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `boundaryInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.Config.property.boundaryInput"></a>

```typescript
public readonly boundaryInput: string;
```

- *Type:* `string`

---

##### `gzipInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.Config.property.gzipInput"></a>

```typescript
public readonly gzipInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.Config.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `partInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.Config.property.partInput"></a>

```typescript
public readonly partInput: IResolvable | ConfigPart[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.ConfigPart`](#@cdktf/provider-cloudinit.ConfigPart)[]

---

##### `base64Encode`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `boundary`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.property.boundary"></a>

```typescript
public readonly boundary: string;
```

- *Type:* `string`

---

##### `gzip`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-cloudinit.Config.property.tfResourceType"></a>

- *Type:* `string`

---

### DataCloudinitConfig <a name="@cdktf/provider-cloudinit.DataCloudinitConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudinit/d/config cloudinit_config}.

#### Initializers <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.Initializer"></a>

```typescript
import { DataCloudinitConfig } from '@cdktf/provider-cloudinit'

new DataCloudinitConfig(scope: Construct, id: string, config: DataCloudinitConfigConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.parameter.config"></a>

- *Type:* [`@cdktf/provider-cloudinit.DataCloudinitConfigConfig`](#@cdktf/provider-cloudinit.DataCloudinitConfigConfig)

---

#### Methods <a name="Methods"></a>

##### `putPart` <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.putPart"></a>

```typescript
public putPart(value: IResolvable | DataCloudinitConfigPart[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.DataCloudinitConfigPart`](#@cdktf/provider-cloudinit.DataCloudinitConfigPart)[]

---

##### `resetBase64Encode` <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.resetBase64Encode"></a>

```typescript
public resetBase64Encode()
```

##### `resetBoundary` <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.resetBoundary"></a>

```typescript
public resetBoundary()
```

##### `resetGzip` <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.resetGzip"></a>

```typescript
public resetGzip()
```

##### `resetId` <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.resetId"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties"></a>

##### `part`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.part"></a>

```typescript
public readonly part: DataCloudinitConfigPartList;
```

- *Type:* [`@cdktf/provider-cloudinit.DataCloudinitConfigPartList`](#@cdktf/provider-cloudinit.DataCloudinitConfigPartList)

---

##### `rendered`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.rendered"></a>

```typescript
public readonly rendered: string;
```

- *Type:* `string`

---

##### `base64EncodeInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.base64EncodeInput"></a>

```typescript
public readonly base64EncodeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `boundaryInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.boundaryInput"></a>

```typescript
public readonly boundaryInput: string;
```

- *Type:* `string`

---

##### `gzipInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.gzipInput"></a>

```typescript
public readonly gzipInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `partInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.partInput"></a>

```typescript
public readonly partInput: IResolvable | DataCloudinitConfigPart[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.DataCloudinitConfigPart`](#@cdktf/provider-cloudinit.DataCloudinitConfigPart)[]

---

##### `base64Encode`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `boundary`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.boundary"></a>

```typescript
public readonly boundary: string;
```

- *Type:* `string`

---

##### `gzip`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-cloudinit.DataCloudinitConfig.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### CloudinitProviderConfig <a name="@cdktf/provider-cloudinit.CloudinitProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CloudinitProviderConfig } from '@cdktf/provider-cloudinit'

const cloudinitProviderConfig: CloudinitProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.CloudinitProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit#alias CloudinitProvider#alias}

---

### ConfigConfig <a name="@cdktf/provider-cloudinit.ConfigConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConfigConfig } from '@cdktf/provider-cloudinit'

const configConfig: ConfigConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `part`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.part"></a>

```typescript
public readonly part: IResolvable | ConfigPart[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.ConfigPart`](#@cdktf/provider-cloudinit.ConfigPart)[]

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#part Config#part}

---

##### `base64Encode`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#base64_encode Config#base64_encode}.

---

##### `boundary`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.boundary"></a>

```typescript
public readonly boundary: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#boundary Config#boundary}.

---

##### `gzip`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#gzip Config#gzip}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#id Config#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConfigPart <a name="@cdktf/provider-cloudinit.ConfigPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ConfigPart } from '@cdktf/provider-cloudinit'

const configPart: ConfigPart = { ... }
```

##### `content`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPart.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content Config#content}.

---

##### `contentType`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPart.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content_type Config#content_type}.

---

##### `filename`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPart.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#filename Config#filename}.

---

##### `mergeType`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPart.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#merge_type Config#merge_type}.

---

### DataCloudinitConfigConfig <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataCloudinitConfigConfig } from '@cdktf/provider-cloudinit'

const dataCloudinitConfigConfig: DataCloudinitConfigConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `part`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.part"></a>

```typescript
public readonly part: IResolvable | DataCloudinitConfigPart[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.DataCloudinitConfigPart`](#@cdktf/provider-cloudinit.DataCloudinitConfigPart)[]

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#part DataCloudinitConfig#part}

---

##### `base64Encode`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.base64Encode"></a>

```typescript
public readonly base64Encode: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#base64_encode DataCloudinitConfig#base64_encode}.

---

##### `boundary`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.boundary"></a>

```typescript
public readonly boundary: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#boundary DataCloudinitConfig#boundary}.

---

##### `gzip`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.gzip"></a>

```typescript
public readonly gzip: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#gzip DataCloudinitConfig#gzip}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#id DataCloudinitConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudinitConfigPart <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataCloudinitConfigPart } from '@cdktf/provider-cloudinit'

const dataCloudinitConfigPart: DataCloudinitConfigPart = { ... }
```

##### `content`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPart.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#content DataCloudinitConfig#content}.

---

##### `contentType`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPart.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#content_type DataCloudinitConfig#content_type}.

---

##### `filename`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPart.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#filename DataCloudinitConfig#filename}.

---

##### `mergeType`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPart.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config#merge_type DataCloudinitConfig#merge_type}.

---

## Classes <a name="Classes"></a>

### ConfigPartList <a name="@cdktf/provider-cloudinit.ConfigPartList"></a>

#### Initializers <a name="@cdktf/provider-cloudinit.ConfigPartList.Initializer"></a>

```typescript
import { ConfigPartList } from '@cdktf/provider-cloudinit'

new ConfigPartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-cloudinit.ConfigPartList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPartList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigPart[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.ConfigPart`](#@cdktf/provider-cloudinit.ConfigPart)[]

---


### ConfigPartOutputReference <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference"></a>

#### Initializers <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.Initializer"></a>

```typescript
import { ConfigPartOutputReference } from '@cdktf/provider-cloudinit'

new ConfigPartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `resetContentType` <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.resetContentType"></a>

```typescript
public resetContentType()
```

##### `resetFilename` <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.resetFilename"></a>

```typescript
public resetFilename()
```

##### `resetMergeType` <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.resetMergeType"></a>

```typescript
public resetMergeType()
```


#### Properties <a name="Properties"></a>

##### `contentInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* `string`

---

##### `contentTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* `string`

---

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.mergeTypeInput"></a>

```typescript
public readonly mergeTypeInput: string;
```

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

##### `mergeType`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.ConfigPartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigPart;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.ConfigPart`](#@cdktf/provider-cloudinit.ConfigPart)

---


### DataCloudinitConfigPartList <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList"></a>

#### Initializers <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.Initializer"></a>

```typescript
import { DataCloudinitConfigPartList } from '@cdktf/provider-cloudinit'

new DataCloudinitConfigPartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudinitConfigPart[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.DataCloudinitConfigPart`](#@cdktf/provider-cloudinit.DataCloudinitConfigPart)[]

---


### DataCloudinitConfigPartOutputReference <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference"></a>

#### Initializers <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.Initializer"></a>

```typescript
import { DataCloudinitConfigPartOutputReference } from '@cdktf/provider-cloudinit'

new DataCloudinitConfigPartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `resetContentType` <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.resetContentType"></a>

```typescript
public resetContentType()
```

##### `resetFilename` <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.resetFilename"></a>

```typescript
public resetFilename()
```

##### `resetMergeType` <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.resetMergeType"></a>

```typescript
public resetMergeType()
```


#### Properties <a name="Properties"></a>

##### `contentInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* `string`

---

##### `contentTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* `string`

---

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.mergeTypeInput"></a>

```typescript
public readonly mergeTypeInput: string;
```

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

##### `mergeType`<sup>Required</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-cloudinit.DataCloudinitConfigPartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudinitConfigPart;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-cloudinit.DataCloudinitConfigPart`](#@cdktf/provider-cloudinit.DataCloudinitConfigPart)

---



