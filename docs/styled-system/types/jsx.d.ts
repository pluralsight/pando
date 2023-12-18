/* eslint-disable */
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ElementRef,
  Ref,
} from 'react'
import type {
  RecipeDefinition,
  RecipeSelection,
  RecipeVariantRecord,
} from './recipe'
import type {
  Assign,
  DistributiveOmit,
  DistributiveUnion,
  JsxHTMLProps,
  JsxStyleProps,
  Pretty,
} from './system-types'

interface Dict {
  [k: string]: unknown
}

export type ComponentProps<T extends ElementType> = DistributiveOmit<
  ComponentPropsWithoutRef<T>,
  'ref'
> & {
  ref?: Ref<ElementRef<T>>
}

export interface PandoComponent<T extends ElementType, P extends Dict = {}> {
  (
    props: JsxHTMLProps<ComponentProps<T>, Assign<JsxStyleProps, P>>,
  ): JSX.Element
  displayName?: string
}

interface RecipeFn {
  __type: any
}

interface JsxFactoryOptions<TProps extends Dict> {
  dataAttr?: boolean
  defaultProps?: TProps
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean
}

export type JsxRecipeProps<
  T extends ElementType,
  P extends Dict,
> = JsxHTMLProps<ComponentProps<T>, P>

export type JsxElement<
  T extends ElementType,
  P extends Dict,
> = T extends PandoComponent<infer A, infer B>
  ? PandoComponent<A, Pretty<DistributiveUnion<P, B>>>
  : PandoComponent<T, P>

export interface JsxFactory {
  <T extends ElementType>(component: T): PandoComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(
    component: T,
    recipe: RecipeDefinition<P>,
    options?: JsxFactoryOptions<JsxRecipeProps<T, RecipeSelection<P>>>,
  ): JsxElement<T, RecipeSelection<P>>
  <T extends ElementType, P extends RecipeFn>(
    component: T,
    recipeFn: P,
    options?: JsxFactoryOptions<JsxRecipeProps<T, P['__type']>>,
  ): JsxElement<T, P['__type']>
}

export type JsxElements = {
  [K in keyof JSX.IntrinsicElements]: PandoComponent<K, {}>
}

export type Pando = JsxFactory & JsxElements

export type HTMLPandoProps<T extends ElementType> = JsxHTMLProps<
  ComponentProps<T>,
  JsxStyleProps
>

export type PandoVariantProps<T extends PandoComponent<any, any>> =
  T extends PandoComponent<any, infer Props> ? Props : never
