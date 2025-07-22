import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API References',
	scopes: [{
    // Name of the library
    name: 'my-lib',
    // Prefered route for the current scope
    route: 'my-lib',
    // The path to the source code relative to the root folder of the project
    include: 'src/app/*.ts',
  }],
};

export default Api;
