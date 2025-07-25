// @ts-nocheck
import {Routes} from '@angular/router';

export const NG_DOC_ROUTING: Routes = [
	
	{
		path: 'api',
		title: `API References`,
		loadChildren: () => import('./api/page'),
	},
	
	{
		path: 'api/classes/api-doc/AppComponent',
		title: `AppComponent`,
		loadChildren: () => import('./api/api/classes/api-doc/AppComponent/page'),
	},
	
	{
		path: 'api/variables/api-doc/appConfig',
		title: `appConfig`,
		loadChildren: () => import('./api/api/variables/api-doc/appConfig/page'),
	},
	
	{
		path: 'api/variables/api-doc/routes',
		title: `routes`,
		loadChildren: () => import('./api/api/variables/api-doc/routes/page'),
	},
	
	{
		path: 'configuration',
		title: `Configuration`,
		loadChildren: () => import('./guides/configuration/page'),
	},
	
	{
		path: 'installation',
		title: `Installation`,
		loadChildren: () => import('./guides/installation/page'),
	},
];
