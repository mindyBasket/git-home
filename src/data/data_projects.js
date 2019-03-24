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
        "NWJS",
        "Mobile Dev",
        "BLE",
        "Sass",
  			],
        longSummary: `
          <div>
            <p>
              Formed a team of 3 engineers to implement a tool for programming robots. 
              We operated using agile practices, and shared responsibilities, as well as strategizing to modularize.
              Wait, I say that in the bullet below!!! 
              Built a working prototype with key features in 2 weeks, and continued to rapidly produce minimally 
              viable product, successfully reaching a software with full features in a month.  
              It is architected and developed using React.js.
            </p>
          </div>
  				<div class="flex_row">
					  <div class="box">
              <div class="section_title">Role highlights</div>
              <ul>
                <li>Built and designed UI and the main software structure in ReactJS</li>
                <li>Built reusable and flexible components used for UI interface, hardware connection</li>
                <li>Strategized modularizing tasks so that multiple engineer can build collaboratively to 
                delivery faster without quality loss.</li>
              </ul>
            </div>
            <div class="box">
              <div class="section_title">Key Challenges</div>
              <ul>
                <li>Integrating Blockly and compiling it into C++</li>
                <li>Working around limited time, strategizing to complete feature faster without quality loss.</li>
                <li>Cross-platform compatibility for both mobile and desktop: iOS, Android, ChromeOS, MacOS and Windows</li>
                <li>Complex hardware communications: Bluetooth and USB</li>
              </ul>
            </div>
  				</div>
  			`
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
        id: "flipbook",
  			imgCount: 2,
  			title: "Flipbook with Lambda",
  			shortSummary: "Cloud based animation editor for creating low-cost format of scenamatic story telling",
  			tags: [
  				"ReactJS",
          "Django",
  				"RESTful framework",
          "Node.js",
          "AWS S3",
          "AWS Lambda",
          "PIL",
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
        "STEM content",
        "Graphics",
        ],
        longSummaryData: {
          projectDescription: `
          Joined in a team of 3 to build a solution for STEM curriculum content that is stored
          and maintained in a 3rd party service. It had a notable challenge where it compiled all contents 
          into a format that does not match our client's need. It was not very accessible, and had an 
          incompatible distribution method. 
          </br>
          </br>
          We built a custom content delivery environment using PHP, MySQL, Javascript,
          and shell scripts to make it possible to serve, maintain and scale.
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
  			img: "",
  			title: "Sandbloqs",
  			shortSummary: "Visual programming language used to teach object oriented programming concepts",
  			tags: [
          "Javascript",
          "SemanticUI",
  				"Phaser",
  				"NW.js",
          "Blockly"
        ],
        longSummaryData: {
          projectDescription: `
            Blockly is a popular choice of library for creating a visual programming language editor, 
            especially for educational purposes. We leveraged the same technology to create a block-based
            programming language editor to be used along side with our STEM curriculum. 
            <br/>
            <br/>
            Sandbloqs has a unique feature that sets it apart from other Blockly projects: 
            <strong>object-oriented programming</strong>!
          `,
          roleHighlights: `
            <ul>
              <li>Designed UI to be friendly to young minds, as well as have smooth experience.</li>
              <li>Block extension to manipulate Phaser objects</li>
              <li>Helped add "Object" blocks that has its own private methods, properties, and graphics.</li>
              <li>Created blocks that can be used to draw simple shapes with given parameters.</li>
              <li>Create example programs used for curriculum, including a fully playable shooting game.</li>
              <li>Added behaviors to Phaser</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Project started around time the organization began to implement agile practices. 
              Limited time, fast developement</li>
              <li>Communication between Blockly and Phaser</li>
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
          "Full stack",
          "Icon Design"
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
  			imgCount: 0,
  			title: "Chat-Py",
  			shortSummary: "Chat client with built-in animation tool that let you draw a few frame send a hand-drawn message that comes to life!",
  			tags: [
          "Python",
          "Tornado",
          "SocketIO",
          "PIL"
        ],
        longSummaryData: {
          projectDescription: `
            
          `,
          roleHighlights: `
            <ul>
              <li>Architected an upgrade to the badge/achievement system have "tiers", which enables 
              badges to have a "progress" aspect, where any combination of one or more badges can trigger reward of another.</li>
              <li>Built interface for admins to create and edit achievement's new triggers.</li>
              <li>Built user profile interface for users to access, track, and share their badges and their progresses.</li>
              <li>Parser?</li>
              <li>Created the new family of badge graphics.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Increase in complexity of badge/achievement trigger</li>
            </ul>
          `
        },
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
  							Context: Madcap is a documentation program that we extended its usage to behave like Moodle. Javascript was used to fill the gap between desired UI/UX functionality to what Madcap can offer.

		  					Role Highlights:
		  					<ul>
								<li>Built animation UI in python<li>
								<li></li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>n/a</li>
		  					</ul>
		  				</p>
  					</div>
  					<div class="box">
  						Image
  					</div>
  				</div>
  			`
  		}
  		,
  		{
        id: "ra_curric",
  			imgCount: 9,
  			title: "RoboAcademy Curriculum Products",
        shortSummary: `A family of curriculum modules that teach robotics and computer programming concepts
         with video tutorials, engaging interactive quizzes, and much more.`,
  			tags: [
          "jQuery",
          "Graphic Assets",
  				"Video Production"
        ],
        longSummaryData: {
          projectDescription: `
            Collaborated with an Robotics education specialist to 
            architect and build a series of interactive, web-based curriculum delivery solution to 
            facilitate effective learning for students of robotics and STEM educators.

            Did everything on it from web dev, interactive widgets, course video and graphics
          `,
          roleHighlights: `
            <ul>
              <li></li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Intended to be installed on schools with out-of-date technologies.</li>
            </ul>
          `
        },
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
		  					Highlight of my role:
		  					<ul>
		  						<li>Built from scratch.</li>
		  						<li>Built reusable widgets for creating interactive quizzes</li>
		  						<li>Math parser for the widgets</li>
		  						<li>Video production</li>
                  <li>Built reusable, interactive 
          javascript components to be used for these app. They are lightweight interactive course delivery apps, optimized to be
          deployed to schools despite out-of-date technologies.</li>
          <li><strong>Reusable Components:</strong> nd architect javascript solutions to create components that is reusable for developers,
          as well as engaging for students to improve learning a range of programming languages such as LabView, EV3, and VEX</li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>Cannot assume target environment (school computer lab) has internet.</li>
		  						<li>Cannot assume target environment (school computer lab) has modern browsers.</li>
		  					</ul>
		  				</p>
  					</div>
  					<div class="box">
  						Image
  					</div>
  				</div>
  			`
  		}
  		,
  	]
}


export default projectData;