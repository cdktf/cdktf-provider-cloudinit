# `config` Submodule <a name="`config` Submodule" id="@cdktf/provider-cloudinit.config"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Config <a name="Config" id="@cdktf/provider-cloudinit.config.Config"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudinit/r/config cloudinit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

config.NewConfig(scope Construct, id *string, config ConfigConfig) Config
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig">ConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudinit.config.Config.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigConfig">ConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.putPart">PutPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetBase64Encode">ResetBase64Encode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetBoundary">ResetBoundary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetGzip">ResetGzip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.resetPart">ResetPart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudinit.config.Config.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudinit.config.Config.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudinit.config.Config.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudinit.config.Config.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudinit.config.Config.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudinit.config.Config.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudinit.config.Config.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudinit.config.Config.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudinit.config.Config.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudinit.config.Config.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudinit.config.Config.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.Config.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPart` <a name="PutPart" id="@cdktf/provider-cloudinit.config.Config.putPart"></a>

```go
func PutPart(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudinit.config.Config.putPart.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBase64Encode` <a name="ResetBase64Encode" id="@cdktf/provider-cloudinit.config.Config.resetBase64Encode"></a>

```go
func ResetBase64Encode()
```

##### `ResetBoundary` <a name="ResetBoundary" id="@cdktf/provider-cloudinit.config.Config.resetBoundary"></a>

```go
func ResetBoundary()
```

##### `ResetGzip` <a name="ResetGzip" id="@cdktf/provider-cloudinit.config.Config.resetGzip"></a>

```go
func ResetGzip()
```

##### `ResetPart` <a name="ResetPart" id="@cdktf/provider-cloudinit.config.Config.resetPart"></a>

```go
func ResetPart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudinit.config.Config.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

config.Config_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudinit.config.Config.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

config.Config_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudinit.config.Config.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudinit.config.Config.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

config.Config_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudinit.config.Config.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.part">Part</a></code> | <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList">ConfigPartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.rendered">Rendered</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.base64EncodeInput">Base64EncodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.boundaryInput">BoundaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.gzipInput">GzipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.partInput">PartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.base64Encode">Base64Encode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.boundary">Boundary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.gzip">Gzip</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudinit.config.Config.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudinit.config.Config.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudinit.config.Config.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudinit.config.Config.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudinit.config.Config.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudinit.config.Config.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudinit.config.Config.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudinit.config.Config.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudinit.config.Config.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudinit.config.Config.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudinit.config.Config.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudinit.config.Config.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudinit.config.Config.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudinit.config.Config.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudinit.config.Config.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-cloudinit.config.Config.property.part"></a>

```go
func Part() ConfigPartList
```

- *Type:* <a href="#@cdktf/provider-cloudinit.config.ConfigPartList">ConfigPartList</a>

---

##### `Rendered`<sup>Required</sup> <a name="Rendered" id="@cdktf/provider-cloudinit.config.Config.property.rendered"></a>

```go
func Rendered() *string
```

- *Type:* *string

---

##### `Base64EncodeInput`<sup>Optional</sup> <a name="Base64EncodeInput" id="@cdktf/provider-cloudinit.config.Config.property.base64EncodeInput"></a>

```go
func Base64EncodeInput() interface{}
```

- *Type:* interface{}

---

##### `BoundaryInput`<sup>Optional</sup> <a name="BoundaryInput" id="@cdktf/provider-cloudinit.config.Config.property.boundaryInput"></a>

```go
func BoundaryInput() *string
```

- *Type:* *string

---

##### `GzipInput`<sup>Optional</sup> <a name="GzipInput" id="@cdktf/provider-cloudinit.config.Config.property.gzipInput"></a>

```go
func GzipInput() interface{}
```

- *Type:* interface{}

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-cloudinit.config.Config.property.partInput"></a>

```go
func PartInput() interface{}
```

- *Type:* interface{}

---

##### `Base64Encode`<sup>Required</sup> <a name="Base64Encode" id="@cdktf/provider-cloudinit.config.Config.property.base64Encode"></a>

```go
func Base64Encode() interface{}
```

- *Type:* interface{}

---

##### `Boundary`<sup>Required</sup> <a name="Boundary" id="@cdktf/provider-cloudinit.config.Config.property.boundary"></a>

```go
func Boundary() *string
```

- *Type:* *string

---

##### `Gzip`<sup>Required</sup> <a name="Gzip" id="@cdktf/provider-cloudinit.config.Config.property.gzip"></a>

```go
func Gzip() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.Config.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudinit.config.Config.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfig <a name="ConfigConfig" id="@cdktf/provider-cloudinit.config.ConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudinit.config.ConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

