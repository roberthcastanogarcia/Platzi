window.__DEFAULT_CODE_FRONTEND_BASE={'React':function(code){return{files:{"package.json":{content:{dependencies:{"react":"^16.6.3","react-dom":"^16.12.0","react-redux":"^7.0.2","redux":"^4.0.1","prop-types":"^15.7.2"}}},"index.js":{content:code},"index.html":{content:'<div id="root"></div>'}},}},'Vue':function(code){return{files:{"package.json":{content:{"dependencies":{"vue":"^2.5.22"},}},"src/App.vue":{content:code},"src/main.js":{content:`import Vue from "vue";
            import App from "./App.vue";
            Vue.config.productionTip = false;
            new Vue({
              render: h => h(App)
            }).$mount("#app");
          `},"public/index.html":{content:`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <div id="app"></div>
              </body>
            </html>`}}}},'AngularJS':function(code){return{files:{"package.json":{content:{"dependencies":{"angular":"1.6.10"},}},"index.js":{content:code},"index.html":{content:`
            <html>
            <body>
              <div id="root" ng-app="myApp" ng-controller="myController as myCtrl">
                <div>{{ myCtrl.title }}</div>
                <div>{{ myCtrl.buttonClickCount }}</div>
                <button ng-click="myCtrl.increaseCount()">Increase</button>
              </div>
            </body>
            </html>
          `}}}},'Angular':function(code){return{files:{"package.json":{content:{"dependencies":{"@angular/animations":"8.2.14","@angular/common":"8.2.14","@angular/compiler":"8.2.14","@angular/core":"8.2.14","@angular/forms":"8.2.14","@angular/http":"6.0.9","@angular/platform-browser":"8.2.14","@angular/platform-browser-dynamic":"8.2.14","@angular/router":"8.2.14","core-js":"3.6.0","rxjs":"6.5.3","zone.js":"0.10.2"},"devDependencies":{"@angular/cli":"1.6.6","@angular/compiler-cli":"^5.2.0","@angular/language-service":"^5.2.0","@types/core-js":"0.9.46","@types/jasmine":"~2.8.3","@types/jasminewd2":"~2.0.2","@types/node":"~6.0.60","codelyzer":"^4.0.1","jasmine-core":"~2.8.0","jasmine-spec-reporter":"~4.2.1","protractor":"~5.1.2","ts-node":"~4.1.0","tslint":"~5.9.1","typescript":"~2.5.3"},}},"config.js":{content:`var angularVersion;
            if (window.AngularVersionForThisPlunker === 'latest') {
              angularVersion = ''; //picks up latest
            }
            else {
              angularVersion = '@' + window.AngularVersionForThisPlunker;
            }
            System.config({
              //use typescript for compilation
              transpiler: 'typescript',
              //typescript compiler options
              typescriptOptions: {
                emitDecoratorMetadata: true
              },
              paths: {
                'npm:': 'https://unpkg.com/'
              },
              //map tells the System loader where to look for things
              map: {
                'app': './src',
                '@angular/core': 'npm:@angular/core' + angularVersion + '/bundles/core.umd.js',
                '@angular/common': 'npm:@angular/common' + angularVersion + '/bundles/common.umd.js',
                '@angular/common/http': 'npm:@angular/common' + angularVersion + '/bundles/common-http.umd.js',
                '@angular/compiler': 'npm:@angular/compiler' + angularVersion + '/bundles/compiler.umd.js',
                '@angular/platform-browser': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic.umd.js',
                '@angular/http': 'npm:@angular/http' + angularVersion + '/bundles/http.umd.js',
                '@angular/router': 'npm:@angular/router' + angularVersion + '/bundles/router.umd.js',
                '@angular/forms': 'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.js',
                '@angular/animations': 'npm:@angular/animations' + angularVersion + '/bundles/animations.umd.js',
                '@angular/platform-browser/animations': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-animations.umd.js',
                '@angular/animations/browser': 'npm:@angular/animations' + angularVersion + '/bundles/animations-browser.umd.js',
                '@angular/core/testing': 'npm:@angular/core' + angularVersion + '/bundles/core-testing.umd.js',
                '@angular/common/testing': 'npm:@angular/common' + angularVersion + '/bundles/common-testing.umd.js',
                '@angular/common/http/testing': 'npm:@angular/common' + angularVersion + '/bundles/common-http-testing.umd.js',
                '@angular/compiler/testing': 'npm:@angular/compiler' + angularVersion + '/bundles/compiler-testing.umd.js',
                '@angular/platform-browser/testing': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-testing.umd.js',
                '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic-testing.umd.js',
                '@angular/http/testing': 'npm:@angular/http' + angularVersion + '/bundles/http-testing.umd.js',
                '@angular/router/testing': 'npm:@angular/router' + angularVersion + '/bundles/router-testing.umd.js',
                'tslib': 'npm:tslib@1.6.1',
                'rxjs': 'npm:rxjs',
                'typescript': 'npm:typescript@2.2.1/lib/typescript.js'
              },
              //packages defines our app package
              packages: {
                app: {
                  main: './main.ts',
                  defaultExtension: 'ts'
                },
                rxjs: {
                  defaultExtension: 'js'
                }
              }
            });`},"src/main.ts":{content:`import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
                    import { AppModule } from './app.module';
                    platformBrowserDynamic().bootstrapModule(AppModule)`},"src/polyfills.ts":{content:`import "core-js/proposals/reflect-metadata";
                    import "zone.js/dist/zone";`},"src/app.module.ts":{content:`import { BrowserModule } from '@angular/platform-browser';
                    import { NgModule } from '@angular/core';
                    import { ReactiveFormsModule } from '@angular/forms';
                    import { FormsModule } from '@angular/forms';
                    import { AppComponent } from './app.component';
                    import { MainAppComponent } from './app-area.component';
                    @NgModule({
                      declarations: [AppComponent, MainAppComponent],
                      imports: [BrowserModule, ReactiveFormsModule, FormsModule],
                      providers: [],
                      bootstrap: [AppComponent]
                    })
                    export class AppModule { }`},"src/app.component.ts":{content:`import { Component, enableProdMode } from '@angular/core';
                  enableProdMode();
                  @Component({
                    selector: 'app-root',
                    template: '' + 
                      '<app-area></app-area>'
                  })
                  export class AppComponent { }`},"src/app-area.component.ts":{content:code},"src/index.html":{content:`<html>
          <body>
            <app-root></app-root>
          </body>
          </html>`}}}},};window.__DEFAULT_CODE_FRONTEND_MAIN={'React List':function(){return `import React from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  return (
    <h2>code goes here</h2>
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('root')
);`},'React Simple Counter':function(){return `import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>0</span></p>
        <button id="mainButton">Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);`},'React Phone Book':function(){return `import React from 'react';
import ReactDOM from 'react-dom';

function PhoneBookForm(props) {
  return (<p>form goes here</p>);
}

function InformationTable(props) {
  return (<p>table of information goes here</p>);
}

function Application(props) {
  return (
    <section>
      <PhoneBookForm />
      <InformationTable />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);`},'React Button Toggle':function(){return `import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // todo
  }

  render() {
    return (
      <button>ON</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);`},'React Tic Tac Toe':function(){return `import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square" style={{ 'width':'40px', 'height':'40px' }}>
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <button>Reset</button>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);`},'AngularJS Simple Counter':function(){return `import angular from "angular";

angular.module("myApp", []).controller("myController", function() {

  // change below to get counter working
  let vm = this;
  vm.title = "no title";
  vm.buttonClickCount = 'button count';
  vm.increaseCount = null;

});

angular.bootstrap(document.getElementById("root"), ["myApp"]);`},'Angular Reactive Form':function(){return `// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: '' + 
    'form goes here...' +
    '<pre>{{ form.value | json }}</pre>',
  styles: []
})

export class MainAppComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}`},'Angular Generate Username':function(){return `// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '' +
    '<div>' +
      '<input type="text" value="firstname">' +
      '<input type="text" value="lastname">' +
      '<span>generated username...</span>' +
    '</div>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code goes here
}`},'Angular Button Toggle':function(){return `// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '<button>ON</button>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code goes here
}`},'Angular Phone Book':function(){return `// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '' +
    '<div>phone book form goes here</div>' +
    '<div>table of information goes here</div>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code for phone book goes here...
}`},'Angular Tic Tac Toe':function(){return `// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: \`
    <div class="status">status</div>
    <button>Reset</button>
    <section>
      <div class="row" *ngFor="let row of [1, 2, 3]">
        <button *ngFor="let col of [1, 2, 3]" class="square" style="width:40px;height:40px;"></button>
      </div>
    </section>
  \`,
  styles: []
})

export class MainAppComponent implements OnInit {
  // code for tic tac toe game goes here...
}`},'Vue List Rendering':function(){return `<template>
  <div id="app">
    Your list should render here.
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
};
</script>`},'Vue Button Toggle':function(){return `<template>
  <div id="app">
    <button>ON</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
};
</script>`},'Vue Phone Book':function(){return `<template>
  <div id="app">
    <div>phone book form goes here</div>
    <div>table of information goes here</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
};
</script>`},'Vue Tic Tac Toe':function(){return `<template>
  <div id="app">
    <div class="status">{{ status }}</div>
    <button>Reset</button>
    <template v-for="row in 3">
      <div class="row" :key="row">
        <button v-for="button in 3" class="square" style="width:40px;height:40px;"></button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      status: 'Next player: X'
    };
  }
};
</script>`},'Vue Generate Username':function(){return `<template>
  <div id="app">
    <input type="text" value="firstname">
    <input type="text" value="lastname">
    <span>generated username...</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
};
</script>`},'Vue Simple Counter':function(){return `<template>
  <div id="app">
    <p>button count: 0</p>
    <button>Increase</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
};
</script>`},}