### [inferno](https://infer-no.vercel.app) _> [🚀](https://infer-no.vercel.app)

#### ... visit my other sentinel listing application [luminous](https://luminous-hub.vercel.app)

#### Running Application Locally

##### First, clone this repo.
```bash

git clone https://github.com/kumar-rinku0/inferno.git

cd inferno

```

##### Now, you can run the development server:

```bash

npm install

npm run dev

```

##### Open [localhost:3000](http://localhost:3000) in your browser to see the result.


#### for clerk auth.

##### Create a ``` .env ``` or ``` .env.local ``` file to declare Environment Variable.

```bash

1 - NEXT_PUBLIC_CLERK_SIGN_IN_URL = "/login"

2 - NEXT_PUBLIC_CLERK_SIGN_UP_URL = "/register"

3 - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "create a key!"

4 - CLERK_SECRET_KEY = "create own secret!"

```

##### Don't forget to turn on RBAC System on, through clerk!
