# API CODE ALONG

Today we will be learning how to create API calls in React in order to get data from NYC Open Data into our programs.

## Creating API Calls in React

#### Step 1: Create a Developer Account

In order to access an API, we often need to create an account with the website and get an app token.

On NYC Open Data:

1. Sign up for an [Open Data Account](https://opendata.cityofnewyork.us/)
2. If you're not directed to the Developer Settings, click "edit profile" and then click "Developer Settings". [This link may also get you there](https://data.cityofnewyork.us/profile/edit/developer_settings).
3. Tap the "Create New App Token" button, fill in the required information about the app/dataset you're using, and then tap "Save".
4. You'll see your new App Token in the list below the button

#### Step 2: Make a Copy of the Template

Next, click "use this template" to get a copy of a react template. Note that you'll need to be logged in to GitHub to make that happen.

You can use any name you want for this project, but a good one for your students to use might be `my-first-react-project` - then students will know they've arrived at their own copy of this template when the title of the project is no longer `upperlinecode/react-project-template-for-google-cloudshell` but has instead been changed to `their-username/my-first-react-project`.

#### Step 3: Clone their Copy into Cloud Shell

It's important to make sure that you're all in the same part of your GCS environment, so you can have students type `cd ~` (or even just `cd`, though that's specific to Cloud Shell) to return to the main directory of their Cloud Shell environments.

Have each student find the URL for their project. It will be in a small window that appears when you press the green "clone" button. With that URL in their clipboard, they will want to clone it down:

```bash
git clone SOME-URL-HERE
```

The phrase `SOME-URL-HERE` will obviously be replaced with the URL for each student's project, so it might look something like `git clone https://github.com/sara123/my-first-react-project`.

#### Step 4: Install the App

You have to be IN the directory where the app is in order to run the install command. If the students have used `my-first-react-project` as their project name, the command will be this:

```bash
cd my-first-react-project
```

You'll know this has worked if you can run `pwd` (print working directory) and see that the current working directory matches your project name.

Then, you can install the app using the following command:

```bash
npm install
```

This will trigger the installation of all the files needed to run a React App - it usually takes about 1-2 minutes.

NOTE: If your install mentions vulnerabilities, you can usually ignore them (even if they are described as "high"). If we need to troubleshoot them, we'll do it in step 5 below.

#### Step 5: Run the App

Finally, you need to host your app by running the following command:

```bash
npm start
```

This should take another minute to start up, but you'll know it's ready when you see a message detailing which port the app is hosted on. From here you can preview the app at that port using Cloud Shell's preview button. You should see some placeholder code when the app preview starts.

NOTE: If your app failed to start up for some reason, and there were vulnerabilities listed in step 4, you can try updating the installation file with the command `npm audit fix` - if the app started up in spite of its vulnerabilities, ignore them for now.

#### Step 6: Mess with the App

Open directory that contains your React project in your code editor. Find the App.js file in the "src" directory. Delete the code inside of the div with the class name "App."

Here's what that code looks like when you first open it:

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Try adding some HTML to get "Hello World" to appear on the web page instead! Here's what the `App()` function might look like after you make those changes:

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}
```
