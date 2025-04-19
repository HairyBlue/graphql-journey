import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  uuid: { input: string; output: string; }
};

export enum Gender {
  F = 'F',
  M = 'M'
}

export type PublicUser = {
  readonly __typename?: 'PublicUser';
  readonly gender: Gender;
  readonly name: Scalars['String']['output'];
  readonly profile?: Maybe<Scalars['String']['output']>;
  readonly uuid: Scalars['uuid']['output'];
};

export type QueryRoot = {
  readonly __typename?: 'QueryRoot';
  readonly testimonial: ReadonlyArray<Testimonial>;
  readonly user: ReadonlyArray<PublicUser>;
  readonly users: ReadonlyArray<PublicUser>;
};


export type QueryRootUserArgs = {
  where: SearchUserInput;
};

export type SearchUserInput = {
  readonly uuid?: InputMaybe<UuidFilter>;
};

export type Testimonial = {
  readonly __typename?: 'Testimonial';
  readonly testimonial: Scalars['String']['output'];
  readonly uuid: Scalars['uuid']['output'];
};

export type User = {
  readonly __typename?: 'User';
  readonly gender: Gender;
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly profile?: Maybe<Scalars['String']['output']>;
  readonly uuid: Scalars['uuid']['output'];
};

export type UuidFilter = {
  readonly _eq?: InputMaybe<Scalars['uuid']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']['input']>>;
  readonly _neq?: InputMaybe<Scalars['uuid']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Gender: Gender;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PublicUser: ResolverTypeWrapper<PublicUser>;
  QueryRoot: ResolverTypeWrapper<{}>;
  SearchUserInput: SearchUserInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Testimonial: ResolverTypeWrapper<Testimonial>;
  User: ResolverTypeWrapper<User>;
  UuidFilter: UuidFilter;
  uuid: ResolverTypeWrapper<Scalars['uuid']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  PublicUser: PublicUser;
  QueryRoot: {};
  SearchUserInput: SearchUserInput;
  String: Scalars['String']['output'];
  Testimonial: Testimonial;
  User: User;
  UuidFilter: UuidFilter;
  uuid: Scalars['uuid']['output'];
};

export type PublicUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicUser'] = ResolversParentTypes['PublicUser']> = {
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryRootResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryRoot'] = ResolversParentTypes['QueryRoot']> = {
  testimonial?: Resolver<ReadonlyArray<ResolversTypes['Testimonial']>, ParentType, ContextType>;
  user?: Resolver<ReadonlyArray<ResolversTypes['PublicUser']>, ParentType, ContextType, RequireFields<QueryRootUserArgs, 'where'>>;
  users?: Resolver<ReadonlyArray<ResolversTypes['PublicUser']>, ParentType, ContextType>;
};

export type TestimonialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = {
  testimonial?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  PublicUser?: PublicUserResolvers<ContextType>;
  QueryRoot?: QueryRootResolvers<ContextType>;
  Testimonial?: TestimonialResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

