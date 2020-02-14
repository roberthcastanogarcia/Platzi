window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP=function(info){return `
    // data to post
    var postData = {
      username: '${info.username}',
      challenge: '${info.challenge}',
      tests: [],
    };
  `};window.__DEFAULT_CODE_FRONTEND_TESTS_POST=function(){return `
    var postPromise = new Promise(function(resolve, reject) {
      console.log('posting...', postData);
      fetch('https://coderbyte.com/backend/requests/editor/submit_frontend_challenge_complete.php', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        resolve(response.json());
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });

    var result = await postPromise;
    console.log('CB POST RESULT', result);
  `};window.__DEFAULT_CODE_FRONTEND_TESTS={'React Button Toggle':function(info){return `
      /* RUNNING TESTS */
      (async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('button');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = button.innerHTML ? button.innerHTML.toLowerCase() : '';
          button.click();
          var stateClicked = button.innerHTML.toLowerCase();
          if ((stateClicked === 'on' || stateClicked === 'off') && stateClicked !== stateInit) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      })();
    `},'React Simple Counter':function(info){return `
      /* RUNNING TESTS */
      (async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('#mainButton');
        var area = root.querySelector('#mainArea');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(area.querySelector('span').innerHTML);
          button.click();
          var counterNext = parseInt(area.querySelector('span').innerHTML);
          if (counterNext === (counterInit + 1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      })();
    `},}