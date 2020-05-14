# Twitter feed

This app is a POC(proof of concept) for a twitter feed using the magic lab api for tweets

The app was developed with React and tested with jest and enzyme

## Architecture decisions:

I've used React because I have the most experience in and I think for this application fits well.

I considered to user Typescript so it fails faster if there is an issue with props but given the size of the application I didn't use it.

The tests are written in jest and enzyme because I already knew the syntax. There are some limitations in sandbox with mocking with jest so I've tried react library test but no luck so I just did tests for the parts of the app which didn't need mock.

The first call to get the tweets will return the latest 20 tweets created before the app start. I considered that this is a usual behaviour for social media.

## Future improvements

- test the api calls error path and happy path
- test the behaviour of Home component with setInterval
- if possible: (get the base url from the environment variables so can be different based on env)
- do not scroll user to top when fetch new data if user is at the top of the page(I consider this is not a nice ux)
- implement fetch older tweets when scroll down.
