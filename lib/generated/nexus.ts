/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../../prisma/context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryWhereUniqueInput: { // input type
    icon?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    url?: string | null; // String
  }
  ProductWhereUniqueInput: { // input type
    category_id?: number | null; // Int
    icon?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    url?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Category: { // root type
    description?: string | null; // String
    icon: string; // String!
    id: number; // Int!
    name: string; // String!
    parent?: number | null; // Int
    url: string; // String!
  }
  ImageCat: { // root type
    category_id?: number | null; // Int
    id: number; // Int!
    url: string; // String!
  }
  ImageProd: { // root type
    id: number; // Int!
    product_id?: number | null; // Int
    url: string; // String!
  }
  Mutation: {};
  Product: { // root type
    category_id?: number | null; // Int
    description?: string | null; // String
    icon: string; // String!
    id: number; // Int!
    name: string; // String!
    price: number; // Int!
    url: string; // String!
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Upload: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CategoryWhereUniqueInput: NexusGenInputs['CategoryWhereUniqueInput'];
  ProductWhereUniqueInput: NexusGenInputs['ProductWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Category: { // field return type
    description: string | null; // String
    icon: string; // String!
    id: number; // Int!
    images: NexusGenRootTypes['ImageCat'][]; // [ImageCat!]!
    name: string; // String!
    parent: number | null; // Int
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    url: string; // String!
  }
  ImageCat: { // field return type
    category: NexusGenRootTypes['Category'] | null; // Category
    category_id: number | null; // Int
    id: number; // Int!
    url: string; // String!
  }
  ImageProd: { // field return type
    id: number; // Int!
    product: NexusGenRootTypes['Product'] | null; // Product
    product_id: number | null; // Int
    url: string; // String!
  }
  Mutation: { // field return type
    uploadFile: string; // String!
  }
  Product: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    category_id: number | null; // Int
    description: string | null; // String
    icon: string; // String!
    id: number; // Int!
    images: NexusGenRootTypes['ImageProd'][]; // [ImageProd!]!
    name: string; // String!
    price: number; // Int!
    url: string; // String!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    category: NexusGenRootTypes['Category'] | null; // Category
    categoryByName: NexusGenRootTypes['Category']; // Category!
    product: NexusGenRootTypes['Product'] | null; // Product
    productByName: NexusGenRootTypes['Product']; // Product!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    productsByCategoryId: NexusGenRootTypes['Product'][]; // [Product!]!
    productsByNameAndCategoryId: NexusGenRootTypes['Product'][]; // [Product!]!
  }
}

export interface NexusGenArgTypes {
  Category: {
    images: { // args
      skip?: number | null; // Int
    }
    products: { // args
      skip?: number | null; // Int
    }
  }
  Mutation: {
    uploadFile: { // args
      file: any; // Upload!
    }
  }
  Product: {
    categories: { // args
      skip?: number | null; // Int
    }
    images: { // args
      skip?: number | null; // Int
    }
  }
  Query: {
    categories: { // args
      skip?: number | null; // Int
    }
    category: { // args
      where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
    }
    categoryByName: { // args
      name: string; // String!
    }
    product: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    productByName: { // args
      name: string; // String!
    }
    products: { // args
      skip?: number | null; // Int
    }
    productsByCategoryId: { // args
      category_id: number; // Int!
    }
    productsByNameAndCategoryId: { // args
      category_id?: number | null; // Int
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Category" | "ImageCat" | "ImageProd" | "Mutation" | "Product" | "Query";

export type NexusGenInputNames = "CategoryWhereUniqueInput" | "ProductWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String" | "Upload";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}