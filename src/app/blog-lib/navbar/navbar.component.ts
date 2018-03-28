import { Component, Input, Output, EventEmitter } from '@angular/core';

export const
	NAV_HOME = 'home',
	NAV_LIST = 'list',
	NAV_CREATE = 'create',
	NAV_CONTACT = 'contact';

@Component({
	selector: 'blog-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	@Input() title: string;
	@Input() active: string;
	@Output() onNavigate: EventEmitter<string>;

	constructor() {
		this.title = "Default Title...";
		this.onNavigate = new EventEmitter();
	}

	navigate(path: string) {
		this.onNavigate.emit(path);
		this.active = path;
	}

	isActive(path: string) {
		return this.active === path;
	}

}
