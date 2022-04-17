import { FC } from 'react'

type IWithLoadingProps<IComponentProps, ISkeletonProps> =
  | ({
      loading?: false
    } & IComponentProps)
  | ({
      loading: true
    } & ISkeletonProps)

/**
 * Use this function to create a component that manage the skeleton for you
 * @return a new component with "loading" prop
 *
 * @example
 * ```jsx
 * // some-component.component.jsx
 * export const SomeComponent = withLoading<SomeComponentProps>(SomeComponentSkeleton, () => {
 *    ... component declaration
 * })
 *
 * // other-component.component.jsx
 * <SomeComponent loading />
 * <SomeComponent {...props} />
 * ```
 */
export function withLoading<C, S>(
  Skeleton: FC<S>,
  Component: FC<C>
): FC<IWithLoadingProps<C, S>> {
  const WithLoading: FC<IWithLoadingProps<C, S>> = (props) => {
    return props.loading ? <Skeleton {...props} /> : <Component {...props} />
  }

  return WithLoading
}
