# API CODE ALONG

Today we will be learning how to create API calls in React in order to get data from NYC Open Data into our programs.

## Creating API Calls in React

#### Step 1: Create a Developer Account

In order to access an API, we often need to create an account with the website and get an app token.

**On NYC Open Data**:

1. Sign up for an [Open Data Account](https://opendata.cityofnewyork.us/)
2. If you're not directed to the Developer Settings, click "edit profile" and then click "Developer Settings". [This link may also get you there](https://data.cityofnewyork.us/profile/edit/developer_settings).
3. Tap the "Create New App Token" button, fill in the required information about the app/dataset you're using, and then tap "Save".
4. You'll see your new App Token in the list below the button

#### Step 2: Getting an Endpoint

**GOAL**: We are going to build a website that gives information about the status of Taxi Drivers application for licenses 🚕

1. [Open the dataset on NYC Open Data](https://data.cityofnewyork.us/Transportation/TLC-New-Driver-Application-Status/dpec-ucu7)
2. Click API and copy the URL. Type a `?` at the end of the URL
3. Append the variable `$$app_token` to the endpoint along with our App Token in order to make the request. It might look something like:

`https://data.cityofnewyork.us/resource/dpec-ucu7.json?$$app_token=2y6eroqasasdasd5UDtsqbdRlo8SOA9rt`

4. Open in a new tab to make sure it works!
5. After your app_token type a &
6. You can then add the key and the value you want to filter for like:
   https://data.cityofnewyork.us/resource/dpec-ucu7.json?$$app_token=2y6eroq5UDtsqbdRlo8SOA9rt&status=Incomplete

7. You can chain as many &’s together as you want to filter for!

#### Step 3: Filtering Our Data

Suppose we only want data for applications that have a status of Incomplete

1. After your app_token type a `&`
2. You can then add the key and the value you want to filter for like:

`…REST_OF_API_REQUEST_?$$app_token=2y6eroq5UDtsqbdRlo8SOA9rt&status=Incomplete`

3. You can chain as many `&`’s together as you want to filter for!

#### Step 4: Getting Data Into Our app

API calls are typically done in the `componentDidMount` method of a component because the timing of the API request should be so the response of the request can be displayed in the component on the page:

```javascript
componentDidMount = () => {
  fetch(“YOUR API URL”)
  // convert response to JSON
  .then(response => response.json())
  .then(data => {
  // code to execute once data is defined
  // Often you just want to save in state
     this.setState({ data: data });
  })
  .catch(e => {
    alert(e);
  })
}
```

We can then render this content on the page, put it in a Victory component, run calculations, and whatever else you want to do with your data!

Let's say I just wanted to render all of the applications on the page. We can map over the data insider our render.

```javascript
{
  this.state.data.map((application) => (
    <li>
      {application.app_no}: {application.other_requirements}
    </li>
  ));
}
```
