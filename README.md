# Github User Search Client
### About
- Simple user search web application
- Built with React, Redux, Bootstrap, Jest, and React Testing Library 
- Authenticated via GitHub Personal Access Token  

### Get Started
- `npm install`
- Create a `.env` file at root of project with the following key-value pair:
```text
REACT_APP_PAT=<your-personal-access-token>
```

- `npm run start`

### E2E and Unit Tests
`npm run test`

### Notes
- Test API calls are not mocked currently, so be careful not to run too often. There is risk GitHub rate-limiting your API requests. With personal access token you are granted 5000 requests per hour.