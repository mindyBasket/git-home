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
  			img: "",
  			title: "MindyBox v1",
  			shortSummary: "Personal portfolio site, and an opportunity to explore Vue.js",
  			tags: [
          "Vue.js",
          "Sass",
  			],
        longSummary: `
          <div>
            <p>
              
            </p>
          </div>
  				<div class="flex_row">
  					<div class="box">
  						<p>
						 	Role highlights:
		  					<ul>
		  						<li>Build from scratch</li>
		  					</ul>
		  				</p>
		  				<p>
						  	Key Challenges:
		  					<ul>
		  						<li>Learning Vue.js</li>
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
  			img: "",
  			title: "Flipbook with Lambda",
  			shortSummary: "Cloud based animation editor for creating low-cost format of scenamatic story telling",
  			tags: [
  				"ReactJS",
          "Django",
  				"RESTful framework",
          "Node.js",
          "PIL",
          "AWS S3",
  				"AWS Lambda",
  				"Heroku"
  			],
        longSummary: `
          <div>
            <p>
              Structure inspired by single-page task organizer such as Trello. Creates a story telling, animated medium 
              called "flipbook", which is half-way between a storyboard, and a movie. 
              The idea is to create a scenamatic, interactive story using just few frames. 
            <br/>
              Everything is on cloud; animations are baked using lambda. 
            <br/>
              More features are coming soon.
            </p>
          </div>
  				<div class="flex_row">
  					<div class="box">
              Role Highlights:
              <ul>
                <li>Front-end built using ReactJS, back-end built using Django</li>
                <li>RESTful api to make smooth single page app experience</li>
                <li>Disposable instances for easy demo</li>
                <li>Building and deploying using Node.js and Heroku</li>
              </ul>
            </div>
            <div class="box">
              Key Challenges:
              <ul>
                <li>Integrating ReactJS onto Django</li>
                <li>Serving large quantity of images</li>
                <li>Fitting video proccessing onto Lambda</li>
              </ul>
  					</div>
  				</div>
  			`
  		}
  		,
  		{
  			img: "",
  			title: "VEX Education Portal",
  			shortSummary: "STEM course content delivery platform",
  			tags: [
        "Javascript",
        "Handlebar.js",
        "PHP",
        "Node.js",
        "DevOps",
        ],
        longSummaryData: {
          projectDescription: `
          Joined in a team of 3 to build a solution to a content delivery challenge; 
          a growing amount of content is stored in 3rd party service that compiles all content 
          into a format that has insufficient accessibility, and is ineffective for distribution.     
          </br>
          The team brainstormed and built a custom content delivery environment using PHP, Javascript,
          and shell scripts to make it possible to serve, maintain and scale.
          `,
          roleHighlights: `
            <ul>
              <li>Helped <strong>schedule and automate</strong> building and deploying using Octopus Deploy.</li>
              <li>Added a throttler to keep connection alive as the amount of content increase rapidly.</li>
              <li>Exporter script to reduce pain of converting external CDS's foramt to ours</li>
              <li>Collaborate to build content delivery site that can deploy multiple different versions
              and flavors using single code base.</li>
              <li>Precompiler to index our curriculum for search Feature.</li>
              <li>Collaborated to build a login system for educators to access the portal.</li>
              <li>Brainstormed STEM Lab (Curriculum) activities for content developement.</li>
            </ul>
          `,
          notableChallenges: `
            <ul>
              <li>Dynamic requirements from the client, because the website was built the same time as the hardware it represents</li>
              <li>Rapid prototyping</li>
              <li>Entire archive of content is not available local. It is fetched through another CDS.</li>
              <li>Handling large archive that is rapidly expanding (2-5 GB)</li>
              <li>CDS format does not match with our custom delivery format</li>
            </ul>
          `
        },
        longSummary: "CONTENT MOVED TO longSummaryData"
  		}
  		,
  		{
  			img: "",
  			title: "Sandbloqs",
  			shortSummary: "Worked on an app that utilizes Google's Blockly. Intended to teach object oriented programming language.",
  			tags: [
  				"Javascript",
  				"Phaser",
  				"NW.js",
          "Blockly",
          "SemanticUI",
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
		  					Highlight of my role:
		  					<ul>
		  						<li>Block extension to manipulate Phaser objects</li>
		  						<li>UI</li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>Limited time, fast developement</li>
		  						<li>Adding object-oriented programming whereas blockly does NOT support</li>
		  						<li>Communication between Blockly and Phaser</li>
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
  			img: "/images/project_thumbs/cs2n_1.png",
  			title: "CS2N",
  			shortSummary: "Worked on the second iteration of the badge reward system, both back end and front end",
  			tags: [
  				"Ruby on Rails",
  				"jQuery",
          "mySQL",
          "Graphics",
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
  						Badge system was waiting for big update where it rewards different tiers of badge and UI to show user their badges and its progress to the higher tier

		  					Notable contributions by me:
		  					<ul>
		  						<li>Badge Tier system, and sub-badges<li>
		  						<li>Logic parser for interpreting trigger rule.</li>
		  						<li>UI+UX for new badge system</li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>Server sometimes crashes. Optimizing and throttling was necessary.</li>
		  						<li>First iteration of badge system written without any proper comments</li>
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
  			img: "",
  			title: "Chat-Py",
  			shortSummary: "Chat client with built-in animation tool that let you draw a few frame send a hand-drawn message that comes to life!",
  			tags: [
          "Python",
          "Tornado",
          "SocketIO",
          "PIL"
  			],
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
  			img: "/images/project_thumbs/cs2n_1.png",
  			title: "RoboAcademy Curriculum Products",
  			shortSummary: "Build a family of lightweight, standalone curriculum sites. Did everything for it, from web dev, interactive widgets, course video and graphics",
  			tags: [
  				"jQuery",
  				"Video Production"
  			],
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