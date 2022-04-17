import { withLoading } from '../../hocs/with-loading.hoc'

import { TagComponent } from './tag.component'
import { ITagProps, ITagSkeletonProps } from './tag.interface'
import { TagSkeleton } from './tag.skeleton'

export const Tag = withLoading<ITagProps, ITagSkeletonProps>(
  TagSkeleton,
  TagComponent
)

export { Tags } from './tag.style'

export { TagInputComponent as TagInput } from './tag-input.component'
