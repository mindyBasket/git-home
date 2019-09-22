var projectData = {

  	projects: [
  		{
        id: "vexcode_blocks",
  			imgCount: 3,
  			title: "VEXcode Blocks",
        shortSummary: "Ongoing project",
        external_links: ["https://www.vexrobotics.com/vexcode-blocks"],
  			tags: [
        "ReactJS",  
        "TypeScript",
        "Node.js",
        "NW.js",
        "Mobile Dev",
        "BLE",
        ],
        longSummaryData: {
          projectDescription: `
            I worked in a team of 3 engineers to build a block-based robot code for a young audience. 
            Using agile practices, we delivered a code editor that can connect to the associated robot hardware, 
            configure, write code, and run it. This app is classroom-friendly, 
            so students and teachers will find useful built-in features such as tutorials, templates, and command references.

            This project was completed under urgent circumstances, making the delivery timeline aggressive.
          `,
          roleHighlights: `
            <ul>
              <li>Collaborated to built a working prototype with key features in 2 weeks, then delivering the final product in 6 months.</li> 
              <li>Adopted <strong>agile practices</strong> to deliver increments faster without compromising quality.</li>
              <li>Responsible for the majority of the front-end using <strong>ReactJS</strong> and <strong>Typescript</strong>, 
              to build data-driven, modularized and maintainable code.</li>
              <li>Strategized on testing, maintaining, and precompiling data to ensure continuous deployment.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Achieving <strong>cross-platform compatibility</strong>: currently available for Windows, macOS, Android, iOS, and Chrome OS.</li>
              <li>Creating a system and workflow to standardize, automate, and import <strong>various form of content data</strong> coming from media developers,
               educators, and translators.</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData",
  		}
  		,
  		{
        id: "flipbook",
  			imgCount: 3,
  			title: "Flipbook with Lambda",
        shortSummary: "Cloud based animation editor",
        external_links: ["https://playflipbook.herokuapp.com/","https://github.com/blacksandbox/paper-cumulus"],
  			tags: [
  				"ReactJS",
          "Django",
          "RESTful framework",
          "AWS S3",
          "AWS Lambda",
  				"Heroku"
        ],
        longSummaryData: {
          projectDescription: `
          Inspired by single-page task managing apps, this app creates a story telling, animated medium 
          called "flipbook", which is half-way between a storyboard, and a movie. 
          The idea is to create a scenamatic, interactive story using much lighter resource. 
          <br/><br/>
          Currently this app is available with invite only, but a demo is available to public.
          <br/><br/> 
          New features will be continuously added, and in the next iteration, the app's UI will appear closer
          a video editor for more intuitive editing.
          `,
          featureHighlights: `
            <ul>
              <li>Front-end is <strong>ReactJS</strong>, and back-end is <strong>Django</strong>.
               Taught my self ReactJS as I go.</li>
              <li>Uses <strong>RESTful APIs</strong> to create a smooth single page app experience.</li>
              <li>Features an <strong>alternative video UI</strong> for viewing an instance of a "Flipbook".</li>
              <li>Does all <strong>video processing on cloud</strong> using a powerful 
              API-triggered <strong>Lambda</strong> function written in python.</li>
              <li>Visitors can <strong>demo</strong> the app through a copy of disposable instance.</li>
              <li>Deployed on <strong>Heroku</strong>.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Integrating ReactJS into the Django RESTful framework.</li>
              <li>Serving and handling a large number of images.</li>
              <li>Lambda's <strong>size restriction</strong> of 250mb created a challenge 
              hosting my video processing module that use <strong>ffmpeg</strong> for encoding video for web.</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData"
  		}
      ,
  		{
        id: "vex_portal",
  			imgCount: 5,
  			title: "VEX Education Portal",
        shortSummary: "STEM course content delivery platform",
        external_links: [],
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
              <li>Collaborated to build a <strong>content delivery site</strong> that is deployed in
               multiple versions using a single code base.</li>
              <li>Helped building the <strong>deployment pipeline</strong> to schedule and automate using Octopus Deploy.</li>
              <li>Implemented scripts to <strong>precompile and throttle</strong> in order to manage resources and reduce traffic 
               as the amount of contents increased rapidly.</li>
              <li>Built a <strong>login system</strong> for educators to access the portal.</li>
              <li>Created <strong>robot sprite</strong> assets.</li>
              <li>Brainstormed and created <strong>STEM Labs</strong> and activities used in the curriculum.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Deploying a heavy archive that is <strong>rapidly expanding</strong> and changing  
              (1 GB to 5 GB in a span of few weeks)</li>
              <li>Rapidly changing requirements and requests from our clients.</li>
              <li>Adding and exposing <strong>custom behaviors</strong> such as in a framework not intended to be customized.</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData"
  		}
      ,
      {
        id:"mindybox",
        imgCount: 2,
  			title: "MindyBox v1",
        shortSummary: "Personal portfolio site version 1",
        external_links: ["","https://github.com/blacksandbox/mindybox-v1"],
  			tags: [
          "Vue.js",
          "Sass",
        ],
        longSummaryData: {
          projectDescription: `
          A lightweight static website to showcase my skill and background. 
          A project that also served in helping me learn <strong>Vue.js</strong>. Some inspiration taken from Trello.
          `,
        },
        longSummary: "use longSummaryData",
  		}
      ,
      {
        id: "sandbloqs",
        imgCount: 7,
        imgExtMap: [null, null, null, null, "gif", "gif", "gif"],
  			title: "Sandbloqs",
        shortSummary: "Visual programming language for teaching OOP concepts",
        external_links: [],
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
  			imgCount: 3,
  			title: "CS2N",
        shortSummary: "Badge/Achievement system overhaul",
        external_links: [],
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
            I entered the project to overhaul the existing badge/achivement system to have an extra depth.
            This game-ifies learning farther, allowing more incentives and motivations for students to 
            complete educational activities.   
          `,
          roleHighlights: `
            <ul>
              <li>Architected a system to add <strong>tiers</strong> to the badges/achievements, 
              where higher-tier badge can be unlocked by a specified combination of one or more lower-badges.</li>
              <li>Built <strong>interface for admins</strong> to create and edit new triggers for the new types of badges.</li>
              <li>Built <strong>user profile</strong> interface for users to access, track, and share their 
              badges and their progresses.</li>
              <li>Created the a family of <strong>badge graphics</strong>.</li>
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
          Chat client with a drawing and animation tool
        `,
        external_links: [],
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
            The term project is a chat client written in Python. Due to the requirements,
            the chat app could not use any web server for demonstation. As a proof of concept, 
            SocketIO was used connect to another device using an IP address. 
            <br/>
            <br/>
            However, Tornado was incoporated into the app structure to prepare for future conversion into 
            a web app.
          `,
          links: {
            youtube: 'https://youtu.be/sMrIwomA1H0',
          },
          featureHighlights: `
            <ul>
              <li>Built using an <strong>asynchronous websocket</strong> library, 
              so that you can connect as many friend into one chat room.</li>
              <li><strong>Share and save images</strong> with your friend.</li>
              <li>Send <strong>animated GIFs</strong> that will play on the chat client. Great
              for sharing funny reaction images. It will <strong>pause automatically</strong> when scrolled
              out of the view, or if the user clicks on it.</li>
              <li>Features a <strong>drawing tool</strong> that let you draw from scratch, draw onto other's drawing, and 
              draw on images you upload.</li>
              <li>Features an <strong>animation editor</strong> for you to string a few drawings 
              in sequence to bring your message to life.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Buffering animated GIF images.</li>
              <li>Animation editor that you can fit into a chat box.</li>
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
        external_links: ["https://www.cmu.edu/roboticsacademy/roboticscurriculum/index.html", ""],
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
            languages and hardwares, such as <strong>LabView</strong>, <strong>RobotC</strong>,
             and <strong>LEGO EV3-Mindstorm</strong>.       
          `,
          roleHighlights: `
            <ul>
              <li>Architected <strong>data-driven static web modules</strong> for content delivery.</li>
              <li>Built many types of reusable, <strong>modularized widgets</strong> that checks answers and math. 
                  The widgets are used by me and other developers to create <strong>interactive quizzes</strong>
                  and activities.</li>
              <li>Optimize products for <strong>cross-browser compatibility</strong>.</li>
              <li>Produced core lesson <strong>videos</strong>.</li>
              <li>Created <strong>graphic assets</strong> that became to define the pioneering style 
              of the product family, and was adopted into curriculum modules that followed after.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Because the target environment is <strong>school</strong>, the product could not 
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