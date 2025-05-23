# `config` Submodule <a name="`config` Submodule" id="@cdktf/provider-cloudinit.config"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Config <a name="Config" id="@cdktf/provider-cloudinit.config.Config"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

new Config(Construct Scope, string Id, ConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig">ConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigConfig">ConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.putPart">PutPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetBase64Encode">ResetBase64Encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetBoundary">ResetBoundary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetGzip">ResetGzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetPart">ResetPart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudinit.config.Config.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudinit.config.Config.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudinit.config.Config.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudinit.config.Config.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudinit.config.Config.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudinit.config.Config.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudinit.config.Config.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudinit.config.Config.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudinit.config.Config.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudinit.config.Config.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudinit.config.Config.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudinit.config.Config.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudinit.config.Config.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudinit.config.Config.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudinit.config.Config.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudinit.config.Config.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudinit.config.Config.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudinit.config.Config.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.Config.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudinit.config.Config.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudinit.config.Config.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudinit.config.Config.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudinit.config.Config.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudinit.config.Config.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudinit.config.Config.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudinit.config.Config.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPart` <a name="PutPart" id="@cdktf/provider-cloudinit.config.Config.putPart"></a>

```csharp
private void PutPart(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudinit.config.Config.putPart.parameter.value"></a>

- *Type:* object

---

##### `ResetBase64Encode` <a name="ResetBase64Encode" id="@cdktf/provider-cloudinit.config.Config.resetBase64Encode"></a>

```csharp
private void ResetBase64Encode()
```

##### `ResetBoundary` <a name="ResetBoundary" id="@cdktf/provider-cloudinit.config.Config.resetBoundary"></a>

```csharp
private void ResetBoundary()
```

##### `ResetGzip` <a name="ResetGzip" id="@cdktf/provider-cloudinit.config.Config.resetGzip"></a>

```csharp
private void ResetGzip()
```

##### `ResetPart` <a name="ResetPart" id="@cdktf/provider-cloudinit.config.Config.resetPart"></a>

```csharp
private void ResetPart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Config resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudinit.config.Config.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

Config.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudinit.config.Config.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudinit.config.Config.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

Config.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudinit.config.Config.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudinit.config.Config.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

Config.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudinit.config.Config.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudinit.config.Config.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

Config.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Config resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudinit.config.Config.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudinit.config.Config.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Config to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudinit.config.Config.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Config that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudinit.config.Config.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Config to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.part">Part</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList">ConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.rendered">Rendered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.base64EncodeInput">Base64EncodeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.boundaryInput">BoundaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.gzipInput">GzipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.partInput">PartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.base64Encode">Base64Encode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.boundary">Boundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.gzip">Gzip</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudinit.config.Config.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudinit.config.Config.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudinit.config.Config.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudinit.config.Config.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudinit.config.Config.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudinit.config.Config.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudinit.config.Config.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudinit.config.Config.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudinit.config.Config.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudinit.config.Config.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudinit.config.Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudinit.config.Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudinit.config.Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudinit.config.Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudinit.config.Config.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-cloudinit.config.Config.property.part"></a>

```csharp
public ConfigPartList Part { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigPartList">ConfigPartList</a>

---

##### `Rendered`<sup>Required</sup> <a name="Rendered" id="@cdktf/provider-cloudinit.config.Config.property.rendered"></a>

```csharp
public string Rendered { get; }
```

- *Type:* string

---

##### `Base64EncodeInput`<sup>Optional</sup> <a name="Base64EncodeInput" id="@cdktf/provider-cloudinit.config.Config.property.base64EncodeInput"></a>

```csharp
public object Base64EncodeInput { get; }
```

- *Type:* object

---

##### `BoundaryInput`<sup>Optional</sup> <a name="BoundaryInput" id="@cdktf/provider-cloudinit.config.Config.property.boundaryInput"></a>

```csharp
public string BoundaryInput { get; }
```

- *Type:* string

---

##### `GzipInput`<sup>Optional</sup> <a name="GzipInput" id="@cdktf/provider-cloudinit.config.Config.property.gzipInput"></a>

```csharp
public object GzipInput { get; }
```

- *Type:* object

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-cloudinit.config.Config.property.partInput"></a>

```csharp
public object PartInput { get; }
```

- *Type:* object

---

##### `Base64Encode`<sup>Required</sup> <a name="Base64Encode" id="@cdktf/provider-cloudinit.config.Config.property.base64Encode"></a>

```csharp
public object Base64Encode { get; }
```

- *Type:* object

---

##### `Boundary`<sup>Required</sup> <a name="Boundary" id="@cdktf/provider-cloudinit.config.Config.property.boundary"></a>

```csharp
public string Boundary { get; }
```

- *Type:* string

---

##### `Gzip`<sup>Required</sup> <a name="Gzip" id="@cdktf/provider-cloudinit.config.Config.property.gzip"></a>

```csharp
public object Gzip { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudinit.config.Config.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfig <a name="ConfigConfig" id="@cdktf/provider-cloudinit.config.ConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudinit.config.ConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

new ConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Base64Encode = null,
    string Boundary = null,
    object Gzip = null,
    object Part = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.base64Encode">Base64Encode</a></code> | <code>object</code> | Specify whether or not to base64 encode the `rendered` output. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.boundary">Boundary</a></code> | <code>string</code> | Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.gzip">Gzip</a></code> | <code>object</code> | Specify whether or not to gzip the `rendered` output. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.part">Part</a></code> | <code>object</code> | part block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Base64Encode`<sup>Optional</sup> <a name="Base64Encode" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.base64Encode"></a>

```csharp
public object Base64Encode { get; set; }
```

- *Type:* object

Specify whether or not to base64 encode the `rendered` output.

Defaults to `true`, and cannot be disabled if gzip is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#base64_encode Config#base64_encode}

---

##### `Boundary`<sup>Optional</sup> <a name="Boundary" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.boundary"></a>

```csharp
public string Boundary { get; set; }
```

- *Type:* string

Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#boundary Config#boundary}

---

##### `Gzip`<sup>Optional</sup> <a name="Gzip" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.gzip"></a>

```csharp
public object Gzip { get; set; }
```

- *Type:* object

Specify whether or not to gzip the `rendered` output. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#gzip Config#gzip}

---

##### `Part`<sup>Optional</sup> <a name="Part" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.part"></a>

```csharp
public object Part { get; set; }
```

- *Type:* object

part block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#part Config#part}

---

### ConfigPart <a name="ConfigPart" id="@cdktf/provider-cloudinit.config.ConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudinit.config.ConfigPart.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

new ConfigPart {
    string Content,
    string ContentType = null,
    string Filename = null,
    string MergeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.content">Content</a></code> | <code>string</code> | Body content for the part. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.contentType">ContentType</a></code> | <code>string</code> | A MIME-style content type to report in the header for the part. Defaults to `text/plain`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.filename">Filename</a></code> | <code>string</code> | A filename to report in the header for the part. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.mergeType">MergeType</a></code> | <code>string</code> | A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html). |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudinit.config.ConfigPart.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Body content for the part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#content Config#content}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudinit.config.ConfigPart.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

A MIME-style content type to report in the header for the part. Defaults to `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#content_type Config#content_type}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-cloudinit.config.ConfigPart.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

A filename to report in the header for the part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#filename Config#filename}

---

##### `MergeType`<sup>Optional</sup> <a name="MergeType" id="@cdktf/provider-cloudinit.config.ConfigPart.property.mergeType"></a>

```csharp
public string MergeType { get; set; }
```

- *Type:* string

A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.7/docs/resources/config#merge_type Config#merge_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigPartList <a name="ConfigPartList" id="@cdktf/provider-cloudinit.config.ConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

new ConfigPartList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudinit.config.ConfigPartList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudinit.config.ConfigPartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudinit.config.ConfigPartList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudinit.config.ConfigPartList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudinit.config.ConfigPartList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudinit.config.ConfigPartList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudinit.config.ConfigPartList.get"></a>

```csharp
private ConfigPartOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudinit.config.ConfigPartList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigPartOutputReference <a name="ConfigPartOutputReference" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudinit;

new ConfigPartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetMergeType">ResetMergeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetMergeType` <a name="ResetMergeType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetMergeType"></a>

```csharp
private void ResetMergeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeTypeInput">MergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeType">MergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `MergeTypeInput`<sup>Optional</sup> <a name="MergeTypeInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeTypeInput"></a>

```csharp
public string MergeTypeInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `MergeType`<sup>Required</sup> <a name="MergeType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeType"></a>

```csharp
public string MergeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



