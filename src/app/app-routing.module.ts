import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { TrainsComponent } from './trains/trains.component'
import { AuthGuard } from './auth.guard'
import { LoggedInComponent } from './logged-in/logged-in.component'
import { TrainEditComponent } from './trains/train-edit/train-edit.component'
import { SightsComponent } from './sights/sights.component'
import { SightEditComponent } from './sights/sight-edit/sight-edit.component'
import { AccommodationsComponent } from './accommodations/accommodations.component'
import { AccommodationEditComponent } from './accommodations/accommodation-edit/accommodation-edit.component'
import { NotFoundComponent } from './shared/not-found/not-found.component'

const routes: Routes = [
	{ path: 'login', pathMatch: 'full', component: LoginComponent },
	{
		path: '',
		component: LoggedInComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'trains' },
			{ path: 'trains', component: TrainsComponent, canActivate: [AuthGuard] },
			{
				path: 'trains/:id/edit',
				component: TrainEditComponent,
				canActivate: [AuthGuard],
			},
			{
				path: 'accommodations/:id',
				component: AccommodationsComponent,
				canActivate: [AuthGuard],
			},
			{
				path: 'accommodations/:trainId/:accommodationId/edit',
				component: AccommodationEditComponent,
				canActivate: [AuthGuard],
			},
			{
				path: 'sights/:id',
				component: SightsComponent,
				canActivate: [AuthGuard],
			},
			{
				path: 'sights/:trainId/:sightId/edit',
				component: SightEditComponent,
				canActivate: [AuthGuard],
			},
			{ path: '**', redirectTo: '404' },
			{ path: '404', component: NotFoundComponent },
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
