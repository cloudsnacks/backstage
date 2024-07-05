# Setup

## Ad hoc commands

### Tools
[nvm](https://github.com/nvm-sh/nvm#install--update-script)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

exec $SHELL

nvm install --lts

nvm use --lts
```

[yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

```
npm install --global yarn
```

other: docker git

### Backstage

npx @backstage/create-app@latest

inputs:

app_name: backstage

cd backstage && yarn dev

open http://localhost:3000

### Database
https://backstage.io/docs/getting-started/config/database

yarn --cwd packages/backend add pg

### Auth

#### Github OAuth
https://backstage.io/docs/getting-started/config/authentication

I'll use Github for auth, I'd normally use Authelia, but I'm trying to keep this simple.

Since terraform doesn't support creating github apps, we'll head over to the UI.
https://github.com/settings/applications/new

App name: backstage dev

Homepage URL: http://localhost:3000
Authorization callback URL: http://localhost:7007/api/auth/github/handler/frame

Click generate secret

Save the client id and secret into the app-config.local.yaml

```app-config.local.yaml
auth:
  environment: development
  providers:
    github:
      development:
        clientId: xxxxxxxxx
        clientSecret: zzzzzzzzzzzzzzzzzzzzzzzzzzzz
        signIn:
          resolvers:
            - resolver: usernameMatchingUserEntityName
            - resolver: emailMatchingUserEntityProfileEmail
            - resolver: emailLocalPartMatchingUserEntityName
```

#### Github App Integration

create app

yarn backstage-cli create-github-app backstage

add github integration

```
integrations:
  github:
    - host: github.com
      apps:
        - $include: github-app-backstage-credentials.yaml```
```

**allow read and write**
https://backstage.io/docs/integrations/github/github-apps/#app-permissions
https://github.com/organizations/cloudsnacks/settings/apps/backstage-cloudsnacks/permissions

yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-github-org

### Customising

https://backstage.io/docs/getting-started/app-custom-theme


### Homepage

https://backstage.io/docs/getting-started/homepage

yarn --cwd packages/app add @backstage/plugin-home


### Plugins

https://backstage.io/docs/getting-started/configure-app-with-plugins

#### Kubernetes

https://backstage.io/docs/features/kubernetes/installation

yarn --cwd packages/app add @backstage/plugin-kubernetes

Add en


yarn --cwd packages/backend add @backstage/plugin-kubernetes-backend




#### Random

https://github.com/Parsifal-M/backstage-dev-quotes?tab=readme-ov-file#dev-quotes-homepage

yarn add --cwd packages/app @parsifal-m/plugin-dev-quotes-homepage
