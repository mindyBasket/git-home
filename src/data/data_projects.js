var projectData = {

  	projects: [
  		{
        id: "robomatter_current",
  			imgCount: 2,
  			title: "[Ongoing] Educational Robotic Programming software",
  			shortSummary: "Class friendly, STEM-solution by programming your robot to life!",
  			tags: [
        "ReactJS",  
        "TypeScript",
        "Blockly",
        "Node.js",
        "NW.js",
        "Mobile Dev",
        "BLE",
        ],
        longSummaryData: {
          projectDescription: `
            Formed a team of 3 engineers to implement a tool for programming robots. 
            We operated using agile practices, and shared responsibilities, as well as strategizing to modularize.
            Wait, I say that in the bullet below!!! 
            Built a working prototype with key features in 2 weeks, and continued to rapidly produce minimally 
            viable product, successfully reaching a software with full features in a month.  
            It is architected and developed using React.js.
          `,
          roleHighlights: `
            <ul>
              <li>Built and designed UI and the main software structure in ReactJS</li>
              <li>Built reusable and flexible components used for UI interface, hardware connection</li>
              <li>Strategized modularizing tasks so that multiple engineer can build collaboratively to 
              delivery faster without quality loss.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Integrating Blockly and compiling it into C++</li>
              <li>Working around limited time, strategizing to complete feature faster without quality loss.</li>
              <li>Cross-platform compatibility for both mobile and desktop: iOS, Android, ChromeOS, MacOS and Windows</li>
              <li>Complex hardware communications: Bluetooth and USB</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData",
  		}
  		,
  		{
        id: "flipbook",
  			imgCount: 2,
  			title: "Flipbook with Lambda",
  			shortSummary: "Cloud based animation editor for creating low-cost format of scenamatic story telling",
  			tags: [
  				"ReactJS",
          "Django",
  				"RESTful framework",
          "Node.js",
          "AWS Lambda",
  				"Heroku"
        ],
        longSummaryData: {
          projectDescription: `
          Inspired by single-page task managing apps such as Trello, this app creates a story telling, animated medium 
          called "flipbook", which is half-way between a storyboard, and a movie. 
          The idea is to create a scenamatic, interactive story using much lighter resource. 
          <br/><br/>
          An unlimited number of video processing instances fire on cloud, using AWS Lambda.
          Currently this app is available with invite only, but a demo is available to public. 
          New features will be continuously added.
          `,
          roleHighlights: `
            <ul>
              <li>Architected the front-end using <strong>ReactJS</strong>, and back-end using <strong>Django</strong>,
               while teaching myself ReactJS as I go.</li>
              <li>Used <strong>RESTful APIs</strong> to create a smooth single page app experience.</li>
              <li>Created an <strong>alternative video UI</strong> for viewing an instance of a "Flipbook".</li>
              <li>Built and setup an API-triggered Lambda function to do <strong>video processing on cloud</strong>.</li>
              <li>Implemented a <strong>demo system</strong> that creates a
              disposable instance of a "Flipbook" for an easy demo.</li>
              <li>Used Node.js and Heroku to setup <strong>deployment</strong>.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Integrating ReactJS into the Django RESTful framework.</li>
              <li>Serving and handling a large number of images.</li>
              <li>Working with limitation and restrictions on Lambda in order to 
              fit a video proccessing module on cloud.</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData"
  		}
      ,
  		{
        id: "vex_portal",
  			imgCount: 4,
  			title: "VEX Education Portal",
  			shortSummary: "STEM course content delivery platform",
  			tags: [
        "Javascript",
        "Node.js",
        "PHP",
        "MySQL",
        "DevOps",
        "Graphics",
        ],
        longSummaryData: {
          projectDescription: `
          Joined in a team of 3 to build a solution for deliverying STEM curriculum content that is
          store in a 3rd party service. The challenge was that the service compiled all contents 
          into a format that does not match our client's need. It was not very accessible, and had an 
          incompatible distribution method. 
          </br>
          </br>
          We built a custom content delivery environment using PHP, MySQL, Javascript,
          and shell scripts to make it possible to deploy, maintain and scale.
          `,
          roleHighlights: `
            <ul>
              <li>Collaborated to build <strong>content delivery site</strong> that can deploy multiple different versions
              and flavors using single code base.</li>
              <li>Helped building the <strong>deployment pipeline</strong> to schedule and automate using Octopus Deploy.</li>
              <li>Implemented scripts to <strong>precompile and throttle</strong> in order to manage resources and reduce traffic 
               as the amount of contents to deploy increased rapidly.</li>
              <li>Built a <strong>login system</strong> for educators to access the portal.</li>
              <li>Created <strong>robot sprite</strong> assets used to explain robotics concepts</li>
              <li>Brainstormed and created <strong>STEM Lab</strong> (curriculum content) activities.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Deploying heavy archive that is <strong>rapidly expanding</strong> and changing  
              (1 GB to 5 GB in a span of few weeks)</li>
              <li>Adding and exposing <strong>custom behaviors</strong> such as in a framework not intended to be customized.</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData"
  		}
      ,
      {
        id:"mindybox",
        imgCount: 1,
  			title: "MindyBox v1",
  			shortSummary: "Personal portfolio site, and an opportunity to explore Vue.js",
  			tags: [
          "Vue.js",
          "Sass",
        ],
        longSummaryData: {
          projectDescription: `
          A lightweight static website to showcase my skill. A project that also served in helping me learn Vue.js
          `,
          roleHighlights: `
            <ul>
              <li>Built a responsive static website from ground up.</li>
            </ul>
          `
        },
        longSummary: `
 
  			`
  		}
      ,
      {
  			img: "",
  			title: "Sandbloqs",
  			shortSummary: "Visual programming language used to teach object oriented programming concepts",
  			tags: [
          "Javascript",
          "Blockly",
  				"Phaser",
          "NW.js",
          "SemanticUI",
        ],
        longSummaryData: {
          projectDescription: `
            Sandbloqs is a proof-of-concept for a code editor that teaches programming concepts 
            by creating games. The app is built using a library called Blockly, 
            which is popular for creating educational tool teaching programming concepts through a visual, 
            block-based language.
            <br/>
            <br/>
            So what sets Sandbloqs apart from other Blockly projects? It is the ability to 
            do <strong>object-oriented programming</strong>!
          `,
          roleHighlights: `
            <ul>
              <li>Contributed adding various types of custom "Object" blocks that render game objects.
              They were built to have its own constructor (to spawn sprites), methods and properties to demonstrate 
              <strong>object oriented programming</strong>.</li>
              <li>Designed and Implemented <strong>UI</strong> to have a themed appearence.</li>
              <li>Create example programs used for the curriculum, including a fully playable shooting game.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Adding object oriented programming which Blockly is not built to support.</li>
            </ul>
          `
        },
  			longSummary: "CONTENT MOVED TO longSummaryData",
  		}
  		,
  		{
        id: "cs2n",
  			imgCount: 0,
  			title: "CS2N",
  			shortSummary: "Worked on the second iteration of the badge reward system, both back end and front end",
  			tags: [
  				"Ruby on Rails",
          "jQuery",
          "MySQL",
          "Haml",
          "Sass",
          "Full Stack",
          "Graphics"
        ],
        longSummaryData: {
          projectDescription: `
            CS2N is a learning portal for students and educators pursuing computer science and robotics discipline.
            I entered the project to overhaul the existing badge/achivement system to scaffold it in order to
            to game-ify learning father, allowing more incentives and motivations for students to 
            complete educational activities.   
          `,
          roleHighlights: `
            <ul>
              <li>Architected a system to add <strong>tiers</strong> to the badges/achievements, 
              where higher-tier badge can be unlocked by a specified combination of one or more lower-badges.</li>
              <li>Built <strong>interface for admins</strong> to create and edit new triggers for the new types of badges.</li>
              <li>Built <strong>user profile</strong> interface for users to access, track, and share their 
              badges and their progresses.</li>
              <li>Created the new family of <strong>badge graphics</strong>.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li><strong>Increased complexity</strong> of badge trigger introduced other complications, 
              such as nested parentheses in the trigger expressions. 
              I implemented a new <strong>recursive parser</strong> to deal with the new expressions.</li>
            </ul>
          `
        },
  			longSummary: "CONTENT MOVED TO longSummaryData"
  		}
  		,
  		{
        id: "chat_py",
  			imgCount: 5,
  			title: "Chat-Py",
        shortSummary: `
          Chat client with a drawing tool that let you sequence 
          few frames send a hand-drawn animated message
        `,
  			tags: [
          "Python",
          "Tornado",
          "SocketIO",
          "PIL"
        ],
        longSummaryData: {
          projectDescription: `
            I attended a class at CMU as a visiting student to fortify my software developement practices.
            Juggling work and class work, I completed the course with a very successful result. 
            <br/>
            <br/>
            The term project is a chat client written in Python.  There is no server for this chat client, however, as proof of concept, each individual machine
            acts as its own server.
          `,
          links: {
            youtube: 'https://youtu.be/sMrIwomA1H0',
          },
          roleHighlights: `
            <ul>
              <li>Built the UI from ground up using asynchronous websocket called Tornado</li>
              <li>Since there is no server, used socketIO and Tornado to set up server for individual machine</li>
              <li>Architected a graphics editor that let you draw on a blank canvas, draw on image sent to you, 
              and draw on top of imported image found on your disk.</li>
              <li>Architected an animation editor that let you string multiple drawings to create a small GIF 
              to be sent through the client</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Sending and editing GIF</li>
            </ul>
          `
        },
  			longSummary: "CONTENT MOVED TO longSummaryData",
  		}
  		,
  		{
        id: "ra_curric",
  			imgCount: 9,
  			title: "RoboAcademy Curriculum Products",
        shortSummary: `Curriculum modules that teach robotics programming with real or virtual robots.`,
  			tags: [
          "HTML5",
          "jQuery",
          "Graphics",
  				"Video Production"
        ],
        longSummaryData: {
          projectDescription: `
            I collaborated with a robotics education specialist to produce a collection of 
            curriculum modules for introductory to
            intermediate level of robotics programming. The family of modules cover multiple programming
            languages and hardwares, such as LabView, RobotC, and EV3-Mindstorm.       
          `,
          roleHighlights: `
            <ul>
              <li>Architected <strong>data-driven static web modules</strong> for content delivery.</li>
              <li>Built many types of reusable, <strong>modularized widgets</strong> that checks answers and math. 
                  The widgets are used by me and other developers to create <strong>interactive quizzes</strong>
                  and activities.</li>
              <li>Optimize products for <strong>cross-browser compatibility</strong></li>
              <li>Optimize products to work with out-of-date technologies such as older browsers.</li>
              <li>Produced core lesson <strong>videos</strong>.</li>
              <li>Created graphic assets with a pioneering style that is adopted into curriculum
              modules that followed after.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Because the target environment is <strong>schools</strong>, the product could not 
              assume the target environment has internet, modern browsers, or latest OS.</li>
            </ul>
          `
        },
  			longSummary: "CONTENT MOVED TO longSummaryData"
  		}
  		,
  	]
}


export default projectData;