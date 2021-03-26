import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    // Inicio Cotrole one component have multiple templates
    {
      path: 'list1',
      component: ListComponent,
    },
    {
      path: 'list2',
      component: ListComponent,
    },
    {
      path: 'list3',
      component: ListComponent,
    },
    {
      path: 'list4',
      component: ListComponent,
    },
    {
      path: 'list5',
      component: ListComponent,
    },
    {
      path: 'list6',
      component: ListComponent,
    },
    {
      path: 'list7',
      component: ListComponent,
    },
    {
      path: 'list8',
      component: ListComponent,
    },
    {
      path: 'list9',
      component: ListComponent,
    },
    // Fim Controle
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    {
      path: 'accordion',
      component: AccordionComponent,
    },

    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
