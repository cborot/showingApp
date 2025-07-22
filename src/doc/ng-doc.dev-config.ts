import { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  docsPath: 'src/doc',
  outDir: 'src/doc/output',
  repoConfig: {
    url: 'https://github.com/cborot/showingApp/tree/main/src/doc',
    mainBranch: 'main',
    releaseBranch: 'release',
  },

  // Pour modifier l'en-tête des pages
  // guide: {
  //   headerTemplate: 'src/doc/template/header.html',
  // },
};

export default config;