var projectData = {

  	projects: [
  		{

  			img: "",
  			title: "Ongoing projects at Robomatter",
  			shortSummary: "Building a mobile app that uses visual programming language to introduce children to robotics hardware and programming",
  			tags: [
  				"ReactJS",
				"Blockly"
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
		  					Notable contributions by me:
		  					<ul>
		  						<li>Lead ReactJS developer</li>
		  						<li>Optimization for UX on Mobile</li>
		  						<li>Flexible layout for cross platform compatibility<li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>Cross-platform compatibility: iOS, Android, and ChromeOS</li>
		  						<li>Keeping the same code base</li>
		  						<li>Building communication between Bluetooth <-> App <-> Unity</li>
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
  			title: "MindyBox v1",
  			shortSummary: "Personal portfolio site, and an opportunity to explore Vue.js",
  			tags: [
  				"Vue.js",
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
		  					Highlight of my role:
		  					<ul>
		  						<li>Build from scratch</li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
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
  			title: "Flipbook",
  			shortSummary: "Build an app that started as a trello-like photo manager but became an animation editor",
  			tags: [
  				"ReactJS",
  				"Django",
  				"RESTful framework",
  				"Node.js",
  				"AWS",
  				"Heroku"
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
  							This Started out as a Trello imitation of collecting and tagging images but changed its purpose as an animation editor that creates an experimental form of media called "flipbook" (name subject to change).
  							<br/>
  							Flipbooks are intended to create something that appear scenamatic, but is low cost since it is not an actual movie. 
  							<br/>
							The app is still at its infancy. More features will be added.
  						</p>
  						<p>
		  					Highlight of my role:
		  					<ul>
		  						<li>Both front-end and back-end</li>
		  						<li>Using RESTful api to make single page app for certain objects</li>
		  						<li>Building and deploying</li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>Creating a disposable demo instance</li>
		  						<li>Optimization around rendering and animating large number of images</li>
		  						<li>Fetching images from external CDS that has better storage</li>
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
  			title: "VEX Education Portal",
  			shortSummary: "Built a STEM course content delivery platform as well as the build script for content deployment",
  			tags: [
				"PHP",
				"Node.js",
				"Python",
				"DevOps"
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
		  					Highlight of my role:
		  					<ul>
		  						<li>Used Octobot for scheduled build and deployment</li>
		  						<li>Keeping same code base, deploy multiple versions</li>
		  						<li>Exporter script to reduce pain of converting external CDS's foramt to ours</li>
		  						<li>Precompiler to index our curriculum for search Feature</li>
		  						<li>Login system</li>
		  						<li>STEM Lab (Curriculum) development</li>
		  					</ul>
		  				</p>
		  				<p>
		  					Notable Challenges:
		  					<ul>
		  						<li>Dynamic requirements from the client, because the website was built the same time as the hardware it represents</li>
		  						<li>Rapid prototyping</li>
		  						<li>Entire archive of content is not available local. It is fetched through another CDS.</li>
		  						<li>Handling large archive (2-5 GB)</li>
		  						<li>CDS format does not match with our custom delivery format</li>
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
  			title: "Sandbloqs",
  			shortSummary: "Worked on an app that utilizes Google's Blockly. Intended to teach object oriented programming language.",
  			tags: [
  				"Javascript",
  				"Phaser",
  				"NW.js",
  				"Blockly",

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
  				"Javascript",
  				"mySQL",
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
  			title: "Robomatter Curriculum Products",
  			shortSummary: "Assisted building course delivery platform by writing course content and making plugins and widgets that original software could not fill in",
  			tags: [
  				"Javascript",
  			],
  			longSummary: `
  				<div class="flex_row">
  					<div class="box">
  						<p>
  							Context: Madcap is a documentation program that we extended its usage to behave like Moodle. Javascript was used to fill the gap between desired UI/UX functionality to what Madcap can offer.

		  					Notable contributions by me:
		  					<ul>
		  						<li>Made plugin solution for various navigation shortcomings<li>
		  						<li>Curriculum Content development</li>
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