&config.ConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Base64Encode: interface{},
	Boundary: *string,
	Gzip: interface{},
	Part: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.base64Encode">Base64Encode</a></code> | <code>interface{}</code> | Specify whether or not to base64 encode the `rendered` output. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.boundary">Boundary</a></code> | <code>*string</code> | Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.gzip">Gzip</a></code> | <code>interface{}</code> | Specify whether or not to gzip the `rendered` output. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigConfig.property.part">Part</a></code> | <code>interface{}</code> | part block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Base64Encode`<sup>Optional</sup> <a name="Base64Encode" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.base64Encode"></a>

```go
Base64Encode interface{}
```

- *Type:* interface{}

Specify whether or not to base64 encode the `rendered` output.

Defaults to `true`, and cannot be disabled if gzip is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#base64_encode Config#base64_encode}

---

##### `Boundary`<sup>Optional</sup> <a name="Boundary" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.boundary"></a>

```go
Boundary *string
```

- *Type:* *string

Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#boundary Config#boundary}

---

##### `Gzip`<sup>Optional</sup> <a name="Gzip" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.gzip"></a>

```go
Gzip interface{}
```

- *Type:* interface{}

Specify whether or not to gzip the `rendered` output. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#gzip Config#gzip}

---

##### `Part`<sup>Optional</sup> <a name="Part" id="@cdktf/provider-cloudinit.config.ConfigConfig.property.part"></a>

```go
Part interface{}
```

- *Type:* interface{}

part block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#part Config#part}

---

### ConfigPart <a name="ConfigPart" id="@cdktf/provider-cloudinit.config.ConfigPart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudinit.config.ConfigPart.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

&config.ConfigPart {
	Content: *string,
	ContentType: *string,
	Filename: *string,
	MergeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.content">Content</a></code> | <code>*string</code> | Body content for the part. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.contentType">ContentType</a></code> | <code>*string</code> | A MIME-style content type to report in the header for the part. Defaults to `text/plain`. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.filename">Filename</a></code> | <code>*string</code> | A filename to report in the header for the part. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPart.property.mergeType">MergeType</a></code> | <code>*string</code> | A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html). |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudinit.config.ConfigPart.property.content"></a>

```go
Content *string
```

- *Type:* *string

Body content for the part.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content Config#content}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudinit.config.ConfigPart.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

A MIME-style content type to report in the header for the part. Defaults to `text/plain`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content_type Config#content_type}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-cloudinit.config.ConfigPart.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

A filename to report in the header for the part.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#filename Config#filename}

---

##### `MergeType`<sup>Optional</sup> <a name="MergeType" id="@cdktf/provider-cloudinit.config.ConfigPart.property.mergeType"></a>

```go
MergeType *string
```

- *Type:* *string

A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#merge_type Config#merge_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigPartList <a name="ConfigPartList" id="@cdktf/provider-cloudinit.config.ConfigPartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

config.NewConfigPartList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigPartList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudinit.config.ConfigPartList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudinit.config.ConfigPartList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudinit.config.ConfigPartList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudinit.config.ConfigPartList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudinit.config.ConfigPartList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudinit.config.ConfigPartList.get"></a>

```go
func Get(index *f64) ConfigPartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudinit.config.ConfigPartList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudinit.config.ConfigPartList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigPartOutputReference <a name="ConfigPartOutputReference" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudinit-go/cloudinit/v5/config"

config.NewConfigPartOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigPartOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetFilename"></a>

```go
func ResetFilename()
```

##### `ResetMergeType` <a name="ResetMergeType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.resetMergeType"></a>

```go
func ResetMergeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeTypeInput">MergeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeType">MergeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `MergeTypeInput`<sup>Optional</sup> <a name="MergeTypeInput" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeTypeInput"></a>

```go
func MergeTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `MergeType`<sup>Required</sup> <a name="MergeType" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.mergeType"></a>

```go
func MergeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudinit.config.ConfigPartOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



