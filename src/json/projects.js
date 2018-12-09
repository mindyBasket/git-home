var projectData = {

  	projects: [
  		{
  			img: "",
  			title: "[Secret ongoing project]",
  			shortSummary: "Building a mobile app that uses visual programming language to introduce children to robotics hardware and software",
  			tags: [
  				"ReactJS",
				"Unity",
				"Blockly"
  			],
  			longSummary: `
  				<div>
  					Key Features I worked on:
  					- Lead(?) ReactJS developer
  					- Optimization for keeping high frame rate in mobile app
  					- Flexible layout using all CSS tricks I can muster

  					Challenges:
  					- Compatible in iOS, Android, and ChromeOS
  					- Limited time. Fast developement. 
  					- App must be responsive
  					- Child friendly app
  					- keeping the same code base
  					- Complex communication of Bluetooth <-> App <-> Unity
  				</div>
  			`
  		}
  		,
  		{
  			img: "",
  			title: "MindyBox",
  			shortSummary: "Personal portfolio site. A simple version. This project should be in SideTrack",
  			tags: [
  				"Vue.js",
  			],
  			longSummary: `
				<div>
  					Key Features I worked on:
  					- Everything

  					Challenges:
  					- Must be fast
  					- Not overloaded with content
  				</div>
  			`
  		}
  		,
  		{
  			img: "",
  			title: "Flipbook",
  			shortSummary: "Build an app that generates sharable 'flipbooks', an alternative story telling format that is somewhere between an animated movie and a storyboard",
  			tags: [
  				"ReactJS",
  				"Django",
  				"RESTful framework",
  				"Node.js",
  				"AWS S3",
  				"Heroku"
  			],
  			longSummary: `
				<div>
					I made this project to teach myself Django and React. Started out as a Trello imitation but slowly found its purpose as an editor that creates an experimental form of media called "flipbook" (name subject to change).

					Flipbooks are intended to create something that appear scenamatic, but is low cost since it is not an actual movie. 

					The app is still at its infancy so currently lacks any user data.


  					Key Features I worked on:
  					- Everything, including deployment
  					- Semi-single-page-app. RESTful.

  					Challenges:
  					- Must be designed to handling very large number of images in a single page.
  					- Using AWS as CDS for speed
  				</div>
  			`
  		}
  		,
  		{
  			img: "",
  			title: "VEX Education Portal",
  			shortSummary: "Built a STEM course content delivery platform as well as the build script for content deployment",
  			tags: [
				"PHP",
				"Node.js",
				"Python",
				"DevOps"
  			],
  			longSummary: `
  				<div>
  					Key Features I worked on:
  					- Octobot. To ease process between content writer and developers
  					- Page logic. Client needed multiple variations of versions with different theme and different content available.
  					- Deployment script to reduce pain of converting external CDS's foramt to ours.
  					- Precompiler to index our curriculum for search Feature
  					- Login system
  					- STEM Lab (Curriculum) development

  					Challenges:
  					- Quick developement, short schedule, rapid prototype 
  					- Entire archive of content is not available local. It is fetched through another CDS.
  					- Archive extremely huge (2-5 GB)
  					- CDS format does not match with our custom delivery format
  				</div>
  			`
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

  			],
  			longSummary: `
  				<div>
  					Key Features I worked on:
  					- New blocks in Blockly that manipulate objects in Phaser instance
  					- UI/UX

  					Challenges:
  					- Limited time, fast developement
  					- Communication between Blockly and Phaser
  					- Adding object-oriented programming whereas blockly does NOT support
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
  				"Javascript",
  				"mySQL",
  			],
  			longSummary: `
  				<div>
  					Badge system was waiting for big update where it rewards different tiers of badge and UI to show user their badges and its progress to the higher tier. 

  					Key Features I worked on:
  					- Logic parser for interpreting trigger rule.
  					- UI/UX for badges for each user batch profile
  					- Badge Tier system, and sub-badges
  					- Badge design, and badge display design

  					Challenges:
  					- First iteration of badge system written without any proper comments
  					- Minimizing querying for efficiency
  					- Throttle Badge requests
  				</div>
  			`
  		}
  		,
  		{
  			img: "",
  			title: "Robomatter Curriculum Products",
  			shortSummary: "Assisted building course delivery platform by writing course content and making plugins and widgets that original software could not fill in",
  			tags: [
  				"Javascript",
  			],
  			longSummary: `
  				<div>
  					Madcap is a documentation program that we extended its usage to behave like Moodle. Javascript was used to fill the gap between desired UI/UX functionality to what Madcap can offer.

  					Key Features I worked on:
  					- Made plugin solution for various navigation shortcomings
  					- Curriculum Content development

  					Challenges:
  					- Overcoming poor choice of tools
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
  				<div>
  					Key Features I worked on:
  					- Everything except the curriculum content
  					- Video Production
  					- Widgets build for creating interactive quizzes
  					- Math parser for our widget

  					Challenges:
  					- Cannot assume target environment (school computer lab) has internet.
  					- Cannot assume target environment (school computer lab) has modern browsers.
  				</div>
  			`
  		}
  		,
  		{
  			img: "",
  			title: "HCII Research",
  			shortSummary: "Worked as a research assistant creating interface to delivering content",
  			tags: [
  				"ActionScript 3",
  				"CTAT",
  				"Vector Art",
  			],
  			longSummary: `
  				<div>
  					Worked as an intern making flash interactives back when Animate was called Flash. CMU HCII is researching better way to teach information, particularly math, using CTAT.

  					Key Features I worked on:
  					- UI/UX
  					- Hint System
  					- Graphic assets

  					Challenges:
  					- Making coherent interface based on events being sent from CTAT
  				</div>
  			`
  		}

  	]
}