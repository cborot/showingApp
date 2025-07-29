import { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  docsPath: 'src/doc',
  outDir: 'src/doc/output',
  repoConfig: {
    url: 'https://github.com/cborot/showingApp/',
    mainBranch: 'main',
    releaseBranch: 'release',
  },
  routePrefix: 'docs',
  // Pour modifier l'en-tête des pages
  // guide: {
  //   headerTemplate: 'src/doc/template/header.html',
  // },
};

export default config;