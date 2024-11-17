import { Route } from '@angular/router'
import { InlineFormComponent } from './inline-form/inline-form.component'
import { MultipleSearchComponent } from './multiple-search/multiple-search.component'
import { ImageGalleryComponent } from './image-gallery/image-gallery.component'
import { SplitComponent } from './split/split.component'

export const HEROES_ROUTES: Route[] = [
  {
    path: 'inline-form',
    component: InlineFormComponent
  },
  {
    path: 'multiple-search',
    component: MultipleSearchComponent
  },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent
  },
  {
    path: 'split',
    component: SplitComponent
  },
]
