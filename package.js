Package.describe({
  name: 'praneybehl:react-color',
  version: '1.2.1',
  summary: 'React Color Pickers with 7 themes - Sketch Chrome Photoshop Material & more',
  git: 'https://github.com/praneybehl/meteor-react-color',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.use('react@0.1.13');
    api.use('cosmos:browserify@0.8.3', 'client');
    api.addFiles('package.browserify.js', 'client');
    api.addFiles('package.browserify.options.json', 'client');
    api.export('ColorPicker');
});

Npm.depends({
  "react-color": "1.2.1",
  "exposify": "0.5.0"
});
