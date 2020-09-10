import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TrainItemComponent } from './train-item.component'

describe('TrainItemComponent', () => {
	let component: TrainItemComponent
	let fixture: ComponentFixture<TrainItemComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TrainItemComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(TrainItemComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
