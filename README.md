# BucketUp

BucketUp is an customized budgeting project that makes budgeting a breeze. Our objective with this project was to make a budgeting application that makes it fast and intuitive to set up a budget for experienced budgeters, but also easy to get up and running for users who might be newer to the craft. 

Using the latest front-end frameworks, and a robust express backend we've automated the boring stuff while still leaving room for the user to create a fully customized budget!

Applied double secured user indentity validation to prevent personal financial information leakage. Allowing user to add, edit and share budgets to friends and families. Past statements can also be viewed and analyzed with visual charts.

## Key Takeaways
**[React](https://reactjs.org/)** - This project was a full-stack application built using React and Express. Getting used to managing state, and the built-in prop system React uses was a hurdle at first. A few days in, we started using Material-UI we were blown away by how fast we could proto-type and add new functionality, after that we started flying.

**[ThreeJS](https://threejs.org/)** - Was a library we were incredibly excited to use, integrating and setting up the various Canvas elements was difficult at the beginning, and managing render times wasn't always easy, but we loved the dimension this library added to our app!

**[TensorFlow](https://www.tensorflow.org/js/models)** - An open source library for numerical computation and large-scale machine learning. TensorFlow bundles together a slew of machine learning and deep learning (aka neural networking) models and algorithms and makes them useful by way of a common metaphor.

## Final Product

**Face recognition for user indentity verification**
![face_rec](https://github.com/MingfengLi0122/Buckets/blob/master/client/public/image/faceRec.png)

**Profile page for budgets and goals**
![profile](https://github.com/MingfengLi0122/Buckets/blob/master/client/public/image/profile.png)

**Budget page allows user to edit, add and delete budgets and expenses**
![budget](https://github.com/MingfengLi0122/Buckets/blob/master/client/public/image/budget.png)

**Message page allows user to accpet incoming budget template**
![message](https://github.com/MingfengLi0122/Buckets/blob/master/client/public/image/message.png)

**Analytics pages allows user to review all past statments**
![analytics](https://github.com/MingfengLi0122/Buckets/blob/master/client/public/image/analytics.png)

**Chat with customer support**
![onlineChat](https://github.com/MingfengLi0122/Buckets/blob/master/client/public/image/onlinechat.png)

**Managing Data** - Over the course of the project we spent a lot of time working on ERD's and deciding how we could query and display useful data. It took a few refactors, but we learned an important lesson about trying to do two things at once. By separating concerns, and being cautious with how we mutated data the backend did come together.

## Installation

To run the application locally fork, and clone the repository:

```bash
git clone <SSH_Key> bucketUp
```
CD into the client folder:
```bash
cd bucketUp/client
```
Install required packages, from within the client folder run:
```bash
npm install
```
Repeat this process for the server folder:
```bash
cd ../server
npm install
```

That's it! Once you've run these commands you can run the application!

## Scripts

To start the application run:
```bash
npm start
```

You can then navigate to localhost:3000 to view the client side app and localhost:3002 to view the server side api.

Reset schemas and seeds:
```bash
cd server
npm run reset
npm run seed
```

## Features
**[Chat](https://socket.io/)** - Implemented using socket.io.  
**[3D Elements](https://threejs.org/)** - Implemented using ThreeJS.  
**[Analytics](https://www.chartjs.org/)** - Charts are styled with CSS, generated with ChartJS.  
**[Biometric Login](https://www.tensorflow.org/)** - Implemented using Tensorflow. Although a good first taste of machine learning, the face-scan is currently just for show as we didn't have time to train the model. 

## Contributors
[Casey Wood](http://github.com/CaseyQWood)   
[Mingfeng Li](http://github.com/MingfengLi0122)   
[Brandon Rowlandson](http://github.com/Barndon99)

## License
[MIT](https://choosealicense.com/licenses/mit/) 