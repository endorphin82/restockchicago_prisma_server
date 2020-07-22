/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../../prisma/context"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Upload";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
  }
}
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
  CategoryCreateInput: { // input type
    description?: string | null; // String
    icon: string; // String!
    ImageCat?: NexusGenInputs['ImageCatCreateManyWithoutCategoryInput'] | null; // ImageCatCreateManyWithoutCategoryInput
    img?: string | null; // String
    name: string; // String!
    parent?: number | null; // Int
    products?: NexusGenInputs['ProductCreateManyWithoutCategoriesInput'] | null; // ProductCreateManyWithoutCategoriesInput
    url: string; // String!
  }
  CategoryCreateManyWithoutProductsInput: { // input type
    connect?: NexusGenInputs['CategoryWhereUniqueInput'][] | null; // [CategoryWhereUniqueInput!]
    create?: NexusGenInputs['CategoryCreateWithoutProductsInput'][] | null; // [CategoryCreateWithoutProductsInput!]
  }
  CategoryCreateWithoutProductsInput: { // input type
    description?: string | null; // String
    icon: string; // String!
    ImageCat?: NexusGenInputs['ImageCatCreateManyWithoutCategoryInput'] | null; // ImageCatCreateManyWithoutCategoryInput
    img?: string | null; // String
    name: string; // String!
    parent?: number | null; // Int
    url: string; // String!
  }
  CategoryFilter: { // input type
    every?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    none?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    some?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
  }
  CategoryScalarWhereInput: { // input type
    AND?: NexusGenInputs['CategoryScalarWhereInput'][] | null; // [CategoryScalarWhereInput!]
    description?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    icon?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    ImageCat?: NexusGenInputs['ImageCatFilter'] | null; // ImageCatFilter
    img?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['CategoryScalarWhereInput'][] | null; // [CategoryScalarWhereInput!]
    OR?: NexusGenInputs['CategoryScalarWhereInput'][] | null; // [CategoryScalarWhereInput!]
    parent?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    products?: NexusGenInputs['ProductFilter'] | null; // ProductFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  CategoryUpdateInput: { // input type
    description?: string | null; // String
    icon?: string | null; // String
    id?: number | null; // Int
    ImageCat?: NexusGenInputs['ImageCatUpdateManyWithoutCategoryInput'] | null; // ImageCatUpdateManyWithoutCategoryInput
    img?: string | null; // String
    name?: string | null; // String
    parent?: number | null; // Int
    products?: NexusGenInputs['ProductUpdateManyWithoutCategoriesInput'] | null; // ProductUpdateManyWithoutCategoriesInput
    url?: string | null; // String
  }
  CategoryUpdateManyDataInput: { // input type
    description?: string | null; // String
    icon?: string | null; // String
    id?: number | null; // Int
    img?: string | null; // String
    name?: string | null; // String
    parent?: number | null; // Int
    url?: string | null; // String
  }
  CategoryUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['CategoryUpdateManyDataInput']; // CategoryUpdateManyDataInput!
    where: NexusGenInputs['CategoryScalarWhereInput']; // CategoryScalarWhereInput!
  }
  CategoryUpdateManyWithoutProductsInput: { // input type
    connect?: NexusGenInputs['CategoryWhereUniqueInput'][] | null; // [CategoryWhereUniqueInput!]
    create?: NexusGenInputs['CategoryCreateWithoutProductsInput'][] | null; // [CategoryCreateWithoutProductsInput!]
    delete?: NexusGenInputs['CategoryWhereUniqueInput'][] | null; // [CategoryWhereUniqueInput!]
    deleteMany?: NexusGenInputs['CategoryScalarWhereInput'][] | null; // [CategoryScalarWhereInput!]
    disconnect?: NexusGenInputs['CategoryWhereUniqueInput'][] | null; // [CategoryWhereUniqueInput!]
    set?: NexusGenInputs['CategoryWhereUniqueInput'][] | null; // [CategoryWhereUniqueInput!]
    update?: NexusGenInputs['CategoryUpdateWithWhereUniqueWithoutProductsInput'][] | null; // [CategoryUpdateWithWhereUniqueWithoutProductsInput!]
    updateMany?: NexusGenInputs['CategoryUpdateManyWithWhereNestedInput'][] | null; // [CategoryUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['CategoryUpsertWithWhereUniqueWithoutProductsInput'][] | null; // [CategoryUpsertWithWhereUniqueWithoutProductsInput!]
  }
  CategoryUpdateWithWhereUniqueWithoutProductsInput: { // input type
    data: NexusGenInputs['CategoryUpdateWithoutProductsDataInput']; // CategoryUpdateWithoutProductsDataInput!
    where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
  }
  CategoryUpdateWithoutProductsDataInput: { // input type
    description?: string | null; // String
    icon?: string | null; // String
    id?: number | null; // Int
    ImageCat?: NexusGenInputs['ImageCatUpdateManyWithoutCategoryInput'] | null; // ImageCatUpdateManyWithoutCategoryInput
    img?: string | null; // String
    name?: string | null; // String
    parent?: number | null; // Int
    url?: string | null; // String
  }
  CategoryUpsertWithWhereUniqueWithoutProductsInput: { // input type
    create: NexusGenInputs['CategoryCreateWithoutProductsInput']; // CategoryCreateWithoutProductsInput!
    update: NexusGenInputs['CategoryUpdateWithoutProductsDataInput']; // CategoryUpdateWithoutProductsDataInput!
    where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
  }
  CategoryWhereInput: { // input type
    AND?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    description?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    icon?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    ImageCat?: NexusGenInputs['ImageCatFilter'] | null; // ImageCatFilter
    img?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    OR?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    parent?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    products?: NexusGenInputs['ProductFilter'] | null; // ProductFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  CategoryWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
    url?: string | null; // String
  }
  ImageCatCreateManyWithoutCategoryInput: { // input type
    connect?: NexusGenInputs['ImageCatWhereUniqueInput'][] | null; // [ImageCatWhereUniqueInput!]
    create?: NexusGenInputs['ImageCatCreateWithoutCategoryInput'][] | null; // [ImageCatCreateWithoutCategoryInput!]
  }
  ImageCatCreateWithoutCategoryInput: { // input type
    url: string; // String!
  }
  ImageCatFilter: { // input type
    every?: NexusGenInputs['ImageCatWhereInput'] | null; // ImageCatWhereInput
    none?: NexusGenInputs['ImageCatWhereInput'] | null; // ImageCatWhereInput
    some?: NexusGenInputs['ImageCatWhereInput'] | null; // ImageCatWhereInput
  }
  ImageCatScalarWhereInput: { // input type
    AND?: NexusGenInputs['ImageCatScalarWhereInput'][] | null; // [ImageCatScalarWhereInput!]
    category_id?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['ImageCatScalarWhereInput'][] | null; // [ImageCatScalarWhereInput!]
    OR?: NexusGenInputs['ImageCatScalarWhereInput'][] | null; // [ImageCatScalarWhereInput!]
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ImageCatUpdateManyDataInput: { // input type
    id?: number | null; // Int
    url?: string | null; // String
  }
  ImageCatUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['ImageCatUpdateManyDataInput']; // ImageCatUpdateManyDataInput!
    where: NexusGenInputs['ImageCatScalarWhereInput']; // ImageCatScalarWhereInput!
  }
  ImageCatUpdateManyWithoutCategoryInput: { // input type
    connect?: NexusGenInputs['ImageCatWhereUniqueInput'][] | null; // [ImageCatWhereUniqueInput!]
    create?: NexusGenInputs['ImageCatCreateWithoutCategoryInput'][] | null; // [ImageCatCreateWithoutCategoryInput!]
    delete?: NexusGenInputs['ImageCatWhereUniqueInput'][] | null; // [ImageCatWhereUniqueInput!]
    deleteMany?: NexusGenInputs['ImageCatScalarWhereInput'][] | null; // [ImageCatScalarWhereInput!]
    disconnect?: NexusGenInputs['ImageCatWhereUniqueInput'][] | null; // [ImageCatWhereUniqueInput!]
    set?: NexusGenInputs['ImageCatWhereUniqueInput'][] | null; // [ImageCatWhereUniqueInput!]
    update?: NexusGenInputs['ImageCatUpdateWithWhereUniqueWithoutCategoryInput'][] | null; // [ImageCatUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany?: NexusGenInputs['ImageCatUpdateManyWithWhereNestedInput'][] | null; // [ImageCatUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['ImageCatUpsertWithWhereUniqueWithoutCategoryInput'][] | null; // [ImageCatUpsertWithWhereUniqueWithoutCategoryInput!]
  }
  ImageCatUpdateWithWhereUniqueWithoutCategoryInput: { // input type
    data: NexusGenInputs['ImageCatUpdateWithoutCategoryDataInput']; // ImageCatUpdateWithoutCategoryDataInput!
    where: NexusGenInputs['ImageCatWhereUniqueInput']; // ImageCatWhereUniqueInput!
  }
  ImageCatUpdateWithoutCategoryDataInput: { // input type
    id?: number | null; // Int
    url?: string | null; // String
  }
  ImageCatUpsertWithWhereUniqueWithoutCategoryInput: { // input type
    create: NexusGenInputs['ImageCatCreateWithoutCategoryInput']; // ImageCatCreateWithoutCategoryInput!
    update: NexusGenInputs['ImageCatUpdateWithoutCategoryDataInput']; // ImageCatUpdateWithoutCategoryDataInput!
    where: NexusGenInputs['ImageCatWhereUniqueInput']; // ImageCatWhereUniqueInput!
  }
  ImageCatWhereInput: { // input type
    AND?: NexusGenInputs['ImageCatWhereInput'][] | null; // [ImageCatWhereInput!]
    category?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    category_id?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['ImageCatWhereInput'][] | null; // [ImageCatWhereInput!]
    OR?: NexusGenInputs['ImageCatWhereInput'][] | null; // [ImageCatWhereInput!]
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ImageCatWhereUniqueInput: { // input type
    category_id?: number | null; // Int
    id?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  ProductCreateInput: { // input type
    categories?: NexusGenInputs['CategoryCreateManyWithoutProductsInput'] | null; // CategoryCreateManyWithoutProductsInput
    description?: string | null; // String
    icon: string; // String!
    img?: string | null; // String
    name: string; // String!
    price: number; // Int!
    url: string; // String!
  }
  ProductCreateManyWithoutCategoriesInput: { // input type
    connect?: NexusGenInputs['ProductWhereUniqueInput'][] | null; // [ProductWhereUniqueInput!]
    create?: NexusGenInputs['ProductCreateWithoutCategoriesInput'][] | null; // [ProductCreateWithoutCategoriesInput!]
  }
  ProductCreateWithoutCategoriesInput: { // input type
    description?: string | null; // String
    icon: string; // String!
    img?: string | null; // String
    name: string; // String!
    price: number; // Int!
    url: string; // String!
  }
  ProductFilter: { // input type
    every?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    none?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    some?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
  }
  ProductScalarWhereInput: { // input type
    AND?: NexusGenInputs['ProductScalarWhereInput'][] | null; // [ProductScalarWhereInput!]
    categories?: NexusGenInputs['CategoryFilter'] | null; // CategoryFilter
    description?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    icon?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    img?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ProductScalarWhereInput'][] | null; // [ProductScalarWhereInput!]
    OR?: NexusGenInputs['ProductScalarWhereInput'][] | null; // [ProductScalarWhereInput!]
    price?: NexusGenInputs['IntFilter'] | null; // IntFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ProductUpdateInput: { // input type
    categories?: NexusGenInputs['CategoryUpdateManyWithoutProductsInput'] | null; // CategoryUpdateManyWithoutProductsInput
    description?: string | null; // String
    icon?: string | null; // String
    id?: number | null; // Int
    img?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Int
    url?: string | null; // String
  }
  ProductUpdateManyDataInput: { // input type
    description?: string | null; // String
    icon?: string | null; // String
    id?: number | null; // Int
    img?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Int
    url?: string | null; // String
  }
  ProductUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['ProductUpdateManyDataInput']; // ProductUpdateManyDataInput!
    where: NexusGenInputs['ProductScalarWhereInput']; // ProductScalarWhereInput!
  }
  ProductUpdateManyWithoutCategoriesInput: { // input type
    connect?: NexusGenInputs['ProductWhereUniqueInput'][] | null; // [ProductWhereUniqueInput!]
    create?: NexusGenInputs['ProductCreateWithoutCategoriesInput'][] | null; // [ProductCreateWithoutCategoriesInput!]
    delete?: NexusGenInputs['ProductWhereUniqueInput'][] | null; // [ProductWhereUniqueInput!]
    deleteMany?: NexusGenInputs['ProductScalarWhereInput'][] | null; // [ProductScalarWhereInput!]
    disconnect?: NexusGenInputs['ProductWhereUniqueInput'][] | null; // [ProductWhereUniqueInput!]
    set?: NexusGenInputs['ProductWhereUniqueInput'][] | null; // [ProductWhereUniqueInput!]
    update?: NexusGenInputs['ProductUpdateWithWhereUniqueWithoutCategoriesInput'][] | null; // [ProductUpdateWithWhereUniqueWithoutCategoriesInput!]
    updateMany?: NexusGenInputs['ProductUpdateManyWithWhereNestedInput'][] | null; // [ProductUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['ProductUpsertWithWhereUniqueWithoutCategoriesInput'][] | null; // [ProductUpsertWithWhereUniqueWithoutCategoriesInput!]
  }
  ProductUpdateWithWhereUniqueWithoutCategoriesInput: { // input type
    data: NexusGenInputs['ProductUpdateWithoutCategoriesDataInput']; // ProductUpdateWithoutCategoriesDataInput!
    where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
  }
  ProductUpdateWithoutCategoriesDataInput: { // input type
    description?: string | null; // String
    icon?: string | null; // String
    id?: number | null; // Int
    img?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Int
    url?: string | null; // String
  }
  ProductUpsertWithWhereUniqueWithoutCategoriesInput: { // input type
    create: NexusGenInputs['ProductCreateWithoutCategoriesInput']; // ProductCreateWithoutCategoriesInput!
    update: NexusGenInputs['ProductUpdateWithoutCategoriesDataInput']; // ProductUpdateWithoutCategoriesDataInput!
    where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    categories?: NexusGenInputs['CategoryFilter'] | null; // CategoryFilter
    description?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    icon?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    img?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    price?: NexusGenInputs['IntFilter'] | null; // IntFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ProductWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
    url?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Category: { // root type
    description?: string | null; // String
    icon: string; // String!
    id: number; // Int!
    img?: string | null; // String
    name: string; // String!
    parent?: number | null; // Int
    url: string; // String!
  }
  File: { // root type
    name: string; // String!
    status: string; // String!
    uid: string; // String!
    url: string; // String!
  }
  Mutation: {};
  Product: { // root type
    description?: string | null; // String
    icon: string; // String!
    id: number; // Int!
    img?: string | null; // String
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
  CategoryCreateInput: NexusGenInputs['CategoryCreateInput'];
  CategoryCreateManyWithoutProductsInput: NexusGenInputs['CategoryCreateManyWithoutProductsInput'];
  CategoryCreateWithoutProductsInput: NexusGenInputs['CategoryCreateWithoutProductsInput'];
  CategoryFilter: NexusGenInputs['CategoryFilter'];
  CategoryScalarWhereInput: NexusGenInputs['CategoryScalarWhereInput'];
  CategoryUpdateInput: NexusGenInputs['CategoryUpdateInput'];
  CategoryUpdateManyDataInput: NexusGenInputs['CategoryUpdateManyDataInput'];
  CategoryUpdateManyWithWhereNestedInput: NexusGenInputs['CategoryUpdateManyWithWhereNestedInput'];
  CategoryUpdateManyWithoutProductsInput: NexusGenInputs['CategoryUpdateManyWithoutProductsInput'];
  CategoryUpdateWithWhereUniqueWithoutProductsInput: NexusGenInputs['CategoryUpdateWithWhereUniqueWithoutProductsInput'];
  CategoryUpdateWithoutProductsDataInput: NexusGenInputs['CategoryUpdateWithoutProductsDataInput'];
  CategoryUpsertWithWhereUniqueWithoutProductsInput: NexusGenInputs['CategoryUpsertWithWhereUniqueWithoutProductsInput'];
  CategoryWhereInput: NexusGenInputs['CategoryWhereInput'];
  CategoryWhereUniqueInput: NexusGenInputs['CategoryWhereUniqueInput'];
  ImageCatCreateManyWithoutCategoryInput: NexusGenInputs['ImageCatCreateManyWithoutCategoryInput'];
  ImageCatCreateWithoutCategoryInput: NexusGenInputs['ImageCatCreateWithoutCategoryInput'];
  ImageCatFilter: NexusGenInputs['ImageCatFilter'];
  ImageCatScalarWhereInput: NexusGenInputs['ImageCatScalarWhereInput'];
  ImageCatUpdateManyDataInput: NexusGenInputs['ImageCatUpdateManyDataInput'];
  ImageCatUpdateManyWithWhereNestedInput: NexusGenInputs['ImageCatUpdateManyWithWhereNestedInput'];
  ImageCatUpdateManyWithoutCategoryInput: NexusGenInputs['ImageCatUpdateManyWithoutCategoryInput'];
  ImageCatUpdateWithWhereUniqueWithoutCategoryInput: NexusGenInputs['ImageCatUpdateWithWhereUniqueWithoutCategoryInput'];
  ImageCatUpdateWithoutCategoryDataInput: NexusGenInputs['ImageCatUpdateWithoutCategoryDataInput'];
  ImageCatUpsertWithWhereUniqueWithoutCategoryInput: NexusGenInputs['ImageCatUpsertWithWhereUniqueWithoutCategoryInput'];
  ImageCatWhereInput: NexusGenInputs['ImageCatWhereInput'];
  ImageCatWhereUniqueInput: NexusGenInputs['ImageCatWhereUniqueInput'];
  IntFilter: NexusGenInputs['IntFilter'];
  NullableIntFilter: NexusGenInputs['NullableIntFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  ProductCreateInput: NexusGenInputs['ProductCreateInput'];
  ProductCreateManyWithoutCategoriesInput: NexusGenInputs['ProductCreateManyWithoutCategoriesInput'];
  ProductCreateWithoutCategoriesInput: NexusGenInputs['ProductCreateWithoutCategoriesInput'];
  ProductFilter: NexusGenInputs['ProductFilter'];
  ProductScalarWhereInput: NexusGenInputs['ProductScalarWhereInput'];
  ProductUpdateInput: NexusGenInputs['ProductUpdateInput'];
  ProductUpdateManyDataInput: NexusGenInputs['ProductUpdateManyDataInput'];
  ProductUpdateManyWithWhereNestedInput: NexusGenInputs['ProductUpdateManyWithWhereNestedInput'];
  ProductUpdateManyWithoutCategoriesInput: NexusGenInputs['ProductUpdateManyWithoutCategoriesInput'];
  ProductUpdateWithWhereUniqueWithoutCategoriesInput: NexusGenInputs['ProductUpdateWithWhereUniqueWithoutCategoriesInput'];
  ProductUpdateWithoutCategoriesDataInput: NexusGenInputs['ProductUpdateWithoutCategoriesDataInput'];
  ProductUpsertWithWhereUniqueWithoutCategoriesInput: NexusGenInputs['ProductUpsertWithWhereUniqueWithoutCategoriesInput'];
  ProductWhereInput: NexusGenInputs['ProductWhereInput'];
  ProductWhereUniqueInput: NexusGenInputs['ProductWhereUniqueInput'];
  StringFilter: NexusGenInputs['StringFilter'];
}

export interface NexusGenFieldTypes {
  Category: { // field return type
    description: string | null; // String
    icon: string; // String!
    id: number; // Int!
    img: string | null; // String
    name: string; // String!
    parent: number | null; // Int
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    url: string; // String!
  }
  File: { // field return type
    name: string; // String!
    status: string; // String!
    uid: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    _createOneProduct: NexusGenRootTypes['Product']; // Product!
    _deleteOneProduct: NexusGenRootTypes['Product'] | null; // Product
    _updateOneProduct: NexusGenRootTypes['Product'] | null; // Product
    createOneCategory: NexusGenRootTypes['Category']; // Category!
    createOneProduct: NexusGenRootTypes['Product']; // Product!
    deleteOneCategory: NexusGenRootTypes['Category'] | null; // Category
    deleteOneProduct: NexusGenRootTypes['Product']; // Product!
    updateOneCategory: NexusGenRootTypes['Category'] | null; // Category
    updateOneProduct: NexusGenRootTypes['Product']; // Product!
  }
  Product: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    description: string | null; // String
    icon: string; // String!
    id: number; // Int!
    img: string | null; // String
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
    productsByNameAndCategoryIds: NexusGenRootTypes['Product'][]; // [Product!]!
  }
}

export interface NexusGenArgTypes {
  Category: {
    products: { // args
      after?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      before?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    _createOneProduct: { // args
      data: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
    }
    _deleteOneProduct: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    _updateOneProduct: { // args
      data: NexusGenInputs['ProductUpdateInput']; // ProductUpdateInput!
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    createOneCategory: { // args
      data: NexusGenInputs['CategoryCreateInput']; // CategoryCreateInput!
    }
    createOneProduct: { // args
      data: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
      files?: any[] | null; // [Upload!]
    }
    deleteOneCategory: { // args
      where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
    }
    deleteOneProduct: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    updateOneCategory: { // args
      data: NexusGenInputs['CategoryUpdateInput']; // CategoryUpdateInput!
      where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
    }
    updateOneProduct: { // args
      data: NexusGenInputs['ProductUpdateInput']; // ProductUpdateInput!
      files?: any[] | null; // [Upload!]
      payloadEditProduct?: string | null; // String
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
  }
  Product: {
    categories: { // args
      after?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      before?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    categories: { // args
      after?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      before?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
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
      after?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      before?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    productsByCategoryId: { // args
      category_id: number; // Int!
    }
    productsByNameAndCategoryId: { // args
      category_id?: number | null; // Int
      name: string; // String!
    }
    productsByNameAndCategoryIds: { // args
      category_ids?: number[] | null; // [Int!]
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Category" | "File" | "Mutation" | "Product" | "Query";

export type NexusGenInputNames = "CategoryCreateInput" | "CategoryCreateManyWithoutProductsInput" | "CategoryCreateWithoutProductsInput" | "CategoryFilter" | "CategoryScalarWhereInput" | "CategoryUpdateInput" | "CategoryUpdateManyDataInput" | "CategoryUpdateManyWithWhereNestedInput" | "CategoryUpdateManyWithoutProductsInput" | "CategoryUpdateWithWhereUniqueWithoutProductsInput" | "CategoryUpdateWithoutProductsDataInput" | "CategoryUpsertWithWhereUniqueWithoutProductsInput" | "CategoryWhereInput" | "CategoryWhereUniqueInput" | "ImageCatCreateManyWithoutCategoryInput" | "ImageCatCreateWithoutCategoryInput" | "ImageCatFilter" | "ImageCatScalarWhereInput" | "ImageCatUpdateManyDataInput" | "ImageCatUpdateManyWithWhereNestedInput" | "ImageCatUpdateManyWithoutCategoryInput" | "ImageCatUpdateWithWhereUniqueWithoutCategoryInput" | "ImageCatUpdateWithoutCategoryDataInput" | "ImageCatUpsertWithWhereUniqueWithoutCategoryInput" | "ImageCatWhereInput" | "ImageCatWhereUniqueInput" | "IntFilter" | "NullableIntFilter" | "NullableStringFilter" | "ProductCreateInput" | "ProductCreateManyWithoutCategoriesInput" | "ProductCreateWithoutCategoriesInput" | "ProductFilter" | "ProductScalarWhereInput" | "ProductUpdateInput" | "ProductUpdateManyDataInput" | "ProductUpdateManyWithWhereNestedInput" | "ProductUpdateManyWithoutCategoriesInput" | "ProductUpdateWithWhereUniqueWithoutCategoriesInput" | "ProductUpdateWithoutCategoriesDataInput" | "ProductUpsertWithWhereUniqueWithoutCategoriesInput" | "ProductWhereInput" | "ProductWhereUniqueInput" | "StringFilter";

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