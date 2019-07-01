
# Baby Got Backend: To Server, Serverless or Headless CMS
- Start with a look at traditional on prem servers
- Talk about Cloud Hosting: DigitalOcean & AWS EC2
- Discuss serverless options: Amazon Lambda Functions, S3, API Gateway, etc
- Heroku: A simple deployment alternative for Node.js and Django
- Firebase and Firestore in Vue Application
- Contentful in Angular Application

## Find this presentation here: github.com/micleners/angular-contentful

I'm going to give a lot of resources and a lot of code examples. Help contribute to the flow of the talk by slowing me down as needed, asking questions where clarification is needed and sharing your knowledge and experience where applicable.

# Presentations & Tutorials

- In depth (nitty gritty) dive into Django Rest Framework: [Pyowa DRF Presentation](https://github.com/micleners/pyowa-drf-demo)
- Full Stack Web Development with Django and EmberJS: [Des Moines Web Geeks Presentation](https://github.com/micleners/DSM-Web-Geeks)
- More advanced models and APIs with Django: [Future Workshop!](https://github.com/micleners/django-workshop)
- This presentation: [Des Moines Web Geeks Presentation](https://github.com/micleners/angular-contentful)

## Traditional Backend: On Prem or Hosted Servers
<br><div>TBH heard they were not fun <span style="font-size:40px;"> 🤷‍♂️<span></div>
- Responsible for maintaining the solution and all its related processes
- Responsible for the ongoing costs of the server hardware, power consumption, and space
- Must employ people to manage on prem servers
- Can't upgrade to a bigger instance with a click/cli command

There are some advantages: having control over data, potentially being able to implement better security solutions (yet this is doubtful for most companies), governmental compliance. Here's an article that does a nice [compare and contrast](https://www.cleo.com/blog/knowledge-base-on-premise-vs-cloud)

## The Emergence of Cloud Hosting - Dedicated Servers

![alt text](static/hosted_solutions.png)

## Digital Ocean
- [APS.NET Core](https://www.godo.dev/tutorials/aspnet-core-mysql-ubuntu-16-04/)
- [Django](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04)
- [Node.js](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04)

### General Process on Digital Ocean:
- Purchase $5 droplet (server)
- SSH onto your server
- Get your application set up through git
- Set up DB appropriately
- Set up appropriate server runner (Gunicorn for Django, Ketsrel in APS.NET, PM2 for Node.js)
- Set up reverse proxy with Nginx to route domain to app
- Profit

## AWS EC2:
- [APS.NET Core](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/dotnet-core-tutorial.html)
- [Django](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-django.html)
- [Node.js](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html)

## Approach to Serverless
What is serverless anyhow. I borrowed this definition from [this Medium Article](https://hackernoon.com/what-is-serverless-architecture-what-are-its-pros-and-cons-cc4b804022e9):

*"Serverless is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. A serverless application runs in stateless compute containers that are event-triggered, ephemeral (may last for one invocation), and fully managed by the cloud provider. Pricing is based on the number of executions rather than pre-purchased compute capacity"*

### AWS Lambda
- [Django (pictured below)](https://blog.lawrencemcdaniel.com/serve-a-django-app-from-an-aws-lambda-function/)
- [ASP.NET Core](https://docs.aws.amazon.com/lambda/latest/dg/lambda-dotnet-coreclr-deployment-package.html)
- [Node.js with Express](https://dev.to/brightdevs/how-to-convert-an-express-app-to-aws-lambda--44gc)
- [Xilution Example or Serverless Node.js App](https://github.com/xilution/xilution-react-todomvc)
- [Another NodeJS (pictured below)](https://medium.com/the-node-js-collection/building-your-first-serverless-app-in-node-js-with-aws-lambda-s3-api-gateway-4d87e808d9cc)

## [Django AWS Serverless example](https://blog.lawrencemcdaniel.com/serve-a-django-app-from-an-aws-lambda-function/)
![alt text](static/django-serverless-aws3.png)

## [NodeJS Serverless example](https://medium.com/the-node-js-collection/building-your-first-serverless-app-in-node-js-with-aws-lambda-s3-api-gateway-4d87e808d9cc)
![alt text](static/aws_lambda_nodejs.jpeg)

## Heroku my Hero 🥰
Makes life so much easier. Instead of having to provision out resources and set up proxying, heroku takes a lot of the legwork out of the way. This is all even possible via the command line!

### Node.js Documentation on Heroku
[Heroku Tuturial for Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

#### Personal Quest
[Twilio Quest](https://github.com/micleners/twilioquest-sms) while I was working on applying for a software education position with Twilio on the Twilio Quest team. Used Node.js and deployed on Heroku

### Note: No sanctioned ASP.NET solution on Heroku

### Django on heroku
[Example for using Postgres with Django on Heroku](https://medium.com/@qazi/how-to-deploy-a-django-app-to-heroku-in-2018-the-easy-way-48a528d97f9c)
Deploying django applications onto heroku is similar to other applications:
- Place Procfile in root directory directing gunicorn be used for deploying
- Make sure you have a requirements.txt, Pipfile or similar file declaring packages to install
- Include heroku-django settings and commands to help aleviate difficulties around static deploy
- Use heroku CLI to push up to deploy.

Example of this can be found at the end of my [django workshop](https://github.com/micleners/django-workshop) & in commit log

## Firebase 🔥
Firebase offers a comprehensive development platform for making mobile and web apps. It is a cloud solution provided by google. It can be used with applications for authentication, analytics, storage, databases, and beyond. We'll look at Firestore.

### I started an app named [NomTime](https://github.com/micleners/nomtime) using these tutorials:
- [How to build an SPA using Vue.js, Vuex, Vuetify, and Firebase: use Vuex and access the API](https://www.freecodecamp.org/news/how-to-build-an-spa-using-vue-js-vuex-vuetify-and-firebase-use-vuex-and-access-the-api-f8036aa464ad/)
- [Working an application in Vue.js with TDD](https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b)
- [A Vuex Tutorial by Example - Learn Vue State Management](https://coursetro.com/posts/code/144/A-Vuex-Tutorial-by-Example---Learn-Vue-State-Management)

## Hooking up Firebase to Vue Application (similar in other frameworks):
- Install firebase npm package and load it in `main.js` in Vue project
- Set up db const in `main.js` to point towards `firebase.firestore()`
- Get all `recipes` in `MainView.vue` to display them in our list view
- Set up ability to create new `recipes` in subsuquent .vue files

### Additionally API Management:
- I created an action call to get data from the Edamam API service (see first tutorial above)
- I created a button that hotwires the name of the create new recipe to load in a query result and save it to the DB
- Why did I do this? I don't know.. I just wanted to show I could make a request to the Edamam API, load the data into my application and then route it thru to Firestor 😂🎉 Still need to work on how my UX will work

# Contentful: A Headless CMS
Beyond headless CMS, Contentful is the essential API-first content management infrastructure to create, manage and distribute content to any platform or device. 
[Easy start with GatsbyJS](https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/)

## Contentful and Angular
I've just begun to play around with this, but so far I'm loving Contentful. Here's what I've done:
- Used [this contenful tutorial]([https://www.contentful.com/developers/docs/javascript/tutorials/using-contentful-in-an-angular-project/]) to load up products in publicly available space
- Created my own space with events, users and locations models (similar to [Django Workshop](https://github.com/micleners/django-workshop) API I created. You can view API endpoints [hosted on heroku](https://radiant-brushlands-99143.herokuapp.com/api/) 😉
- Swapped out the tutorial API code with my own, updated the data models and attributes. Data loaded nicely
