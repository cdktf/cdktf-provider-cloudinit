// https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudinitConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify whether or not to base64 encode the `rendered` output. Defaults to `true`, and cannot be disabled if gzip is `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#base64_encode DataCloudinitConfig#base64_encode}
  */
  readonly base64Encode?: boolean | cdktf.IResolvable;
  /**
  * Specify the Writer's default boundary separator. Defaults to `MIMEBOUNDARY`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#boundary DataCloudinitConfig#boundary}
  */
  readonly boundary?: string;
  /**
  * Specify whether or not to gzip the `rendered` output. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#gzip DataCloudinitConfig#gzip}
  */
  readonly gzip?: boolean | cdktf.IResolvable;
  /**
  * part block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#part DataCloudinitConfig#part}
  */
  readonly part?: DataCloudinitConfigPart[] | cdktf.IResolvable;
}
export interface DataCloudinitConfigPart {
  /**
  * Body content for the part.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#content DataCloudinitConfig#content}
  */
  readonly content: string;
  /**
  * A MIME-style content type to report in the header for the part. Defaults to `text/plain`
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#content_type DataCloudinitConfig#content_type}
  */
  readonly contentType?: string;
  /**
  * A filename to report in the header for the part.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#filename DataCloudinitConfig#filename}
  */
  readonly filename?: string;
  /**
  * A value for the `X-Merge-Type` header of the part, to control [cloud-init merging behavior](https://cloudinit.readthedocs.io/en/latest/reference/merging.html).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config#merge_type DataCloudinitConfig#merge_type}
  */
  readonly mergeType?: string;
}

export function dataCloudinitConfigPartToTerraform(struct?: DataCloudinitConfigPart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    filename: cdktf.stringToTerraform(struct!.filename),
    merge_type: cdktf.stringToTerraform(struct!.mergeType),
  }
}

export class DataCloudinitConfigPartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudinitConfigPart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._mergeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeType = this._mergeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudinitConfigPart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._filename = undefined;
      this._mergeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._filename = value.filename;
      this._mergeType = value.mergeType;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // merge_type - computed: false, optional: true, required: false
  private _mergeType?: string; 
  public get mergeType() {
    return this.getStringAttribute('merge_type');
  }
  public set mergeType(value: string) {
    this._mergeType = value;
  }
  public resetMergeType() {
    this._mergeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTypeInput() {
    return this._mergeType;
  }
}

export class DataCloudinitConfigPartList extends cdktf.ComplexList {
  public internalValue? : DataCloudinitConfigPart[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudinitConfigPartOutputReference {
    return new DataCloudinitConfigPartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config cloudinit_config}
*/
export class DataCloudinitConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudinit_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/cloudinit/2.3.2/docs/data-sources/config cloudinit_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudinitConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudinitConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudinit_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudinit',
        providerVersion: '2.3.2',
        providerVersionConstraint: '~> 2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64Encode = config.base64Encode;
    this._boundary = config.boundary;
    this._gzip = config.gzip;
    this._part.internalValue = config.part;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode - computed: true, optional: true, required: false
  private _base64Encode?: boolean | cdktf.IResolvable; 
  public get base64Encode() {
    return this.getBooleanAttribute('base64_encode');
  }
  public set base64Encode(value: boolean | cdktf.IResolvable) {
    this._base64Encode = value;
  }
  public resetBase64Encode() {
    this._base64Encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeInput() {
    return this._base64Encode;
  }

  // boundary - computed: true, optional: true, required: false
  private _boundary?: string; 
  public get boundary() {
    return this.getStringAttribute('boundary');
  }
  public set boundary(value: string) {
    this._boundary = value;
  }
  public resetBoundary() {
    this._boundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryInput() {
    return this._boundary;
  }

  // gzip - computed: true, optional: true, required: false
  private _gzip?: boolean | cdktf.IResolvable; 
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }
  public set gzip(value: boolean | cdktf.IResolvable) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // part - computed: false, optional: true, required: false
  private _part = new DataCloudinitConfigPartList(this, "part", false);
  public get part() {
    return this._part;
  }
  public putPart(value: DataCloudinitConfigPart[] | cdktf.IResolvable) {
    this._part.internalValue = value;
  }
  public resetPart() {
    this._part.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode: cdktf.booleanToTerraform(this._base64Encode),
      boundary: cdktf.stringToTerraform(this._boundary),
      gzip: cdktf.booleanToTerraform(this._gzip),
      part: cdktf.listMapper(dataCloudinitConfigPartToTerraform, true)(this._part.internalValue),
    };
  }
}
